
import React from 'react';
import Document, { DocumentProps } from './Document';
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';

// Example document data
const exampleDocuments: DocumentProps[] = [
  {
    id: '1',
    title: 'Informácie o domácnosti',
    description: 'Kúrenie, ističe, zabezpečenie domu a ovládanie smart zariadení.',
    type: 'household',
    lastUpdated: '12.4.2025',
    recipients: 2
  },
  {
    id: '2',
    title: 'Bankové účty a investície',
    description: 'Prístupové údaje a informácie o všetkých finančných účtoch.',
    type: 'finance',
    lastUpdated: '10.4.2025',
    recipients: 1
  },
  {
    id: '3',
    title: 'Krypto peňaženky',
    description: 'Inštrukcie k získaniu prístupu ku krypto aktívam.',
    type: 'crypto',
    lastUpdated: '5.4.2025',
    recipients: 1
  },
  {
    id: '4',
    title: 'Dôležité rodinné kontakty',
    description: 'Zoznam kľúčových kontaktov pre núdzové situácie.',
    type: 'family',
    lastUpdated: '9.4.2025',
    recipients: 3
  },
  {
    id: '5',
    title: 'Postupy v prípade núdze',
    description: 'Čo robiť v prípade zdravotných komplikácií alebo iných núdzových situácií.',
    type: 'instructions',
    lastUpdated: '8.4.2025',
    recipients: 2
  }
];

const DocumentList = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Vaše dokumenty</h2>
        <Button className="bg-lifekey-teal hover:bg-lifekey-blue">
          <PlusCircle className="h-4 w-4 mr-2" />
          Nový dokument
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exampleDocuments.map(doc => (
          <Document
            key={doc.id}
            id={doc.id}
            title={doc.title}
            description={doc.description}
            type={doc.type}
            lastUpdated={doc.lastUpdated}
            recipients={doc.recipients}
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentList;
