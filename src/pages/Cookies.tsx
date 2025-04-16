
import React from 'react';
import PageTemplate from '@/components/PageTemplate';

const Cookies = () => {
  return (
    <PageTemplate title="Cookie politika">
      <div className="prose prose-slate max-w-4xl">
        <p className="lead">Táto cookie politika vysvetľuje, ako Životný kľúč používa cookies a podobné technológie.</p>
        
        <h2>Čo sú cookies</h2>
        <p>
          Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom prehliadači, keď navštívite našu webovú stránku. Používajú sa na rôzne účely, ako je zabezpečenie fungovania webových stránok, analýza návštevnosti a prispôsobenie obsahu.
        </p>
        
        <h2>Aké cookies používame</h2>
        <p>
          Na našej stránke používame nasledujúce typy cookies:
        </p>
        
        <h3>Nevyhnutné cookies</h3>
        <p>
          Tieto cookies sú potrebné pre základné fungovanie našej stránky. Umožňujú vám pohyb po stránke a využívanie jej funkcií. Bez týchto cookies by stránka nemohla správne fungovať.
        </p>
        
        <h3>Funkčné cookies</h3>
        <p>
          Tieto cookies umožňujú, aby si stránka zapamätala vaše preferencie a nastavenia, čo zlepšuje váš používateľský zážitok.
        </p>
        
        <h3>Analytické cookies</h3>
        <p>
          Používame ich na zber informácií o tom, ako návštevníci používajú našu stránku. Tieto cookies nám pomáhajú zlepšovať fungovanie stránky tým, že nám ukazujú, ktoré časti sú najnavštevovanejšie.
        </p>
        
        <h2>Spravovanie cookies</h2>
        <p>
          Väčšina webových prehliadačov vám umožňuje spravovať cookies prostredníctvom nastavení prehliadača. Môžete nastaviť svoj prehliadač tak, aby blokoval alebo upozorňoval na cookies, prípadne aby ich vymazal. Upozorňujeme však, že blokovanie všetkých cookies môže ovplyvniť fungovanie našej stránky.
        </p>
        
        <h2>Zmeny v cookie politike</h2>
        <p>
          Túto cookie politiku môžeme z času na čas aktualizovať, aby odrážala zmeny v používaní cookies na našej stránke. Odporúčame vám pravidelne kontrolovať túto stránku, aby ste boli informovaní o aktuálnej verzii.
        </p>
        
        <h2>Kontakt</h2>
        <p>
          Ak máte akékoľvek otázky týkajúce sa našej cookie politiky, kontaktujte nás na adrese <a href="mailto:info@zivotny-kluc.sk" className="text-lifekey-teal hover:underline">info@zivotny-kluc.sk</a>.
        </p>
      </div>
    </PageTemplate>
  );
};

export default Cookies;
