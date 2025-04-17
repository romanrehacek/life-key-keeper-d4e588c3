import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  return (
    <PageTemplate title="Časté otázky">
      <div className="prose prose-slate max-w-4xl mx-auto">
        <h2>Časté otázky</h2>
        
        <div className="space-y-6 mt-8">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Čo sa stane, ak nereagujem na kontrolnú správu?</h3>
            <p>
              Ak nereagujete na kontrolnú správu, systém sa pokúsi kontaktovať vami opakovane rôznymi kanálmi (e-mail, SMS). Ak nebudete reagovať po definovanú dobu (ktorú si môžete nastaviť), spustí sa bezpečnostný protokol a vaši príjemcovia dostanú prístup k určeným dokumentom.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Ako často budem dostávať kontrolné správy?</h3>
            <p>
              Frekvenciu kontrolných správ si môžete nastaviť podľa vlastných preferencií. Štandardne je nastavená na každých 30 dní, ale môžete si ju upraviť od týždňa až po rok.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Môžem zrušiť spustený bezpečnostný protokol?</h3>
            <p>
              Áno, ak ste nereagovali na kontrolné správy a bezpečnostný protokol sa spustil, máte ešte tzv. "grace period", počas ktorej môžete protokol zrušiť. Táto doba je štandardne nastavená na 48 hodín, ale môžete si ju upraviť v nastaveniach.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Ako sa dozvedia moji príjemcovia, že majú prístup k dokumentom?</h3>
            <p>
              Po aktivácii bezpečnostného protokolu systém automaticky upovedomí všetkých príjemcov prostredníctvom e-mailu a SMS správy (ak je táto možnosť nastavená). Príjemcovia dostanú inštrukcie, ako pristúpiť k určeným dokumentom.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Môžem upraviť, ktoré dokumenty kto uvidí?</h3>
            <p>
              Áno, pre každý dokument môžete špecifikovať, ktorí príjemcovia k nemu budú mať prístup. Toto nastavenie môžete kedykoľvek zmeniť.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Je služba Životný kľúč k dispozícii aj ako mobilná aplikácia?</h3>
            <p>
              Áno, Životný kľúč je k dispozícii ako webová aplikácia, ktorá je optimalizovaná pre mobilné zariadenia. Natívne aplikácie pre iOS a Android sú vo vývoji a budú k dispozícii v najbližších mesiacoch.
            </p>
          </div>
        </div>
        
        <div className="bg-muted p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold mb-2">Máte ďalšie otázky?</h3>
          <p className="mb-4">
            Ak ste nenašli odpoveď na vašu otázku, kontaktujte nás a radi vám pomôžeme.
          </p>
          <Button className="bg-lifekey-teal hover:bg-lifekey-blue" asChild>
            <a href="mailto:info@zivotny-kluc.sk">
              <HelpCircle className="mr-2 h-4 w-4" />
              Kontaktovať podporu
            </a>
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default FAQ;
