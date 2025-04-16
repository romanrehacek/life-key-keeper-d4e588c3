
import React from 'react';
import PageTemplate from '@/components/PageTemplate';

const GDPR = () => {
  return (
    <PageTemplate title="GDPR">
      <div className="prose prose-slate max-w-4xl">
        <p className="lead">Táto stránka obsahuje informácie o tom, ako Životný kľúč spĺňa požiadavky nariadenia GDPR.</p>
        
        <h2>Všeobecné nariadenie o ochrane údajov</h2>
        <p>
          Nariadenie GDPR (General Data Protection Regulation) je právny rámec Európskej únie, ktorý stanovuje pravidlá zberu a spracovania osobných údajov osôb v EÚ. V Životnom kľúči pristupujeme k ochrane osobných údajov s maximálnou vážnosťou a implementovali sme všetky potrebné opatrenia na zabezpečenie súladu s týmto nariadením.
        </p>
        
        <h2>Právny základ spracovania</h2>
        <p>
          Osobné údaje spracúvame na základe:
        </p>
        <ul>
          <li>Plnenia zmluvy - poskytovanie služby Životný kľúč</li>
          <li>Súhlasu - v prípade marketingovej komunikácie</li>
          <li>Oprávneného záujmu - zlepšovanie našich služieb</li>
        </ul>
        
        <h2>Práva dotknutých osôb</h2>
        <p>
          Podľa GDPR máte nasledujúce práva:
        </p>
        <ul>
          <li>Právo na prístup k údajom</li>
          <li>Právo na opravu údajov</li>
          <li>Právo na vymazanie údajov (právo "byť zabudnutý")</li>
          <li>Právo na obmedzenie spracovania</li>
          <li>Právo na prenositeľnosť údajov</li>
          <li>Právo namietať proti spracovaniu</li>
          <li>Právo nepodliehať automatizovanému rozhodovaniu vrátane profilovania</li>
        </ul>
        
        <h2>Ako si uplatniť svoje práva</h2>
        <p>
          Svoje práva si môžete uplatniť týmito spôsobmi:
        </p>
        <ul>
          <li>Prostredníctvom nastavení vášho účtu</li>
          <li>Zaslaním e-mailu na adresu gdpr@zivotny-kluc.sk</li>
          <li>Písomnou žiadosťou na našu korešpondenčnú adresu</li>
        </ul>
        <p>
          Na vašu žiadosť odpovieme do 30 dní. V prípade komplexných žiadostí môže byť táto lehota predĺžená o ďalších 60 dní.
        </p>
        
        <h2>Bezpečnosť údajov</h2>
        <p>
          Implementovali sme technické a organizačné opatrenia na ochranu vašich osobných údajov:
        </p>
        <ul>
          <li>Šifrovanie údajov v pokoji aj počas prenosu</li>
          <li>Pravidelné bezpečnostné audity</li>
          <li>Prístupové kontroly a monitorovanie</li>
          <li>Školenia zamestnancov v oblasti ochrany údajov</li>
        </ul>
        
        <h2>Medzinárodné prenosy údajov</h2>
        <p>
          Všetky osobné údaje spracúvame v rámci Európskej únie. V prípade prenosu údajov mimo EÚ zabezpečujeme adekvátnu úroveň ochrany prostredníctvom štandardných zmluvných doložiek alebo iných vhodných záruk.
        </p>
        
        <h2>Kontakt na DPO</h2>
        <p>
          V prípade otázok týkajúcich sa spracovania vašich osobných údajov kontaktujte nášho zodpovedného pracovníka pre ochranu údajov (DPO) na adrese <a href="mailto:dpo@zivotny-kluc.sk" className="text-lifekey-teal hover:underline">dpo@zivotny-kluc.sk</a>.
        </p>
      </div>
    </PageTemplate>
  );
};

export default GDPR;
