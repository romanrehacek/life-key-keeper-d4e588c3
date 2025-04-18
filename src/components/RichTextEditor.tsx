
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
  PaperClip,
  Image,
  FileText,
  Trash2
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

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

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <Tabs value={editorMode} onValueChange={(value) => setEditorMode(value as 'visual' | 'markdown')}>
        <TabsList className="mb-2">
          <TabsTrigger value="visual">Visual Editor</TabsTrigger>
          <TabsTrigger value="markdown">Markdown</TabsTrigger>
        </TabsList>
        
        <TabsContent value="visual" className="space-y-2">
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
            
            <div className="flex-1"></div>
            
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              title="Attach File"
            >
              <PaperClip className="h-4 w-4" />
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
          
          <Textarea
            ref={textAreaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onSelect={handleTextSelection}
            onClick={handleTextSelection}
            className="min-h-[400px] font-mono text-sm"
          />
        </TabsContent>
        
        <TabsContent value="markdown">
          <Textarea
            ref={textAreaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onSelect={handleTextSelection}
            onClick={handleTextSelection}
            className="min-h-[460px] font-mono text-sm"
          />
        </TabsContent>
      </Tabs>
      
      {attachments.length > 0 && (
        <div className="border rounded p-2">
          <h4 className="text-sm font-medium mb-2">Attachments</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
                    title="Insert into document"
                  >
                    <PaperClip className="h-3 w-3" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-destructive hover:text-destructive/90"
                    onClick={() => removeAttachment(attachment.id)}
                    title="Remove attachment"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
