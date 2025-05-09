
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { UserCircle, Settings, Shield, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Account = () => {
  const { t } = useLanguage();
  
  return (
    <PageTemplate title="Môj účet">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <UserCircle className="h-5 w-5 text-lifekey-teal" />
                Osobné údaje
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Meno</p>
                  <p>Ján Vzorový</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>jan.vzorovy@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefón</p>
                  <p>+421 900 123 456</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Predplatné</p>
                  <p>Premium</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Upraviť profil</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Shield className="h-5 w-5 text-lifekey-teal" />
                Bezpečnosť
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Heslo</p>
                  <p>Posledná zmena: 2. 3. 2025</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Dvojfaktorová autentifikácia</p>
                  <p className="text-green-600 font-medium">Aktívna</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="outline">Zmeniť heslo</Button>
              <Button variant="outline">Nastavenia 2FA</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Settings className="h-5 w-5 text-lifekey-teal" />
                Nastavenia
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                Notifikácie
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Súkromie
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Phone className="h-4 w-4 mr-2" />
                Overenie telefónu
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Stav predplatného</h2>
            </CardHeader>
            <CardContent>
              <div className="bg-lifekey-teal/10 p-4 rounded-md border border-lifekey-teal/20">
                <div className="font-medium">Premium</div>
                <div className="text-sm text-muted-foreground mb-2">
                  Platné do: 16.5.2025
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  Spravovať predplatné
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Account;
