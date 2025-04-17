
import React from 'react';
import PageTemplate from '@/components/PageTemplate';

const Terms = () => {
  return (
    <PageTemplate title="Podmienky používania">
      <div className="prose prose-slate max-w-4xl mx-auto p-4 bg-card rounded-lg shadow-sm border">
        <p className="lead font-medium text-lg text-foreground mb-6">
          Používaním služby Životný kľúč súhlasíte s nasledujúcimi podmienkami.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Základné ustanovenia</h2>
        <p>
          Tieto podmienky používania upravujú vzťah medzi vami ako používateľom a prevádzkovateľom služby Životný kľúč. Používaním našej služby vyjadrujete súhlas s týmito podmienkami.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Popis služby</h2>
        <p>
          Životný kľúč je služba, ktorá umožňuje používateľom vytvárať, ukladať a zdieľať dôležité informácie s vopred určenými príjemcami v prípade dlhodobej neaktivity používateľa.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Registrácia a účet</h2>
        <p>
          Pre využívanie služby je potrebné vytvorenie používateľského účtu. Za bezpečnosť prihlasovacích údajov zodpovedá používateľ. Zaväzujete sa poskytovať presné a aktuálne informácie a nepoužívať identitu inej osoby.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Súkromie a zodpovednosť</h2>
        <p>
          Všetky informácie, ktoré zdieľate prostredníctvom našej služby, by mali byť v súlade so zákonmi a nemali by porušovať práva tretích strán. Nenesieme zodpovednosť za obsah, ktorý vytvárate a zdieľate prostredníctvom našej služby.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Obmedzenie zodpovednosti</h2>
        <p>
          Životný kľúč sa poskytuje "tak, ako je" bez akýchkoľvek záruk. Negarantujeme nepretržitú dostupnosť služby ani bezchybnosť. V maximálnej miere povolenej zákonom vylučujeme zodpovednosť za akékoľvek škody vyplývajúce z používania našej služby.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Ceny a platby</h2>
        <p>
          Životný kľúč ponúka bezplatnú verziu s obmedzenými funkciami a platenú Premium verziu. Podrobnosti o cenách a funkciách sú uvedené na stránke Premium. Platby sa uskutočňujú vopred a nie sú refundovateľné, pokiaľ nie je uvedené inak.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Ukončenie služby</h2>
        <p>
          Vyhradzujeme si právo ukončiť poskytovanie služby kedykoľvek a z akéhokoľvek dôvodu. V prípade ukončenia sa zaväzujeme informovať používateľov vopred a umožniť export dát.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Zmeny podmienok</h2>
        <p>
          Tieto podmienky používania môžeme kedykoľvek zmeniť. O významných zmenách vás budeme informovať prostredníctvom e-mailu alebo oznámenia v rámci služby. Pokračovaním v používaní služby po zverejnení zmien vyjadrujete súhlas s aktualizovanými podmienkami.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Kontakt</h2>
        <p>
          Ak máte akékoľvek otázky týkajúce sa týchto podmienok, kontaktujte nás na adrese <a href="mailto:info@zivotny-kluc.sk" className="text-lifekey-teal hover:underline">info@zivotny-kluc.sk</a>.
        </p>

        <div className="mt-12 pt-6 border-t">
          <p className="text-sm text-muted-foreground">Posledná aktualizácia: 15. apríla 2025</p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Terms;
