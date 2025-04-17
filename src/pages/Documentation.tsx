import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from "@/components/ui/button";

const Documentation = () => {
  return (
    <PageTemplate title="Dokumentácia a návody">
      <div className="prose prose-slate max-w-4xl mx-auto">
        <h2>Dokumentácia a návody</h2>
        
        <p className="lead">
          Naša dokumentácia vám pomôže využiť plný potenciál služby Životný kľúč.
        </p>
        
        <h3>Začíname so službou</h3>
        <ul>
          <li><a href="#" className="text-lifekey-teal hover:underline">Vytvorenie účtu a prvé kroky</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Nastavenie dvojfaktorovej autentifikácie</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Vytvorenie prvého dokumentu</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Pridanie príjemcu</a></li>
        </ul>
        
        <h3>Správa dokumentov</h3>
        <ul>
          <li><a href="#" className="text-lifekey-teal hover:underline">Typy dokumentov a ich použitie</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Šablóny pre rôzne účely</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Šifrovanie a bezpečnosť dokumentov</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Organizácia dokumentov</a></li>
        </ul>
        
        <h3>Bezpečnostný protokol</h3>
        <ul>
          <li><a href="#" className="text-lifekey-teal hover:underline">Nastavenie bezpečnostného protokolu</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Kontrolné správy a ich frekvencia</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Čo sa stane pri aktivácii protokolu</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Zrušenie aktivovaného protokolu</a></li>
        </ul>
        
        <h3>Príjemcovia a kontakty</h3>
        <ul>
          <li><a href="#" className="text-lifekey-teal hover:underline">Pridanie a správa príjemcov</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Nastavenie prístupových práv</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Overenie príjemcov</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Ako príjemcovia pristupujú k dokumentom</a></li>
        </ul>
        
        <h3>Súbory a formáty</h3>
        <ul>
          <li><a href="#" className="text-lifekey-teal hover:underline">Podporované súbory a formáty</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Limity a obmedzenia</a></li>
          <li><a href="#" className="text-lifekey-teal hover:underline">Ako pridať prílohy k dokumentom</a></li>
        </ul>
        
        <div className="bg-muted p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold mb-2">Stiahnite si kompletný manuál</h3>
          <p className="mb-4">
            Naša kompletná používateľská príručka obsahuje detailné inštrukcie a tipy pre všetky funkcie služby Životný kľúč.
          </p>
          <Button className="bg-lifekey-teal hover:bg-lifekey-blue">
            Stiahnuť PDF manuál
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Documentation;
