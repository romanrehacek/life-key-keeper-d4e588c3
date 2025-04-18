
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
  AlignRight
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
  const [selection, setSelection] = useState<{ start: number; end: number }>({ start: 0, end: 0 });
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

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

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
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
      </div>
      
      <Textarea
        ref={textAreaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSelect={handleTextSelection}
        onClick={handleTextSelection}
        className="min-h-[400px] font-mono text-sm"
      />
    </div>
  );
};

export default RichTextEditor;
