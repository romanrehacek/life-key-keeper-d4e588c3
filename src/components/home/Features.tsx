
import React from 'react';
import { FileText, Activity, Users, CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, items }: {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
}) => (
  <div className="p-6 rounded-lg border bg-card">
    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-lifekey-teal/10 text-lifekey-teal mb-6">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <CheckCircle className="h-4 w-4 text-lifekey-teal mr-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Bezpečné dokumenty",
      description: "Vytvorte a uchovávajte kľúčové informácie v šifrovaných dokumentoch.",
      items: ["Domácnosť", "Financie", "Kryptomeny", "Rodina"]
    },
    {
      icon: Activity,
      title: "Overenie aktivity",
      description: "Systém automaticky sleduje vašu aktivitu a reaguje podľa nastavených parametrov.",
      items: ["E-mailové overenia", "Pravidelné kontroly", "Automatické upozornenia", "Nastaviteľné parametre"]
    },
    {
      icon: Users,
      title: "Správa kontaktov",
      description: "Definujte kto, kedy a k akým informáciám bude mať prístup.",
      items: ["Selektívny prístup", "Postupné odomknutie", "Zadefinované postupy", "Riadenie prístupov"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Všetko potrebné na jednom mieste
          </h2>
          <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
            Naša platforma poskytuje komplexné riešenie pre uchovávanie a zdieľanie dôležitých informácií s vašimi blízkymi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
