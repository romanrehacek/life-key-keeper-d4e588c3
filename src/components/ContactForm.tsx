
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
  contact?: {
    name: string;
    email: string;
    phone: string;
    relationship: string;
    waitingPeriod: string;
  };
  isEdit?: boolean;
}

const ContactForm = ({ open, onClose, contact, isEdit }: ContactFormProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Upraviť kontakt' : 'Pridať nový kontakt'}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Meno</Label>
            <Input
              id="name"
              defaultValue={contact?.name}
              placeholder="Zadajte meno"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={contact?.email}
              placeholder="Zadajte email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Telefón</Label>
            <Input
              id="phone"
              type="tel"
              defaultValue={contact?.phone}
              placeholder="Zadajte telefónne číslo"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="relationship">Vzťah</Label>
            <Input
              id="relationship"
              defaultValue={contact?.relationship}
              placeholder="Napr. Manželka, Syn, Advokát"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="waitingPeriod">Čakacia doba</Label>
            <Input
              id="waitingPeriod"
              defaultValue={contact?.waitingPeriod}
              placeholder="Napr. 30 dní"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Zrušiť</Button>
          <Button type="submit">{isEdit ? 'Uložiť zmeny' : 'Pridať kontakt'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
