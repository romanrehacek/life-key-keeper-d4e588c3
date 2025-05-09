import React, { useState, useEffect } from "react";
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Code,
  Paperclip,
  Image,
  FileText,
  Trash2,
  Palette
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface FileAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
}

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ 
  value, 
  onChange,
  className
}) => {
  const { t } = useLanguage();
  const [editorMode, setEditorMode] = useState<'visual' | 'markdown'>('visual');
  const [selection, setSelection] = useState<{ start: number; end: number }>({ start: 0, end: 0 });
  const [visualContent, setVisualContent] = useState<string>("");
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const visualEditorRef = React.useRef<HTMLDivElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [attachments, setAttachments] = useState<FileAttachment[]>([]);

  useEffect(() => {
    let html = value
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/__(.*?)__/g, '<u>$1</u>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^- (.*$)/gm, '<ul><li>$1</li></ul>')
      .replace(/^[0-9]+\. (.*$)/gm, (match, p1) => {
        const num = match.split('.')[0];
        return `<ol start="${num}"><li>${p1}</li></ol>`;
      });
    
    html = html.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
    
    setVisualContent(html);
  }, [value]);

  const handleTextSelection = () => {
    if (textAreaRef.current) {
      setSelection({
        start: textAreaRef.current.selectionStart,
        end: textAreaRef.current.selectionEnd
      });
    }
  };

  const applyFormatting = (startTag: string, endTag: string = "") => {
    if (editorMode === 'visual') {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();
      
      if (!selectedText) return;
      
      let formattedHtml = '';
      const finalEndTag = endTag || startTag;
      
      if (startTag === '**') {
        formattedHtml = `<strong>${selectedText}</strong>`;
      } else if (startTag === '*') {
        formattedHtml = `<em>${selectedText}</em>`;
      } else if (startTag === '__') {
        formattedHtml = `<u>${selectedText}</u>`;
      } else if (startTag === '`') {
        formattedHtml = `<code>${selectedText}</code>`;
      } else if (startTag === '# ') {
        formattedHtml = `<h1>${selectedText}</h1>`;
      } else if (startTag === '## ') {
        formattedHtml = `<h2>${selectedText}</h2>`;
      } else if (startTag === '### ') {
        formattedHtml = `<h3>${selectedText}</h3>`;
      } else if (startTag === '- ') {
        formattedHtml = `<ul><li>${selectedText}</li></ul>`;
      } else if (startTag === '1. ') {
        formattedHtml = `<ol><li>${selectedText}</li></ol>`;
      }
      
      document.execCommand('insertHTML', false, formattedHtml);
      
      if (visualEditorRef.current) {
        const newMarkdown = convertToMarkdown(visualEditorRef.current.innerHTML);
        onChange(newMarkdown);
      }
    } else {
      if (textAreaRef.current) {
        const textBefore = value.substring(0, selection.start);
        const selectedText = value.substring(selection.start, selection.end);
        const textAfter = value.substring(selection.end);
        
        const finalEndTag = endTag || startTag;
        const newText = `${textBefore}${startTag}${selectedText}${finalEndTag}${textAfter}`;
        
        onChange(newText);
        
        setTimeout(() => {
          if (textAreaRef.current) {
            textAreaRef.current.focus();
            textAreaRef.current.setSelectionRange(
              selection.start + startTag.length,
              selection.end + startTag.length
            );
          }
        }, 0);
      }
    }
  };

  const convertToMarkdown = (html: string): string => {
    let markdown = html;
    
    markdown = markdown
      .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
      .replace(/<em>(.*?)<\/em>/g, '*$1*')
      .replace(/<u>(.*?)<\/u>/g, '__$1__')
      .replace(/<code>(.*?)<\/code>/g, '`$1`')
      .replace(/<h1>(.*?)<\/h1>/g, '# $1')
      .replace(/<h2>(.*?)<\/h2>/g, '## $1')
      .replace(/<h3>(.*?)<\/h3>/g, '### $1')
      .replace(/<ul><li>(.*?)<\/li><\/ul>/g, '- $1')
      .replace(/<ol start="(\d+)?"><li>(.*?)<\/li><\/ol>/g, '$1. $2')
      .replace(/<ol><li>(.*?)<\/li><\/ol>/g, '1. $1');
    
    markdown = markdown.replace(/<br><br>/g, '\n\n').replace(/<br>/g, '\n');
    
    return markdown;
  };

  const applyTextColor = (color: string) => {
    if (editorMode === 'visual') {
      document.execCommand('foreColor', false, color);
      
      if (visualEditorRef.current) {
        const newMarkdown = convertToMarkdown(visualEditorRef.current.innerHTML);
        onChange(newMarkdown);
      }
    } else {
      applyFormatting(`<span style="color: ${color}">`, '</span>');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const newAttachments = Array.from(files).map(file => ({
      id: Math.random().toString(36).substring(2, 11),
      name: file.name,
      type: file.type,
      size: file.size,
      url: URL.createObjectURL(file)
    }));
    
    setAttachments([...attachments, ...newAttachments]);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeAttachment = (id: string) => {
    setAttachments(attachments.filter(a => a.id !== id));
  };
  
  const insertImageLink = (attachment: FileAttachment) => {
    if (editorMode === 'visual') {
      const isImage = attachment.type.startsWith('image/');
      
      if (isImage) {
        document.execCommand('insertImage', false, attachment.url);
      } else {
        const linkText = attachment.name;
        document.execCommand('createLink', false, attachment.url);
      }
      
      if (visualEditorRef.current) {
        const newMarkdown = convertToMarkdown(visualEditorRef.current.innerHTML);
        onChange(newMarkdown);
      }
    } else {
      if (textAreaRef.current) {
        const isImage = attachment.type.startsWith('image/');
        const linkText = isImage 
          ? `![${attachment.name}](${attachment.url})`
          : `[${attachment.name}](${attachment.url})`;
        
        const cursorPos = textAreaRef.current.selectionStart;
        const textBefore = value.substring(0, cursorPos);
        const textAfter = value.substring(cursorPos);
        
        const newText = `${textBefore}${linkText}${textAfter}`;
        onChange(newText);
      }
    }
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="h-4 w-4" />;
    return <FileText className="h-4 w-4" />;
  };

  const handleVisualEditorChange = () => {
    if (visualEditorRef.current) {
      const markdown = convertToMarkdown(visualEditorRef.current.innerHTML);
      onChange(markdown);
    }
  };

  const FormattingToolbar = () => (
    <div className="flex flex-wrap items-center gap-1 p-1 bg-muted/30 rounded-md">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => applyFormatting("**", "**")}
        title="Bold"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => applyFormatting("*", "*")}
        title="Italic"
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => applyFormatting("__", "__")}
        title="Underline"
      >
        <Underline className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => applyFormatting("`", "`")}
        title="Code"
      >
        <Code className="h-4 w-4" />
      </Button>
      
      <Separator orientation="vertical" className="h-6" />
      
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => applyFormatting("# ")}
        title="Heading 1"
      >
        <Heading1 className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => applyFormatting("## ")}
        title="Heading 2"
      >
        <Heading2 className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => applyFormatting("### ")}
        title="Heading 3"
      >
        <Heading3 className="h-4 w-4" />
      </Button>
      
      <Separator orientation="vertical" className="h-6" />
      
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => applyFormatting("- ")}
        title="Bullet List"
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => applyFormatting("1. ")}
        title="Numbered List"
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      
      <Separator orientation="vertical" className="h-6" />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            title="Text Color"
          >
            <Palette className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => applyTextColor('inherit')}>
            <div className="w-4 h-4 mr-2 border border-gray-300 bg-transparent"></div>
            Predvolená
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('red')}>
            <div className="w-4 h-4 mr-2 bg-red-500 rounded-sm"></div>
            Červená
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('blue')}>
            <div className="w-4 h-4 mr-2 bg-blue-500 rounded-sm"></div>
            Modrá
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('green')}>
            <div className="w-4 h-4 mr-2 bg-green-500 rounded-sm"></div>
            Zelená
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('yellow')}>
            <div className="w-4 h-4 mr-2 bg-yellow-500 rounded-sm"></div>
            Žltá
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('purple')}>
            <div className="w-4 h-4 mr-2 bg-purple-500 rounded-sm"></div>
            Fialová
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <div className="flex-1"></div>
    </div>
  );

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <Tabs value={editorMode} onValueChange={(value) => setEditorMode(value as 'visual' | 'markdown')}>
        <TabsList className="mb-2">
          <TabsTrigger value="visual">Vizuálny režim</TabsTrigger>
          <TabsTrigger value="markdown">Markdown režim</TabsTrigger>
        </TabsList>
        
        <TabsContent value="visual" className="space-y-2">
          <FormattingToolbar />
          
          <div
            ref={visualEditorRef}
            className="min-h-[400px] p-4 border rounded-md overflow-auto"
            dangerouslySetInnerHTML={{ __html: visualContent }}
            contentEditable
            onInput={handleVisualEditorChange}
          />
        </TabsContent>
        
        <TabsContent value="markdown" className="space-y-2">
          <FormattingToolbar />
          
          <Textarea
            ref={textAreaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onSelect={handleTextSelection}
            onClick={handleTextSelection}
            className="min-h-[400px] font-mono text-sm"
          />
        </TabsContent>
      </Tabs>
      
      <div className="flex flex-col space-y-2 border-t pt-3 mt-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Prílohy</h4>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            title="Priložiť súbor"
          >
            <Paperclip className="h-4 w-4 mr-1" />
            Priložiť súbor
          </Button>
          <input 
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            multiple
            accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx,.txt,.rtf"
          />
        </div>
        
        {attachments.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {attachments.map((attachment) => (
              <div key={attachment.id} className="flex items-center justify-between border rounded p-2 text-sm">
                <div className="flex items-center overflow-hidden">
                  {getFileIcon(attachment.type)}
                  <span className="ml-2 truncate" title={attachment.name}>{attachment.name}</span>
                </div>
                <div className="flex items-center">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => insertImageLink(attachment)}
                    title="Vložiť do dokumentu"
                  >
                    <Paperclip className="h-3 w-3" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-destructive hover:text-destructive/90"
                    onClick={() => removeAttachment(attachment.id)}
                    title="Odstrániť prílohu"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RichTextEditor;
