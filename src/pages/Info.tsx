
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, FileText, Help, Shield } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Info = () => {
  return (
    <PageTemplate title="Praktické informácie">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="how-it-works" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="how-it-works">Ako to funguje</TabsTrigger>
            <TabsTrigger value="security">Bezpečnosť</TabsTrigger>
            <TabsTrigger value="faq">Časté otázky</TabsTrigger>
            <TabsTrigger value="docs">Dokumentácia</TabsTrigger>
          </TabsList>
          
          <TabsContent value="how-it-works" className="space-y-8">
            <div className="prose prose-slate max-w-none">
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
              
              <h3>Bezpečnostný protokol</h3>
              <p>
                Pri aktivácii bezpečnostného protokolu systém kontaktuje vami určených príjemcov a poskytne im prístup k dokumentom, ktoré ste pre nich určili. Životný kľúč nikdy nemá prístup k obsahu vašich dokumentov - všetko je end-to-end šifrované.
              </p>
              
              <h3>Pravidelné aktualizácie</h3>
              <p>
                Je dôležité udržiavať vaše dokumenty aktuálne. Životný kľúč vás bude pravidelne upozorňovať na potrebu revízie vašich dokumentov a kontaktných informácií príjemcov.
              </p>
              
              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-lg font-semibold mb-2">Začnite ešte dnes</h3>
                <p className="mb-4">
                  Zabezpečte svoje digitálne dedičstvo a poskytnite svojim blízkym potrebné informácie v prípade núdze.
                </p>
                <Button className="bg-lifekey-teal hover:bg-lifekey-blue" asChild>
                  <Link to="/register">
                    Vytvoriť účet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-8">
            <div className="prose prose-slate max-w-none">
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
          </TabsContent>
          
          <TabsContent value="faq" className="space-y-8">
            <div className="prose prose-slate max-w-none">
              <h2>Časté otázky</h2>
              
              <div className="space-y-6 mt-8">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Čo sa stane, ak nereagujem na kontrolnú správu?</h3>
                  <p>
                    Ak nereagujete na kontrolnú správu, systém sa pokúsi kontaktovať vás opakovane rôznymi kanálmi (e-mail, SMS). Ak nebudete reagovať po definovanú dobu (ktorú si môžete nastaviť), spustí sa bezpečnostný protokol a vaši príjemcovia dostanú prístup k určeným dokumentom.
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
                    <Help className="mr-2 h-4 w-4" />
                    Kontaktovať podporu
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="docs" className="space-y-8">
            <div className="prose prose-slate max-w-none">
              <h2>Dokumentácia a návody</h2>
              
              <p className="lead">
                Naša dokumentácia vám pomôže využiť plný potenciál služby Životný kľúč. Nájdete tu návody, príklady a najlepšie postupy.
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
          </TabsContent>
        </Tabs>
      </div>
    </PageTemplate>
  );
};

export default Info;
