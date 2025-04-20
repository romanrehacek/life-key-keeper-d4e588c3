
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Key, CheckCircle, FileText, Users, Activity, ArrowRight } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const handleLogin = () => {
    toast({
      title: "Prihlásenie úspešné",
      description: "Vitajte v aplikácii Životný kľúč",
    });
    navigate('/dashboard');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-lifekey-blue to-lifekey-teal text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/hero-pattern.jpg')] opacity-10 bg-cover bg-center" />
          <div className="container-lg relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 mb-6">
                <Key className="h-6 w-6 text-lifekey-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t("home.hero.title")}
              </h1>
              <p className="text-xl opacity-90 mb-8">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-lifekey-blue hover:bg-lifekey-accent hover:text-lifekey-blue"
                  onClick={handleLogin}
                >
                  {t("home.button.getStarted")}
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/20">
                  {t("home.button.howItWorks")}
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
                {t("home.features.title")}
              </h2>
              <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
                {t("home.features.subtitle")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border bg-card">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-lifekey-teal/10 text-lifekey-teal mb-6">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t("home.feature.documents")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.feature.documents.description")}
                </p>
                <ul className="space-y-2">
                  {[
                    t("document.types.household"), 
                    t("document.types.finance"), 
                    t("document.types.crypto"), 
                    t("document.types.family")
                  ].map((item, index) => (
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
                <h3 className="text-xl font-semibold mb-3">{t("home.feature.activity")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.feature.activity.description")}
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
                <h3 className="text-xl font-semibold mb-3">{t("home.feature.contacts")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("home.feature.contacts.description")}
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
                {t("home.howItWorks.title")}
              </h2>
              <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
                {t("home.howItWorks.subtitle")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: '01',
                  title: t("home.step.one"),
                  description: t("home.step.one.description")
                },
                {
                  step: '02',
                  title: t("home.step.two"),
                  description: t("home.step.two.description")
                },
                {
                  step: '03',
                  title: t("home.step.three"),
                  description: t("home.step.three.description")
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
                {t("home.blog.title")}
              </h2>
              <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
                {t("home.blog.subtitle")}
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
                  {t("home.blog.viewAll")}
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
                {t("home.cta.title")}
              </h2>
              <p className="text-xl opacity-90 mb-8">
                {t("home.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-lifekey-blue hover:bg-lifekey-accent hover:text-lifekey-blue"
                  onClick={handleLogin}
                >
                  {t("home.cta.freeAccount")}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 hover:bg-white/20 text-white"
                >
                  {t("home.cta.premium")}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
