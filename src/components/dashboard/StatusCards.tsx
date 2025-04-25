
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FileText, Users, Clock, ShieldCheck } from 'lucide-react';

const StatusCard = ({ 
  icon: Icon, 
  title, 
  value, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  value: string | number; 
  description: string; 
}) => (
  <Card>
    <CardHeader className="pb-2">
      <div className="flex items-center space-x-2">
        <Icon className="h-4 w-4 text-lifekey-teal" />
        <div className="text-sm font-semibold">{title}</div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const StatusCards = () => {
  const cards = [
    {
      icon: FileText,
      title: "Dokumenty",
      value: "5",
      description: "Vytvorených dokumentov"
    },
    {
      icon: Users,
      title: "Kontakty",
      value: "3",
      description: "Dôveryhodné osoby"
    },
    {
      icon: Clock,
      title: "Aktivita",
      value: "17 dní",
      description: "Do nasledujúcej kontroly"
    },
    {
      icon: ShieldCheck,
      title: "Zabezpečenie",
      value: "Aktivované",
      description: "Dvojfaktorové overenie"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <StatusCard key={index} {...card} />
      ))}
    </div>
  );
};

export default StatusCards;
