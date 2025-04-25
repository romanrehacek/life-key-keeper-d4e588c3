
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocumentList from '../DocumentList';
import ContactList from '../ContactList';
import ActivityCheck from '../ActivityCheck';

const DashboardTabs = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  return (
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
  );
};

export default DashboardTabs;
