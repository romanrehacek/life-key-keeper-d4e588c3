
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DocumentType, documentsApi } from '@/lib/supabase';
import { useNavigate } from "react-router-dom";
import { Save, X } from "lucide-react";

interface DocumentEditorProps {
  id?: string;
  initialValues?: {
    title: string;
    description: string;
    type: DocumentType;
    content: string;
  };
  onSaved?: () => void;
  onCancel?: () => void;
}

const DocumentEditor = ({ id, initialValues, onSaved, onCancel }: DocumentEditorProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState(initialValues?.title || '');
  const [description, setDescription] = useState(initialValues?.description || '');
  const [type, setType] = useState<DocumentType>(initialValues?.type || 'household');
  const [content, setContent] = useState(initialValues?.content || '');
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast({
        title: "Chýba názov",
        description: "Prosím, zadajte názov dokumentu.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      if (id) {
        // Update existing document
        await documentsApi.update(id, {
          title,
          description,
          type,
          content
        });
        toast({
          title: "Dokument aktualizovaný",
          description: "Váš dokument bol úspešne aktualizovaný.",
        });
      } else {
        // Create new document
        await documentsApi.create({
          title,
          description,
          type,
          content
        });
        toast({
          title: "Dokument vytvorený",
          description: "Váš nový dokument bol úspešne vytvorený.",
        });
      }
      
      if (onSaved) {
        onSaved();
      } else {
        navigate('/documents');
      }
    } catch (error) {
      console.error('Error saving document:', error);
      toast({
        title: "Chyba",
        description: "Nepodarilo sa uložiť dokument. Skúste to znova neskôr.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      navigate('/documents');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{id ? 'Upraviť dokument' : 'Nový dokument'}</CardTitle>
        <CardDescription>
          {id 
            ? 'Upravte existujúci dokument a uložte zmeny.'
            : 'Vytvorte nový dokument, ktorý bude bezpečne uložený.'
          }
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSave}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Názov dokumentu</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Zadajte názov dokumentu"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Popis</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Krátky popis obsahu dokumentu"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="type">Kategória</Label>
            <Select value={type} onValueChange={(value) => setType(value as DocumentType)}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Vyberte kategóriu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="household">Domácnosť</SelectItem>
                <SelectItem value="finance">Financie</SelectItem>
                <SelectItem value="crypto">Kryptomeny</SelectItem>
                <SelectItem value="family">Rodina a kontakty</SelectItem>
                <SelectItem value="instructions">Čo robiť, ak...</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Obsah dokumentu</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Zadajte obsah dokumentu..."
              rows={15}
              className="min-h-[200px]"
            />
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleCancel}
          >
            <X className="mr-2 h-4 w-4" />
            Zrušiť
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Ukladá sa...' : 'Uložiť dokument'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default DocumentEditor;
