import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { ShieldCheck, Key, CheckCircle, FileText, Users, Activity, ArrowRight } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Dashboard from '@/components/Dashboard';

const latestBlogPosts = [
  {
    id: 1,
    title: "Ako zabezpečiť svoje digitálne dedičstvo",
    excerpt: "V dnešnej dobe je dôležité myslieť aj na to, čo sa stane s našimi digitálnymi účtami...",
    date: "2024-04-15",
    image: "/assets/digital-legacy.jpg"
  },
  {
    id: 2,
    title: "Prečo je dôležité mať plán",
    excerpt: "Plánovanie budúcnosti nie je príjemná téma, ale je nevyhnutné...",
    date: "2024-04-10",
    image: "/assets/planning.jpg"
  },
  {
    id: 3,
    title: "Bezpečnosť na prvom mieste",
    excerpt: "Zabezpečenie citlivých informácií je kľúčové...",
    date: "2024-04-05",
    image: "/assets/security.jpg"
  }
];

const Index = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  
  const handleLogin = () => {
    setIsAuthenticated(true);
    toast({
      title: "Prihlásenie úspešné",
      description: "Vitajte v aplikácii Životný kľúč",
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {isAuthenticated ? (
          <div className="container-lg py-8">
            <Dashboard />
          </div>
        ) : (
          <>
            {/* Hero section */}
            <section className="bg-gradient-to-r from-lifekey-blue to-lifekey-teal text-white py-16 md:py-24 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/assets/hero-pattern.jpg')] opacity-10 bg-cover bg-center" />
              <div className="container-lg relative">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 mb-6">
                    <Key className="h-6 w-6 text-lifekey-accent" />
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Zabezpečte informácie pre svojich blízkych
                  </h1>
                  <p className="text-xl opacity-90 mb-8">
                    Životný kľúč sa postará, aby vaše dôležité dokumenty a informácie boli dostupné vašim bližným v prípade núdzovej situácie alebo dlhodobej neaktivity.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-lifekey-blue hover:bg-lifekey-accent hover:text-lifekey-blue"
                      onClick={handleLogin}
                    >
                      Začať teraz
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/20">
                      Ako to funguje
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Features section */}
            <section className="py-16 md:py-24 bg-background">
              <div className="container-lg">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Praktické riešenie pre vás a vašich blízkych
                  </h2>
                  <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
                    Zabezpečte, že vaši blízki budú pripravení na akúkoľvek situáciu s kompletnými informáciami.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="p-6 rounded-lg border bg-card">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-lifekey-teal/10 text-lifekey-teal mb-6">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Organizované dokumenty</h3>
                    <p className="text-muted-foreground mb-4">
                      Vytvorte kategorizované dokumenty s inštrukciami, prístupovými údajmi a pokynmi pre rôzne životné situácie.
                    </p>
                    <ul className="space-y-2">
                      {['Domácnosť', 'Financie', 'Kryptomeny', 'Kontakty'].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-lifekey-teal mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-lg border bg-card">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-lifekey-teal/10 text-lifekey-teal mb-6">
                      <Activity className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Kontrola aktivity</h3>
                    <p className="text-muted-foreground mb-4">
                      Systém automaticky kontroluje vašu aktivitu a reaguje len v prípade dlhodobej neaktivity.
                    </p>
                    <ul className="space-y-2">
                      {['E-mailové overenia', 'Pravidelné kontroly', 'Automatické upozornenia', 'Nastaviteľné parametre'].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-lifekey-teal mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-lg border bg-card">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-lifekey-teal/10 text-lifekey-teal mb-6">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Dôveryhodné kontakty</h3>
                    <p className="text-muted-foreground mb-4">
                      Pridajte dôveryhodné osoby, ktoré dostanú prístup k vašim informáciám po splnení bezpečnostných podmienok.
                    </p>
                    <ul className="space-y-2">
                      {['Selektívny prístup', 'Postupné odomknutie', 'Zadefinované postupy', 'Riadenie prístupov'].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-lifekey-teal mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* How it works */}
            <section className="py-16 md:py-24 bg-muted/30">
              <div className="container-lg">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ako to funguje
                  </h2>
                  <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
                    Jednoduchý proces, ktorý zabezpečí pokoj v duši pre vás aj vašich blízkych
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {[
                    {
                      step: '01',
                      title: 'Vytvorte dokumenty',
                      description: 'Vytvorte si dokumenty s dôležitými informáciami pomocou jednoduchého editora alebo pripravených šablón.'
                    },
                    {
                      step: '02',
                      title: 'Nastavte dôveryhodné kontakty',
                      description: 'Pridajte kontakty, ktoré dostanú informácie, a nastavte pre každý kontakt prístupové práva.'
                    },
                    {
                      step: '03',
                      title: 'Potvrdzujte aktivitu',
                      description: 'Pravidelne potvrdzujte svoju aktivitu. Ak sa dlhodobé neozviete, systém automaticky upozorní vaše kontakty.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative flex items-center">
                      <div className="bg-card rounded-lg p-6 border flex-1">
                        <div className="text-3xl font-bold text-lifekey-teal mb-4">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      {index < 2 && (
                        <div className="hidden md:flex items-center justify-center w-8">
                          <ArrowRight className="h-6 w-6 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Latest Blog Posts */}
            <section className="py-16 md:py-24 bg-background">
              <div className="container-lg">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Najnovšie články
                  </h2>
                  <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
                    Prečítajte si naše najnovšie články o bezpečnosti a plánovaní budúcnosti
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {latestBlogPosts.map((post) => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="group">
                      <div className="bg-card rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-lg">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <p className="text-sm text-muted-foreground mb-2">
                            {new Date(post.date).toLocaleDateString('sk-SK')}
                          </p>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-lifekey-teal transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button asChild variant="outline">
                    <Link to="/blog">
                      Zobraziť všetky články
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-lifekey-blue to-lifekey-teal text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/assets/cta-pattern.jpg')] opacity-10 bg-cover bg-center" />
              <div className="container-lg relative">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 mb-6">
                    <ShieldCheck className="h-6 w-6 text-lifekey-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Zabezpečte pokoj v duši pre vás a vašich blízkych
                  </h2>
                  <p className="text-xl opacity-90 mb-8">
                    Začnite už dnes s bezplatnou verziou alebo získajte plnú funkcionalitu s prémiovým plánom.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-lifekey-blue hover:bg-lifekey-accent hover:text-lifekey-blue"
                      onClick={handleLogin}
                    >
                      Vytvoriť účet zadarmo
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white/30 hover:bg-white/20 text-white"
                    >
                      Prémiové funkcie
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
