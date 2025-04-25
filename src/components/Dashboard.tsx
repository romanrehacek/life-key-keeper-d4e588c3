
import React from 'react';
import { useToast } from "@/components/ui/use-toast";
import WelcomeSection from './dashboard/WelcomeSection';
import StatusCards from './dashboard/StatusCards';
import DashboardTabs from './dashboard/DashboardTabs';

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = React.useState("documents");
  
  React.useEffect(() => {
    toast({
      title: "Vitajte v aplikácii Životný kľúč",
      description: "Vaše dáta sú bezpečne šifrované.",
      duration: 5000,
    });
  }, []);
  
  return (
    <div className="space-y-8">
      <WelcomeSection />
      <StatusCards />
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Dashboard;
