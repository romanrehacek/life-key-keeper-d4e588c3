
import React from 'react';
import { Button } from "@/components/ui/button";
import { Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogin = () => {
    toast({
      title: "Prihlásenie úspešné",
      description: "Vitajte v aplikácii Životný kľúč",
    });
    navigate('/dashboard');
  };

  return (
    <section className="bg-gradient-to-r from-lifekey-blue to-lifekey-teal text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/hero-pattern.jpg')] opacity-10 bg-cover bg-center" />
      <div className="container-lg relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 mb-6">
            <Key className="h-6 w-6 text-lifekey-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Chráňte informácie pre vašich blízkych
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Bezpečne uchovávajte dôležité údaje a dokumenty pre prípad núdze
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-lifekey-blue hover:bg-lifekey-accent hover:text-lifekey-blue"
              onClick={handleLogin}
            >
              Vytvoriť účet
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/20">
              Ako to funguje
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
