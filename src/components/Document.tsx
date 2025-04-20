
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash, File, LockKeyhole, CalendarClock, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { typeLabels, typeColors } from '@/types/document';

// Define type icons mapping
const typeIcons = {
  household: <File className="h-3 w-3" />,
  finance: <File className="h-3 w-3" />,
  crypto: <File className="h-3 w-3" />,
  family: <File className="h-3 w-3" />,
  instructions: <File className="h-3 w-3" />
};

export interface DocumentProps {
  id: string;
  title: string;
  description: string;
  type: 'household' | 'finance' | 'crypto' | 'family' | 'instructions';
  lastUpdated: string;
  recipients: number;
  attachments?: number;
}

const Document = ({ id, title, description, type, lastUpdated, recipients, attachments = 0 }: DocumentProps) => {
  const { t } = useLanguage();

  // Format recipient text based on count
  const getRecipientsText = () => {
    if (recipients === 0) return "0";
    if (recipients === 1) return t("document.recipient.one");
    else if (recipients > 1 && recipients < 5) return `${recipients} ${t("document.recipient.few")}`;
    else return `${recipients} ${t("document.recipient.many")}`;
  };
  
  // Format attachment text based on count
  const getAttachmentsText = () => {
    if (attachments === 0) return "0";
    if (attachments === 1) return t("document.attachment.one");
    else if (attachments > 1 && attachments < 5) return `${attachments} ${t("document.attachment.few")}`;
    else return `${attachments} ${t("document.attachment.many")}`;
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
            {t(typeLabels[type])}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground gap-1">
            <LockKeyhole className="h-3 w-3" />
            {t("document.encrypted")}
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
            {t("document.open")}
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8" title={t("document.edit")}>
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" title={t("document.delete")}>
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Document;
