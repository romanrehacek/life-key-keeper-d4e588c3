
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const CallToAction = () => {
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
    <section className="py-16 md:py-24 bg-gradient-to-r from-lifekey-blue to-lifekey-teal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/cta-pattern.jpg')] opacity-10 bg-cover bg-center" />
      <div className="container-lg relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 mb-6">
            <ShieldCheck className="h-6 w-6 text-lifekey-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zabezpečte svoje informácie už dnes
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Začnite bezplatne a neskôr si môžete vybrať plán, ktorý najlepšie vyhovuje vašim potrebám.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-lifekey-blue hover:bg-lifekey-accent hover:text-lifekey-blue"
              onClick={handleLogin}
            >
              Vytvoriť bezplatný účet
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 hover:bg-white/20 text-white"
            >
              Premium funkcie
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
