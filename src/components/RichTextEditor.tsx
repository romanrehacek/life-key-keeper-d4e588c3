import React, { useState } from "react";
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
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [attachments, setAttachments] = useState<FileAttachment[]>([]);

  const handleTextSelection = () => {
    if (textAreaRef.current) {
      setSelection({
        start: textAreaRef.current.selectionStart,
        end: textAreaRef.current.selectionEnd
      });
    }
  };

  const applyFormatting = (startTag: string, endTag: string = "") => {
    if (textAreaRef.current) {
      const textBefore = value.substring(0, selection.start);
      const selectedText = value.substring(selection.start, selection.end);
      const textAfter = value.substring(selection.end);
      
      const finalEndTag = endTag || startTag;
      const newText = `${textBefore}${startTag}${selectedText}${finalEndTag}${textAfter}`;
      
      onChange(newText);
      
      // Set focus back to textarea
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
  };

  const applyTextColor = (color: string) => {
    applyFormatting(`<span style="color: ${color}">`, '</span>');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    // Here we would normally upload the file to a server
    // For now, we'll just create a URL and add to attachments
    const newAttachments = Array.from(files).map(file => ({
      id: Math.random().toString(36).substring(2, 11),
      name: file.name,
      type: file.type,
      size: file.size,
      url: URL.createObjectURL(file)
    }));
    
    setAttachments([...attachments, ...newAttachments]);
    
    // Reset the input to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeAttachment = (id: string) => {
    setAttachments(attachments.filter(a => a.id !== id));
  };
  
  const insertImageLink = (attachment: FileAttachment) => {
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
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="h-4 w-4" />;
    return <FileText className="h-4 w-4" />;
  };

  const getDisplayValue = () => {
    if (editorMode === 'visual') {
      return value
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/__(.*?)__/g, '<u>$1</u>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^- (.*$)/gm, '• $1')
        .replace(/^[0-9]+\. (.*$)/gm, (match, p1, offset) => {
          const num = match.split('.')[0];
          return `${num}. ${p1}`;
        });
    }
    return value;
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
            {t("editor.default")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('red')}>
            <div className="w-4 h-4 mr-2 bg-red-500 rounded-sm"></div>
            {t("editor.red")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('blue')}>
            <div className="w-4 h-4 mr-2 bg-blue-500 rounded-sm"></div>
            {t("editor.blue")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('green')}>
            <div className="w-4 h-4 mr-2 bg-green-500 rounded-sm"></div>
            {t("editor.green")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('yellow')}>
            <div className="w-4 h-4 mr-2 bg-yellow-500 rounded-sm"></div>
            {t("editor.yellow")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => applyTextColor('purple')}>
            <div className="w-4 h-4 mr-2 bg-purple-500 rounded-sm"></div>
            {t("editor.purple")}
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
          <TabsTrigger value="visual">{t("editor.visualMode")}</TabsTrigger>
          <TabsTrigger value="markdown">{t("editor.markdownMode")}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="visual" className="space-y-2">
          <FormattingToolbar />
          
          <div
            className="min-h-[400px] font-mono text-sm p-4 border rounded-md"
            dangerouslySetInnerHTML={{ __html: getDisplayValue() }}
            contentEditable
            onInput={(e) => {
              const content = e.currentTarget.innerText;
              onChange(content);
            }}
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
          <h4 className="text-sm font-medium">{t("document.edit.attachments")}</h4>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            title={t("document.edit.attachFile")}
          >
            <Paperclip className="h-4 w-4 mr-1" />
            {t("document.edit.attachFile")}
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
                    title={t("document.edit.insertIntoDocument")}
                  >
                    <Paperclip className="h-3 w-3" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-destructive hover:text-destructive/90"
                    onClick={() => removeAttachment(attachment.id)}
                    title={t("document.edit.removeAttachment")}
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
