
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, UserPlus, Mail, Phone, Clock, File, Edit, Trash } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  relationship: string;
  documentAccess: number;
  waitingPeriod: string;
}

const exampleContacts: Contact[] = [
  {
    id: '1',
    name: 'Jana Nováková',
    email: 'jana.novak@example.com',
    phone: '+421 903 123 456',
    relationship: 'Manželka',
    documentAccess: 5,
    waitingPeriod: '30 dní'
  },
  {
    id: '2',
    name: 'Peter Novák',
    email: 'peter.novak@example.com',
    phone: '+421 905 789 012',
    relationship: 'Syn',
    documentAccess: 3,
    waitingPeriod: '45 dní'
  },
  {
    id: '3',
    name: 'Lucia Malá',
    email: 'lucia.mala@example.com',
    phone: '+421 908 345 678',
    relationship: 'Advokátka',
    documentAccess: 2,
    waitingPeriod: '60 dní'
  }
];

const ContactList = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Kontakty pre núdzové situácie</h2>
        <Button className="bg-lifekey-teal hover:bg-lifekey-blue">
          <UserPlus className="h-4 w-4 mr-2" />
          Pridať kontakt
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exampleContacts.map(contact => (
          <Card key={contact.id} className="overflow-hidden transition-all hover:border-lifekey-teal/50 hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${contact.name}`} alt={contact.name} />
                  <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{contact.name}</CardTitle>
                  <Badge variant="outline">{contact.relationship}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-2">
                <div className="flex items-center text-sm gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Čakacia doba: {contact.waitingPeriod}</span>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <File className="h-4 w-4 text-muted-foreground" />
                  <span>Dokumenty: {contact.documentAccess}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" size="sm">
                Nastavenia
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
