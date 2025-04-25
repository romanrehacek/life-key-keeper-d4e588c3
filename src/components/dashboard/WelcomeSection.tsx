
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="bg-gradient-to-r from-lifekey-blue to-lifekey-teal text-white rounded-lg p-6 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Vitajte vo svojom bezpečnom priestore</h1>
          <p className="opacity-90">
            Zabezpečte, že vaši blízki dostanú dôležité informácie v prípade potreby.
          </p>
        </div>
        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
          Prejsť na návod 
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default WelcomeSection;
