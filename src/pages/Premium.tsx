
import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Check, AlertCircle } from 'lucide-react';

const Premium = () => {
  return (
    <PageTemplate title="Premium verzia">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Vyberte si plán, ktorý vám vyhovuje</h2>
          <p className="text-muted-foreground">Prispôsobte si služby Životného kľúča presne podľa vašich potrieb</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="text-center pb-2">
              <h3 className="text-xl font-bold">Free</h3>
              <div className="text-3xl font-bold mt-2">0 €</div>
              <p className="text-sm text-muted-foreground">navždy</p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {[
                  '1 dokument',
                  '1 príjemca',
                  'Základné šablóny dokumentov',
                  'Manuálne overovanie aktivity',
                  '-',
                  '-',
                  '-'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature !== '-' ? (
                      <>
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-400">Nedostupné</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Začať zadarmo</Button>
            </CardFooter>
          </Card>
          
          <Card className="border-lifekey-teal">
            <div className="bg-lifekey-teal text-white text-center py-1 text-sm font-medium">
              Odporúčané
            </div>
            <CardHeader className="text-center pb-2">
              <h3 className="text-xl font-bold">Premium</h3>
              <div className="text-3xl font-bold mt-2">4,99 €</div>
              <p className="text-sm text-muted-foreground">mesačne</p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {[
                  'Neobmedzený počet dokumentov',
                  'Až 10 príjemcov',
                  'Všetky prémiové šablóny',
                  'Automatické overovanie aktivity',
                  'E-mailové a SMS notifikácie',
                  'Selektívne zdieľanie dokumentov',
                  'Prioritná podpora'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-lifekey-teal hover:bg-lifekey-blue">Aktivovať Premium</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Premium;
