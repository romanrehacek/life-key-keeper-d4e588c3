
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus } from 'lucide-react';

interface Recipient {
  id: string;
  name: string;
  email: string;
}

interface RecipientDialogProps {
  open: boolean;
  onClose: () => void;
  onAddRecipient?: (recipient: Recipient) => void;
}

const availableRecipients: Recipient[] = [
  { id: '3', name: 'Martin Kováč', email: 'martin@example.com' },
  { id: '4', name: 'Eva Malá', email: 'eva@example.com' },
  { id: '5', name: 'Tomáš Veľký', email: 'tomas@example.com' },
];

const RecipientDialog = ({ open, onClose, onAddRecipient }: RecipientDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Pridať príjemcu</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex-1">
              <Input
                placeholder="Vyhľadať osobu..."
                className="w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {availableRecipients.map((recipient) => (
              <div 
                key={recipient.id} 
                className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
              >
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${recipient.name}`} />
                    <AvatarFallback>{recipient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{recipient.name}</p>
                    <p className="text-sm text-muted-foreground">{recipient.email}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => {
                    onAddRecipient?.(recipient);
                    onClose();
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Zavrieť</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecipientDialog;
