
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
      title: "Dokument uložený",
      description: "Dokument bol úspešne uložený."
    });
    navigate(`/document/${id}`);
  };
  
  const handleCancel = () => {
    navigate(`/document/${id}`);
  };
  
  const handleSelectTemplate = (template: DocumentTemplate) => {
    setDocumentContent(template.content);
    toast({
      title: "Šablóna aplikovaná",
      description: `Šablóna "${template.title}" bola úspešne aplikovaná.`
    });
  };

  return (
    <PageTemplate title="Úprava dokumentu">
      <div className="max-w-4xl mx-auto">
        <Link to={`/document/${id}`} className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Späť
        </Link>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Úprava dokumentu</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Názov</Label>
              <Input 
                id="title" 
                value={documentTitle} 
                onChange={(e) => setDocumentTitle(e.target.value)} 
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Popis</Label>
              <Input 
                id="description" 
                value={documentDescription} 
                onChange={(e) => setDocumentDescription(e.target.value)} 
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="type">Typ</Label>
              <div className="flex gap-2">
                <Select value={documentType} onValueChange={setDocumentType}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="household">Domácnosť</SelectItem>
                    <SelectItem value="finance">Financie</SelectItem>
                    <SelectItem value="crypto">Kryptomeny</SelectItem>
                    <SelectItem value="family">Rodina</SelectItem>
                    <SelectItem value="instructions">Inštrukcie</SelectItem>
                  </SelectContent>
                </Select>
                
                <TemplateSelectionDialog 
                  selectedCategory={documentType}
                  onSelectTemplate={handleSelectTemplate}
                >
                  <Button variant="outline">Použiť šablónu</Button>
                </TemplateSelectionDialog>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content">Obsah</Label>
              <RichTextEditor 
                value={documentContent} 
                onChange={setDocumentContent} 
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleCancel}>
              Zrušiť
            </Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={handleSave}>
              Uložiť
            </Button>
          </CardFooter>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default DocumentEdit;
