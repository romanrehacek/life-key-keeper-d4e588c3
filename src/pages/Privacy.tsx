
import React from 'react';
import PageTemplate from '@/components/PageTemplate';

const Privacy = () => {
  return (
    <PageTemplate title="Ochrana osobných údajov">
      <div className="prose prose-slate max-w-4xl mx-auto p-4 bg-card rounded-lg shadow-sm border">
        <p className="lead font-medium text-lg text-foreground mb-6">
          Táto stránka obsahuje informácie o tom, ako Životný kľúč spracúva osobné údaje používateľov.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Aké osobné údaje zbierame</h2>
        <p>
          Pri používaní služby Životný kľúč od vás zhromažďujeme rôzne typy informácií:
        </p>
        <ul className="my-4 space-y-2">
          <li>Kontaktné údaje: meno, e-mail, telefónne číslo</li>
          <li>Údaje o prihlásení: heslo (v šifrovanej podobe)</li>
          <li>Obsah dokumentov, ktoré vytvárate</li>
          <li>Údaje o príjemcoch, ktorých pridávate do systému</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Ako vaše údaje využívame</h2>
        <p>
          Vaše osobné údaje využívame výlučne na:
        </p>
        <ul className="my-4 space-y-2">
          <li>Poskytovanie služby Životný kľúč</li>
          <li>Komunikáciu s vami ohľadom vašej aktivity</li>
          <li>Odovzdanie informácií vašim určeným príjemcom v prípade spustenia bezpečnostného protokolu</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Bezpečnosť údajov</h2>
        <p>
          Vaše dáta sú uložené v šifrovanej podobe s použitím najmodernejších kryptografických metód. Prístup k obsahu vašich dokumentov má výlučne vy a v prípade aktivácie bezpečnostného protokolu vaši určení príjemcovia.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Ako dlho údaje uchovávame</h2>
        <p>
          Vaše údaje uchovávame po dobu trvania vášho účtu. Po zrušení účtu sú všetky vaše osobné údaje a dokumenty nenávratne odstránené z našich systémov.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Tretie strany</h2>
        <p>
          S vašimi údajmi narábame dôverne a nezdieľame ich so žiadnymi tretími stranami s výnimkou:
        </p>
        <ul className="my-4 space-y-2">
          <li>Poskytovateľov technologickej infraštruktúry nevyhnutnej pre chod služby</li>
          <li>Prípadov, kedy nám to ukladá zákon</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Vaše práva</h2>
        <p>
          V súvislosti s vašimi osobnými údajmi máte právo:
        </p>
        <ul className="my-4 space-y-2">
          <li>Na prístup k vašim údajom</li>
          <li>Na opravu nepresných údajov</li>
          <li>Na vymazanie údajov</li>
          <li>Na prenositeľnosť údajov</li>
          <li>Odvolať súhlas so spracovaním</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
        <p>
          S akýmikoľvek otázkami týkajúcimi sa ochrany osobných údajov nás môžete kontaktovať na adrese <a href="mailto:gdpr@zivotny-kluc.sk" className="text-lifekey-teal hover:underline">gdpr@zivotny-kluc.sk</a>.
        </p>

        <div className="mt-12 pt-6 border-t">
          <p className="text-sm text-muted-foreground">Posledná aktualizácia: 15. apríla 2025</p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Privacy;
