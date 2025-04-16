
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import PageTemplate from '@/components/PageTemplate';
import { documentsApi } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CalendarClock, Edit, ArrowLeft, Share2, Download, Eye, EyeOff, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const ViewDocument = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [showContent, setShowContent] = React.useState(false);
  
  const { data: document, isLoading, isError } = useQuery({
    queryKey: ['document', id],
    queryFn: () => documentsApi.getById(id as string),
    enabled: !!id
  });

  // Show error if document not found
  React.useEffect(() => {
    if (isError) {
      toast({
        title: "Dokument nenájdený",
        description: "Požadovaný dokument sa nepodarilo načítať.",
        variant: "destructive",
      });
    }
  }, [isError, toast]);

  if (isLoading) {
    return (
      <PageTemplate title="Načítavam dokument...">
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-lifekey-teal"></div>
        </div>
      </PageTemplate>
    );
  }

  if (isError || !document) {
    return <Navigate to="/documents" replace />;
  }

  return (
    <PageTemplate title="Dokument">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Link to="/documents">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Späť na dokumenty
            </Button>
          </Link>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Zdieľať
            </Button>
            <Link to={`/documents/${id}/edit`}>
              <Button className="gap-2 bg-lifekey-teal hover:bg-lifekey-blue">
                <Edit className="h-4 w-4" />
                Upraviť
              </Button>
            </Link>
          </div>
        </div>
        
        <Card className="shadow-md border-t-4 border-t-lifekey-teal">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className={cn("font-normal", typeColors[document.type])}>
                    {typeLabels[document.type]}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <Clock className="h-3 w-3" />
                    <span>
                      {new Date(document.updated_at).toLocaleDateString('sk-SK')}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{document.title}</CardTitle>
                <CardDescription className="mt-1">{document.description}</CardDescription>
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2"
                onClick={() => setShowContent(!showContent)}
              >
                {showContent ? (
                  <>
                    <EyeOff className="h-4 w-4" />
                    Skryť obsah
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    Zobraziť obsah
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          
          {showContent && (
            <CardContent>
              <div className="border rounded-md p-4 bg-muted/30 whitespace-pre-wrap">
                {document.content}
              </div>
            </CardContent>
          )}
          
          <CardFooter className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Vytvorené: {new Date(document.created_at).toLocaleDateString('sk-SK')}
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Stiahnuť ako PDF
            </Button>
          </CardFooter>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default ViewDocument;
