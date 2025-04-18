
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { documentTemplates, DocumentTemplate } from "@/types/templates";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/LanguageContext";

interface TemplatePreviewProps {
  template: DocumentTemplate;
  onSelect: (template: DocumentTemplate) => void;
  onPreview: (template: DocumentTemplate) => void;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ template, onSelect, onPreview }) => {
  const { t } = useLanguage();

  return (
    <div className="border rounded-lg p-4 hover:bg-accent/50 cursor-pointer transition-colors">
      <h3 className="font-medium text-lg mb-1">{template.title}</h3>
      <p className="text-muted-foreground text-sm mb-3">{template.description}</p>
      <div className="flex justify-end">
        <Button 
          variant="outline" 
          size="sm"
          className="mr-2"
          onClick={() => onPreview(template)}
        >
          {t("document.edit.preview")}
        </Button>
        <DialogClose asChild>
          <Button 
            size="sm"
            onClick={() => onSelect(template)}
          >
            {t("document.edit.template")}
          </Button>
        </DialogClose>
      </div>
    </div>
  );
};

interface TemplateSelectionDialogProps {
  selectedCategory: string;
  onSelectTemplate: (template: DocumentTemplate) => void;
  children?: React.ReactNode;
}

const TemplateSelectionDialog: React.FC<TemplateSelectionDialogProps> = ({
  selectedCategory,
  onSelectTemplate,
  children
}) => {
  const { t } = useLanguage();
  const filteredTemplates = documentTemplates.filter(
    template => template.category === selectedCategory
  );
  
  const [open, setOpen] = React.useState(false);
  const [previewTemplate, setPreviewTemplate] = React.useState<DocumentTemplate | null>(null);

  const handleSelectTemplate = (template: DocumentTemplate) => {
    onSelectTemplate(template);
    setOpen(false); // Close the main dialog when selecting a template
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{t("document.edit.template")}</DialogTitle>
            <DialogDescription>
              {filteredTemplates.length > 0 
                ? "Choose a template for your document" 
                : "No templates available for this category"}
            </DialogDescription>
          </DialogHeader>
          
          {filteredTemplates.length > 0 ? (
            <div className="grid gap-4 py-4">
              {filteredTemplates.map((template) => (
                <TemplatePreview 
                  key={template.id}
                  template={template}
                  onSelect={handleSelectTemplate}
                  onPreview={setPreviewTemplate}
                />
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-muted-foreground">
              No templates available for this category.
            </p>
          )}
        </DialogContent>
      </Dialog>

      {previewTemplate && (
        <Dialog open={!!previewTemplate} onOpenChange={() => setPreviewTemplate(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>{previewTemplate.title}</DialogTitle>
              <DialogDescription>{previewTemplate.description}</DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[50vh] mt-2">
              <div className="whitespace-pre-wrap font-mono text-sm p-4 border rounded-md bg-muted/30">
                {previewTemplate.content}
              </div>
            </ScrollArea>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setPreviewTemplate(null)}>
                {t("document.edit.cancel")}
              </Button>
              <Button onClick={() => {
                handleSelectTemplate(previewTemplate);
                setPreviewTemplate(null);
              }}>
                {t("document.edit.template")}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default TemplateSelectionDialog;
