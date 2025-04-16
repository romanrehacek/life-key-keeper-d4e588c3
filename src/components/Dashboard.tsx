
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ShieldCheck, UserCircle, FileText, Users, Bell, ArrowRight, Clock } from 'lucide-react';
import DocumentList from './DocumentList';
import ContactList from './ContactList';
import ActivityCheck from './ActivityCheck';

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = React.useState("documents");
  
  // Simulate a welcome message on component mount
  React.useEffect(() => {
    toast({
      title: "Vitajte v aplikácii Životný kľúč",
      description: "Vaše dáta sú bezpečne šifrované.",
      duration: 5000,
    });
  }, []);
  
  return (
    <div className="space-y-8">
      {/* Welcome section */}
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
      
      {/* Status summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-lifekey-teal" />
              <CardTitle className="text-sm">Dokumenty</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Vytvorených dokumentov</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-lifekey-teal" />
              <CardTitle className="text-sm">Kontakty</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Dôveryhodné osoby</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-lifekey-teal" />
              <CardTitle className="text-sm">Aktivita</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">17 dní</div>
            <p className="text-xs text-muted-foreground">Do nasledujúcej kontroly</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-4 w-4 text-lifekey-teal" />
              <CardTitle className="text-sm">Zabezpečenie</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Aktivované</div>
            <p className="text-xs text-muted-foreground">Dvojfaktorové overenie</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Main content tabs */}
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid grid-cols-3 md:w-[400px]">
          <TabsTrigger value="documents">Dokumenty</TabsTrigger>
          <TabsTrigger value="contacts">Kontakty</TabsTrigger>
          <TabsTrigger value="activity">Aktivita</TabsTrigger>
        </TabsList>
        <TabsContent value="documents" className="space-y-4">
          <DocumentList />
        </TabsContent>
        <TabsContent value="contacts" className="space-y-4">
          <ContactList />
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <ActivityCheck />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
