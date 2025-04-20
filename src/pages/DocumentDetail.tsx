import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import PageTemplate from '@/components/PageTemplate';
import RecipientDialog from '../components/RecipientDialog';
import DocumentHeader from '@/components/document/DocumentHeader';
import DocumentContent from '@/components/document/DocumentContent';
import DocumentActions from '@/components/document/DocumentActions';
import DocumentRecipients from '@/components/document/DocumentRecipients';
import { Document } from '@/types/document';

const documentData: Document = {
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
  isEncrypted: true,
  attachments: []
};

const DocumentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showSensitiveData, setShowSensitiveData] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [recipientDialogOpen, setRecipientDialogOpen] = useState(false);
  
  const handleDeleteDocument = () => {
    setDeleteDialogOpen(false);
    toast({
      title: "Dokument vymazaný",
      description: "Dokument bol úspešne odstránený."
    });
    navigate('/documents');
  };

  const handleShare = () => {
    toast({
      title: "Zdieľanie",
      description: "Funkcia zdieľania bude dostupná v najbližšej aktualizácii."
    });
  };

  const handleDeleteRecipient = () => {
    toast({
      title: "Odstránenie príjemcu",
      description: "Funkcia odstránenia príjemcu bude dostupná v najbližšej aktualizácii."
    });
  };

  return (
    <PageTemplate title={documentData.title}>
      <div className="max-w-4xl mx-auto">
        <Link to="/documents" className="inline-flex items-center text-lifekey-teal hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Späť na dokumenty
        </Link>
        
        <Card className="mb-8">
          <DocumentHeader
            document={documentData}
            showSensitiveData={showSensitiveData}
            onToggleSensitiveData={() => setShowSensitiveData(!showSensitiveData)}
          />
          
          <DocumentContent
            document={documentData}
            showSensitiveData={showSensitiveData}
            onShowContent={() => setShowSensitiveData(true)}
          />
          
          <DocumentActions
            documentId={id!}
            onDelete={() => setDeleteDialogOpen(true)}
            onShare={handleShare}
          />
        </Card>
        
        <DocumentRecipients
          recipients={documentData.recipients}
          onDeleteRecipient={handleDeleteRecipient}
          onAddRecipient={() => setRecipientDialogOpen(true)}
        />
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
