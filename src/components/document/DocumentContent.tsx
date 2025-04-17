
import React from 'react';
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Calendar, Users, Eye } from 'lucide-react';
import { Document } from '@/types/document';

interface DocumentContentProps {
  document: Document;
  showSensitiveData: boolean;
  onShowContent: () => void;
}

const DocumentContent = ({ document, showSensitiveData, onShowContent }: DocumentContentProps) => {
  return (
    <CardContent>
      <div className="flex flex-wrap gap-4 items-center mb-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          Vytvorené: {document.createdAt}
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          Aktualizované: {document.lastUpdated}
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          {document.recipients.length} príjemcov
        </div>
      </div>
      
      <div className={`prose prose-slate max-w-none ${!showSensitiveData && 'blur-sm select-none'}`}>
        <div dangerouslySetInnerHTML={{ __html: document.content }} />
      </div>
      
      {!showSensitiveData && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Button 
            onClick={onShowContent} 
            className="bg-lifekey-teal hover:bg-lifekey-blue"
          >
            <Eye className="h-4 w-4 mr-2" />
            Zobraziť obsah
          </Button>
        </div>
      )}
    </CardContent>
  );
};

export default DocumentContent;
