import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Edit, 
  Trash, 
  Users, 
  Calendar, 
  LockKeyhole,
  Eye, 
  EyeOff,
  Share2
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import PageTemplate from '@/components/PageTemplate';
import RecipientDialog from '../components/RecipientDialog';

const documentData = {
  id: "1",
  title: "Informácie o domácnosti",
  description: "Kúrenie, ističe, zabezpečenie domu a ovládanie smart zariadení.",
  content: `
    <h2>Zabezpečovací systém</h2>
    <p>Kód do alarmu: 1234</p>
    <p>Alarm sa zapína/vypína pri vchodových dverách na ovládacom paneli.</p>
    
    <h2>Kúrenie</h2>
    <p>Kotol sa nachádza v technickej miestnosti.</p>
    <p>Inštrukcie na zapnutie/vypnutie:</p>
    <ol>
      <li>Stlačte tlačidlo napájania na 3 sekundy</li>
      <li>Zvoľte program pomocou otočného kolieska</li>
      <li>Potvrďte voľbu tlačidlom OK</li>
    </ol>
    
    <h2>Elektrický rozvádzač</h2>
    <p>Hlavný istič sa nachádza v garáži pri vstupe.</p>
    <p>Poistky sú označené nasledovne:</p>
    <ul>
      <li>F1: Osvetlenie prízemie</li>
      <li>F2: Zásuvky prízemie</li>
      <li>F3: Kuchynské spotrebiče</li>
      <li>F4: Osvetlenie poschodie</li>
      <li>F5: Zásuvky poschodie</li>
      <li>F6: Klimatizácia</li>
    </ul>
    
    <h2>Smart zariadenia</h2>
    <p>Všetky smart zariadenia sú ovládané cez aplikáciu SmartHome.</p>
    <p>Prístupové údaje:</p>
    <ul>
      <li>Email: smart@example.com</li>
      <li>Heslo: Uložené v správcovi hesiel</li>
    </ul>
  `,
  type: 'household',
  lastUpdated: '12.4.2025',
  recipients: [
    { id: '1', name: 'Jana Nováková', email: 'jana@example.com' },
    { id: '2', name: 'Peter Novák', email: 'peter@example.com' }
  ],
  createdAt: '10.3.2025',
  isEncrypted: true
};

const typeLabels = {
  household: 'Domácnosť',
  finance: 'Financie',
  crypto: 'Kryptomeny',
  family: 'Rodina a kontakty',
  instructions: 'Čo robiť, ak...'
};

const typeColors = {
  household: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  finance: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  crypto: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  family: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
  instructions: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
};

const DocumentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showSensitiveData, setShowSensitiveData] = React.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [recipientDialogOpen, setRecipientDialogOpen] = useState(false);
  
  const handleEditDocument = () => {
    toast({
      title: "Funkcia v príprave",
      description: "Úprava dokumentu bude dostupná v najbližšej aktualizácii."
    });
  };
  
  const handleDeleteDocument = () => {
    setDeleteDialogOpen(false);
    
    toast({
      title: "Dokument vymazaný",
      description: "Dokument bol úspešne odstránený."
    });
    
    navigate('/documents');
  };
  
  const toggleSensitiveData = () => {
    setShowSensitiveData(!showSensitiveData);
    
    if (!showSensitiveData) {
      toast({
        title: "Citlivé údaje zobrazené",
        description: "Teraz vidíte všetky citlivé údaje v dokumente."
      });
    }
  };
  
  return (
    <PageTemplate title={documentData.title}>
      <div className="max-w-4xl mx-auto">
        <Link to="/documents" className="inline-flex items-center text-lifekey-teal hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Späť na dokumenty
        </Link>
        
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Badge className={`${typeColors[documentData.type]} flex gap-1 items-center font-normal`}>
                {typeLabels[documentData.type]}
              </Badge>
              
              <div className="flex items-center gap-2">
                {documentData.isEncrypted && (
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <LockKeyhole className="h-3 w-3" />
                    Šifrované
                  </div>
                )}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-7 px-2 text-xs"
                  onClick={toggleSensitiveData}
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
            
            <CardTitle className="mt-2">{documentData.title}</CardTitle>
            <CardDescription>{documentData.description}</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-4 items-center mb-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Vytvorené: {documentData.createdAt}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Aktualizované: {documentData.lastUpdated}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {documentData.recipients.length} príjemcov
              </div>
            </div>
            
            <div className={`prose prose-slate max-w-none ${!showSensitiveData && 'blur-sm select-none'}`}>
              <div dangerouslySetInnerHTML={{ __html: documentData.content }} />
            </div>
            
            {!showSensitiveData && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  onClick={toggleSensitiveData} 
                  className="bg-lifekey-teal hover:bg-lifekey-blue"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Zobraziť obsah
                </Button>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2">
                <Button 
                  onClick={() => navigate(`/document/${id}/edit`)} 
                  variant="outline" 
                  className="gap-1"
                >
                  <Edit className="h-4 w-4" />
                  Upraviť
                </Button>
                <Button 
                  onClick={() => setDeleteDialogOpen(true)} 
                  variant="outline" 
                  className="text-destructive hover:text-destructive gap-1"
                >
                  <Trash className="h-4 w-4" />
                  Vymazať
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                className="gap-1"
                onClick={() => toast({
                  title: "Zdieľanie",
                  description: "Funkcia zdieľania bude dostupná v najbližšej aktualizácii."
                })}
              >
                <Share2 className="h-4 w-4" />
                Zdieľať
              </Button>
            </div>
          </CardFooter>
        </Card>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Príjemcovia</h3>
          <div className="space-y-3">
            {documentData.recipients.map(recipient => (
              <div 
                key={recipient.id} 
                className="p-3 border rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{recipient.name}</p>
                  <p className="text-sm text-muted-foreground">{recipient.email}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => toast({
                    title: "Odstránenie príjemcu",
                    description: "Funkcia odstránenia príjemcu bude dostupná v najbližšej aktualizácii."
                  })}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button 
              variant="outline" 
              className="w-full border-dashed"
              onClick={() => setRecipientDialogOpen(true)}
            >
              + Pridať príjemcu
            </Button>
          </div>
        </div>
      </div>
      
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Vymazať dokument</DialogTitle>
            <DialogDescription>
              Ste si istý, že chcete vymazať tento dokument? Táto akcia je nevratná.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Zrušiť
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteDocument}
            >
              Vymazať
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <RecipientDialog
        open={recipientDialogOpen}
        onClose={() => setRecipientDialogOpen(false)}
        onAddRecipient={(recipient) => {
          toast({
            title: "Príjemca pridaný",
            description: `${recipient.name} bol úspešne pridaný ako príjemca dokumentu.`
          });
        }}
      />
    </PageTemplate>
  );
};

export default DocumentDetail;
