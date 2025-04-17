
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle2, AlertCircle, Calendar, Clock } from 'lucide-react';
import ActivitySettingsDialog from './ActivitySettingsDialog';

const ActivityCheck = () => {
  const [activityProgress, setActivityProgress] = React.useState(70);
  const [activeDialog, setActiveDialog] = useState<'notifications' | 'waiting-period' | 'settings' | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Kontrola aktivity</h2>
      
      <Card className="border-2 border-lifekey-teal/30">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">Aktuálny stav</CardTitle>
              <CardDescription>
                Vaši kontakty budú upozornení, ak nepotvrdíte aktivitu
              </CardDescription>
            </div>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Aktívny
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Zostávajúci čas do ďalšej kontroly</span>
                </div>
                <span className="text-sm font-medium">{activityProgress}%</span>
              </div>
              <Progress value={activityProgress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>17 dní zostáva</span>
                <span>25 dní celkovo</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Bell className="h-4 w-4 text-lifekey-teal" />
                  <span className="font-medium">Posledná aktivita</span>
                </div>
                <div className="text-sm">
                  <p>Potvrdenie emailom</p>
                  <p className="text-muted-foreground">10. apríla 2025, 14:35</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-lifekey-teal" />
                  <span className="font-medium">Nasledujúca kontrola</span>
                </div>
                <div className="text-sm">
                  <p>Email bude odoslaný</p>
                  <p className="text-muted-foreground">27. apríla 2025</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row gap-4 md:justify-between">
          <div className="text-sm text-muted-foreground flex items-center">
            <AlertCircle className="h-4 w-4 mr-1 text-amber-500" />
            Automatické upozornenie bude odoslané kontaktom len ak nepotvrdzujete aktivitu 30 dní.
          </div>
          <Button className="bg-lifekey-teal hover:bg-lifekey-blue w-full md:w-auto">
            Potvrdiť aktivitu teraz
          </Button>
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Overenie emailom</CardTitle>
            <CardDescription>
              Automatické emaily pre potvrdenie aktivity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center py-2">
              <span>Frekvencia kontrol</span>
              <Badge variant="outline">Mesačne</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => setActiveDialog('settings')}
            >
              Upraviť nastavenia
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Čakacie obdobie</CardTitle>
            <CardDescription>
              Doba čakania pred upozornením kontaktov
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center py-2">
              <span>Čakacia doba</span>
              <Badge variant="outline">30 dní</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setActiveDialog('waiting-period')}
            >
              Upraviť čakaciu dobu
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upozornenia</CardTitle>
            <CardDescription>
              Upozornenia na potrebu potvrdenia aktivity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center py-2">
              <span>Pripomienky</span>
              <Badge variant="outline">Aktivované</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setActiveDialog('notifications')}
            >
              Upraviť upozornenia
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <ActivitySettingsDialog
        open={activeDialog !== null}
        onClose={() => setActiveDialog(null)}
        type={activeDialog || 'settings'}
      />
    </div>
  );
};

export default ActivityCheck;
