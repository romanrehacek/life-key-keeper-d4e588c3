import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from "@/components/ui/button";
import { FileText, Shield, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <PageTemplate title="Ako to funguje">
      <div className="prose prose-slate max-w-4xl mx-auto">
        <h2>Ako funguje Životný kľúč</h2>
        
        <p className="lead">
          Životný kľúč je nástroj, ktorý vám umožňuje bezpečne uchovávať a zdieľať dôležité informácie s vami vybranými osobami v prípade núdze alebo neočakávaných udalostí.
        </p>
        
        <h3>Jednoduchý proces v 3 krokoch</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8">
          <div className="bg-card rounded-lg p-6 border flex flex-col items-center text-center">
            <div className="bg-lifekey-teal/10 p-3 rounded-full mb-4">
              <FileText className="h-8 w-8 text-lifekey-teal" />
            </div>
            <h4 className="text-lg font-semibold mb-2">1. Vytvorte dokumenty</h4>
            <p className="text-muted-foreground">Vytvorte dokumenty s dôležitými informáciami, prístupovými údajmi a inštrukciami.</p>
          </div>
          <div className="bg-card rounded-lg p-6 border flex flex-col items-center text-center">
            <div className="bg-lifekey-teal/10 p-3 rounded-full mb-4">
              <Shield className="h-8 w-8 text-lifekey-teal" />
            </div>
            <h4 className="text-lg font-semibold mb-2">2. Nastavte príjemcov</h4>
            <p className="text-muted-foreground">Určite, kto má mať prístup ku ktorým dokumentom v prípade núdze.</p>
          </div>
          <div className="bg-card rounded-lg p-6 border flex flex-col items-center text-center">
            <div className="bg-lifekey-teal/10 p-3 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-lifekey-teal" />
            </div>
            <h4 className="text-lg font-semibold mb-2">3. Pravidelne potvrdzujte</h4>
            <p className="text-muted-foreground">Systém vás bude pravidelne kontaktovať. Pri dlhodobej neaktivite sa spustí bezpečnostný protokol.</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default HowItWorks;
