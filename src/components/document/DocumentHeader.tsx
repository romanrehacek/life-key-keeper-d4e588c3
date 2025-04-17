
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole, Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { typeColors, typeLabels, Document } from '@/types/document';

interface DocumentHeaderProps {
  document: Document;
  showSensitiveData: boolean;
  onToggleSensitiveData: () => void;
}

const DocumentHeader = ({ document, showSensitiveData, onToggleSensitiveData }: DocumentHeaderProps) => {
  return (
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <Badge className={`${typeColors[document.type]} flex gap-1 items-center font-normal`}>
          {typeLabels[document.type]}
        </Badge>
        
        <div className="flex items-center gap-2">
          {document.isEncrypted && (
            <div className="flex items-center text-xs text-muted-foreground gap-1">
              <LockKeyhole className="h-3 w-3" />
              Šifrované
            </div>
          )}
          <Button 
            variant="ghost" 
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={onToggleSensitiveData}
          >
            {showSensitiveData ? (
              <>
                <EyeOff className="h-3 w-3 mr-1" /> Skryť citlivé údaje
              </>
            ) : (
              <>
                <Eye className="h-3 w-3 mr-1" /> Zobraziť citlivé údaje
              </>
            )}
          </Button>
        </div>
      </div>
      
      <CardTitle className="mt-2">{document.title}</CardTitle>
      <CardDescription>{document.description}</CardDescription>
    </CardHeader>
  );
};

export default DocumentHeader;
