
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Vytvorte účet',
      description: 'Zaregistrujte sa a nastavte prístupové údaje a bezpečnostné prvky.'
    },
    {
      step: '02',
      title: 'Pridajte dokumenty',
      description: 'Vytvorte dokumenty s dôležitými informáciami pre vaše kontakty.'
    },
    {
      step: '03',
      title: 'Definujte kontakty',
      description: 'Určite kto a za akých okolností dostane prístup k vašim údajom.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ako to funguje
          </h2>
          <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
            Nastavenie služby Životný kľúč je jednoduché a intuitívne. Začnite už dnes!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((item, index) => (
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
  );
};

export default HowItWorks;
