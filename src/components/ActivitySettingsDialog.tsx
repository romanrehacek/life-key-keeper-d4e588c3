
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface ActivitySettingsDialogProps {
  open: boolean;
  onClose: () => void;
  type: 'notifications' | 'waiting-period' | 'settings';
}

const ActivitySettingsDialog = ({ open, onClose, type }: ActivitySettingsDialogProps) => {
  const getTitle = () => {
    switch (type) {
      case 'notifications':
        return 'Nastavenia upozornení';
      case 'waiting-period':
        return 'Čakacia doba';
      case 'settings':
        return 'Nastavenia kontroly';
      default:
        return '';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {type === 'notifications' && (
            <>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Emailové upozornenia</Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications">SMS upozornenia</Label>
                <Switch id="sms-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="browser-notifications">Upozornenia v prehliadači</Label>
                <Switch id="browser-notifications" defaultChecked />
              </div>
            </>
          )}
          
          {type === 'waiting-period' && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="waiting-period">Čakacia doba pred upozornením kontaktov</Label>
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue placeholder="Vyberte dobu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 dní</SelectItem>
                    <SelectItem value="30">30 dní</SelectItem>
                    <SelectItem value="45">45 dní</SelectItem>
                    <SelectItem value="60">60 dní</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          
          {type === 'settings' && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="check-frequency">Frekvencia kontrol</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger>
                    <SelectValue placeholder="Vyberte frekvenciu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Týždenne</SelectItem>
                    <SelectItem value="monthly">Mesačne</SelectItem>
                    <SelectItem value="quarterly">Štvrťročne</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Zrušiť</Button>
          <Button type="submit">Uložiť zmeny</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ActivitySettingsDialog;
