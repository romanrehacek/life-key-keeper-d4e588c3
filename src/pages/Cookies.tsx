
import React from 'react';
import { Helmet } from 'react-helmet';
import PageTemplate from '@/components/PageTemplate';

const Cookies = () => {
  return (
    <PageTemplate title="Cookie politika">
      <Helmet>
        <title>Cookie politika | Životný kľúč</title>
        <meta name="description" content="Informácie o tom, ako Životný kľúč používa cookies a ďalšie technológie na zlepšenie vášho používateľského zážitku." />
        <meta name="keywords" content="cookies, ochrana osobných údajov, digitálne dedičstvo, životný kľúč" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-p:my-4 prose-li:my-1 prose-headings:mt-8 prose-headings:mb-4">
          <p className="lead font-medium text-lg text-foreground mb-6">
            Táto cookie politika vysvetľuje, ako Životný kľúč používa cookies a podobné technológie.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Čo sú cookies</h2>
          <p>
            Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom prehliadači, keď navštívite našu webovú stránku. Používajú sa na rôzne účely, ako je zabezpečenie fungovania webových stránok, analýza návštevnosti a prispôsobenie obsahu.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Aké cookies používame</h2>
          <p>
            Na našej stránke používame nasledujúce typy cookies:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Nevyhnutné cookies</h3>
          <p>
            Tieto cookies sú potrebné pre základné fungovanie našej stránky. Umožňujú vám pohyb po stránke a využívanie jej funkcií. Bez týchto cookies by stránka nemohla správne fungovať.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Funkčné cookies</h3>
          <p>
            Tieto cookies umožňujú, aby si stránka zapamätala vaše preferencie a nastavenia, čo zlepšuje váš používateľský zážitok.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Analytické cookies</h3>
          <p>
            Používame ich na zber informácií o tom, ako návštevníci používajú našu stránku. Tieto cookies nám pomáhajú zlepšovať fungovanie stránky tým, že nám ukazujú, ktoré časti sú najnavštevovanejšie.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Spravovanie cookies</h2>
          <p>
            Väčšina webových prehliadačov vám umožňuje spravovať cookies prostredníctvom nastavení prehliadača. Môžete nastaviť svoj prehliadač tak, aby blokoval alebo upozorňoval na cookies, prípadne aby ich vymazal. Upozorňujeme však, že blokovanie všetkých cookies môže ovplyvniť fungovanie našej stránky.
          </p>
          
          <div className="bg-muted p-4 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-2">Ako nastaviť cookies v prehliadačoch</h3>
            <ul className="space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-lifekey-teal hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/sk/kb/povolenie-zakazanie-cookies" target="_blank" rel="noopener noreferrer" className="text-lifekey-teal hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/sk-sk/microsoft-edge/odstr%C3%A1nenie-cookies-v-prehliada%C4%8Di-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-lifekey-teal hover:underline">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/sk-sk/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-lifekey-teal hover:underline">Apple Safari</a></li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Zmeny v cookie politike</h2>
          <p>
            Túto cookie politiku môžeme z času na čas aktualizovať, aby odrážala zmeny v používaní cookies na našej stránke. Odporúčame vám pravidelne kontrolovať túto stránku, aby ste boli informovaní o aktuálnej verzii.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
          <p>
            Ak máte akékoľvek otázky týkajúce sa našej cookie politiky, kontaktujte nás na adrese <a href="mailto:info@zivotny-kluc.sk" className="text-lifekey-teal hover:underline">info@zivotny-kluc.sk</a>.
          </p>

          <div className="mt-12 pt-6 border-t">
            <p className="text-sm text-muted-foreground">Posledná aktualizácia: 15. apríla 2025</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Cookies;
