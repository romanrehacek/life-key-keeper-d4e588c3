
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageTemplate from '@/components/PageTemplate';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import RichTextEditor from '@/components/RichTextEditor';
import TemplateSelectionDialog from '@/components/TemplateSelectionDialog';
import { DocumentTemplate } from '@/types/templates';
import { useToast } from '@/hooks/use-toast';

const DocumentEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const [documentTitle, setDocumentTitle] = useState("Informácie o domácnosti");
  const [documentDescription, setDocumentDescription] = useState("Kúrenie, ističe, zabezpečenie domu a ovládanie smart zariadení.");
  const [documentType, setDocumentType] = useState("household");
  const [documentContent, setDocumentContent] = useState(`# Zabezpečovací systém\n\nKód do alarmu: 1234\n\nAlarm sa zapína/vypína pri vchodových dverách na ovládacom paneli.\n\n# Kúrenie\n\nKotol sa nachádza v technickej miestnosti...`);
  
  const handleSave = () => {
    toast({
      title: t("document.edit.saved"),
      description: t("document.edit.savedDescription")
    });
    navigate(`/document/${id}`);
  };
  
  const handleCancel = () => {
    navigate(`/document/${id}`);
  };
  
  const handleSelectTemplate = (template: DocumentTemplate) => {
    setDocumentContent(template.content);
    toast({
      title: t("document.edit.templateApplied"),
      description: `${t("document.edit.templateAppliedDescription")} "${template.title}"`
    });
  };

  return (
    <PageTemplate title={t("document.edit.title")}>
      <div className="max-w-4xl mx-auto">
        <Link to={`/document/${id}`} className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("common.back")}
        </Link>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">{t("document.edit.title")}</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="title">{t("document.edit.name")}</Label>
              <Input 
                id="title" 
                value={documentTitle} 
                onChange={(e) => setDocumentTitle(e.target.value)} 
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">{t("document.edit.description")}</Label>
              <Input 
                id="description" 
                value={documentDescription} 
                onChange={(e) => setDocumentDescription(e.target.value)} 
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="type">{t("document.edit.type")}</Label>
              <div className="flex gap-2">
                <Select value={documentType} onValueChange={setDocumentType}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="household">{t("document.types.household")}</SelectItem>
                    <SelectItem value="finance">{t("document.types.finance")}</SelectItem>
                    <SelectItem value="crypto">{t("document.types.crypto")}</SelectItem>
                    <SelectItem value="family">{t("document.types.family")}</SelectItem>
                    <SelectItem value="instructions">{t("document.types.instructions")}</SelectItem>
                  </SelectContent>
                </Select>
                
                <TemplateSelectionDialog 
                  selectedCategory={documentType}
                  onSelectTemplate={handleSelectTemplate}
                >
                  <Button variant="outline">{t("document.edit.template")}</Button>
                </TemplateSelectionDialog>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content">{t("document.edit.content")}</Label>
              <RichTextEditor 
                value={documentContent} 
                onChange={setDocumentContent} 
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleCancel}>
              {t("document.edit.cancel")}
            </Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={handleSave}>
              {t("document.edit.save")}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default DocumentEdit;
