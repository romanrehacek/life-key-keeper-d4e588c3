
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash, File, LockKeyhole, CalendarClock } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DocumentProps {
  id: string;
  title: string;
  description: string;
  type: 'household' | 'finance' | 'crypto' | 'family' | 'instructions';
  lastUpdated: string;
  recipients: number;
}

const typeIcons = {
  household: <File className="h-5 w-5" />,
  finance: <File className="h-5 w-5" />,
  crypto: <File className="h-5 w-5" />,
  family: <File className="h-5 w-5" />,
  instructions: <File className="h-5 w-5" />
};

const typeColors = {
  household: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  finance: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  crypto: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  family: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
  instructions: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
};

const typeLabels = {
  household: 'Domácnosť',
  finance: 'Financie',
  crypto: 'Kryptomeny',
  family: 'Rodina a kontakty',
  instructions: 'Čo robiť, ak...'
};

const Document = ({ id, title, description, type, lastUpdated, recipients }: DocumentProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:border-lifekey-teal/50 hover:shadow-md">
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
          Aktualizované: {lastUpdated}
        </div>
        <div className="mt-2">
          <Badge variant="secondary" className="text-xs">
            {recipients} príjemcov
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm">
          Otvoriť
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
