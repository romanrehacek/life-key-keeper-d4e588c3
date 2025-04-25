
import React from 'react';
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Calendar, Users, Eye, File, Trash2 } from 'lucide-react';
import { Document } from '@/types/document';
import { useLanguage } from '@/contexts/LanguageContext';

interface DocumentContentProps {
  document: Document;
  showSensitiveData: boolean;
  onShowContent: () => void;
}

const DocumentContent = ({ document, showSensitiveData, onShowContent }: DocumentContentProps) => {
  const { t } = useLanguage();
  
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
      
      {document.attachments && document.attachments.length > 0 && showSensitiveData && (
        <div className="mt-6 border-t pt-4">
          <h4 className="text-sm font-medium mb-2">Prílohy</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {document.attachments.map(attachment => (
              <div key={attachment.id} className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center gap-2 overflow-hidden">
                  <File className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate text-sm" title={attachment.name}>
                    {attachment.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => window.open(attachment.url, '_blank')}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
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
