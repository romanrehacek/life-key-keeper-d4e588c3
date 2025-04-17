
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCircle, Mail, Phone } from 'lucide-react';

const EditProfile = () => {
  return (
    <PageTemplate title="Upraviť profil">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-xl font-semibold">
              <UserCircle className="h-5 w-5 text-lifekey-teal" />
              Osobné údaje
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Meno a priezvisko</Label>
              <Input id="name" defaultValue="Ján Vzorový" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Input id="email" type="email" defaultValue="jan.vzorovy@example.com" />
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="phone">Telefónne číslo</Label>
              <div className="flex gap-2">
                <Input id="phone" type="tel" defaultValue="+421 900 123 456" />
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Zrušiť</Button>
            <Button className="bg-lifekey-teal hover:bg-lifekey-blue">Uložiť zmeny</Button>
          </CardFooter>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default EditProfile;
