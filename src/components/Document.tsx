
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash, File, LockKeyhole, CalendarClock, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { typeLabels, typeColors } from '@/types/document';

export interface DocumentProps {
  id: string;
  title: string;
  description: string;
  type: 'household' | 'finance' | 'crypto' | 'family' | 'instructions';
  lastUpdated: string;
  recipients: number;
  attachments?: number;
}

const typeIcons = {
  household: <File className="h-5 w-5" />,
  finance: <File className="h-5 w-5" />,
  crypto: <File className="h-5 w-5" />,
  family: <File className="h-5 w-5" />,
  instructions: <File className="h-5 w-5" />
};

const Document = ({ id, title, description, type, lastUpdated, recipients, attachments = 0 }: DocumentProps) => {
  const { t } = useLanguage();

  // Format recipient text based on count
  const getRecipientsText = () => {
    if (recipients === 1) return "1 príjemca"; 
    else if (recipients > 1 && recipients < 5) return `${recipients} príjemcovia`;
    else return `${recipients} príjemcov`;
  };
  
  // Format attachment text based on count
  const getAttachmentsText = () => {
    if (attachments === 1) return "1 súbor";
    else if (attachments > 1 && attachments < 5) return `${attachments} súbory`;
    else return `${attachments} súborov`;
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all hover:border-lifekey-teal/50 hover:shadow-md",
      recipients === 0 ? "border-red-500" : ""
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={cn("flex gap-1 items-center font-normal", typeColors[type])}>
            {typeIcons[type]}
            {typeLabels[type]}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground gap-1">
            <LockKeyhole className="h-3 w-3" />
            Šifrované
          </div>
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-xs text-muted-foreground gap-1">
          <CalendarClock className="h-3 w-3" />
          {t("document.lastUpdated")}: {lastUpdated}
        </div>
        <div className="mt-2 flex gap-2">
          <Badge variant={recipients === 0 ? "destructive" : "secondary"} className="text-xs flex items-center gap-1">
            {recipients === 0 && <AlertTriangle className="h-3 w-3" />}
            {getRecipientsText()}
          </Badge>
          {attachments > 0 && (
            <Badge variant="secondary" className="text-xs flex items-center gap-1">
              <File className="h-3 w-3" />
              {getAttachmentsText()}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/document/${id}`}>
            Otvoriť
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Document;
