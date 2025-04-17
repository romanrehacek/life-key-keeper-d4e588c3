import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Security = () => {
  return (
    <PageTemplate title="Bezpečnosť">
      <div className="prose prose-slate max-w-4xl mx-auto">
        <h2>Bezpečnosť na prvom mieste</h2>
        
        <p className="lead">
          Životný kľúč bol navrhnutý s najvyššími bezpečnostnými štandardmi, aby zabezpečil ochranu vašich citlivých informácií.
        </p>
        
        <h3>End-to-End šifrovanie</h3>
        <p>
          Všetky dokumenty sú šifrované na vašom zariadení pred odoslaním na server. To znamená, že ani prevádzkovatelia služby Životný kľúč nemajú prístup k obsahu vašich dokumentov.
        </p>
        
        <h3>Dvojfaktorová autentifikácia (2FA)</h3>
        <p>
          Pre zvýšenú ochranu vášho účtu odporúčame aktivovať dvojfaktorovú autentifikáciu. Táto dodatočná vrstva zabezpečenia vyžaduje druhý faktor pri prihlásení, napríklad kód z mobilnej aplikácie alebo SMS správu.
        </p>
        
        <h3>Pravidelné bezpečnostné audity</h3>
        <p>
          Naša infraštruktúra a kód pravidelne podliehajú bezpečnostným auditom nezávislými expertmi na kybernetickú bezpečnosť.
        </p>
        
        <h3>Automatické časové zámky</h3>
        <p>
          Systém automaticky odhlási neaktívnych používateľov, aby sa zabránilo neoprávnenému prístupu k účtu v prípade, že zabudnete odhlásiť sa.
        </p>
        
        <h3>Zásady bezpečného používania</h3>
        <ul>
          <li>Používajte silné, jedinečné heslo</li>
          <li>Aktivujte dvojfaktorovú autentifikáciu</li>
          <li>Nikdy nezdieľajte svoje prihlasovacie údaje</li>
          <li>Pravidelne aktualizujte svoje kontaktné informácie</li>
          <li>Používajte zariadenie s aktuálnym operačným systémom a prehliadačom</li>
        </ul>
        
        <div className="bg-muted p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold mb-2">Otázky ohľadom bezpečnosti?</h3>
          <p className="mb-4">
            Ak máte akékoľvek otázky týkajúce sa bezpečnosti vašich údajov, neváhajte nás kontaktovať.
          </p>
          <Button className="bg-lifekey-teal hover:bg-lifekey-blue" asChild>
            <a href="mailto:security@zivotny-kluc.sk">
              Kontaktovať bezpečnostný tím
            </a>
          </Button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Security;
