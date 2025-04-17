
import React from 'react';
import { Button } from "@/components/ui/button";
import { Trash } from 'lucide-react';
import { Recipient } from '@/types/document';

interface DocumentRecipientsProps {
  recipients: Recipient[];
  onDeleteRecipient: (id: string) => void;
  onAddRecipient: () => void;
}

const DocumentRecipients = ({ recipients, onDeleteRecipient, onAddRecipient }: DocumentRecipientsProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Príjemcovia</h3>
      <div className="space-y-3">
        {recipients.map(recipient => (
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
              onClick={() => onDeleteRecipient(recipient.id)}
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
          onClick={onAddRecipient}
        >
          + Pridať príjemcu
        </Button>
      </div>
    </div>
  );
};

export default DocumentRecipients;
