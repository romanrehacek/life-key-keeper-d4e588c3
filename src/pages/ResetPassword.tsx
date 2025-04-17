
import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Heslá sa nezhodujú.");
      return;
    }
    
    if (password.length < 8) {
      setError("Heslo musí mať aspoň 8 znakov.");
      return;
    }
    
    setIsLoading(true);
    setError(null);

    try {
      // Placeholder for password reset
      console.log("Resetting password with token:", token);
      
      // Simulate API call
      setTimeout(() => {
        toast({
          title: "Heslo úspešne zmenené",
          description: "Teraz sa môžete prihlásiť s novým heslom.",
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />
        });
        navigate("/login");
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError("Zmena hesla zlyhala. Skúste to znova.");
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <PageTemplate title="Obnovenie hesla">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border text-center">
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Neplatný alebo chýbajúci token pre obnovenie hesla.</AlertDescription>
            </Alert>
            <Button asChild className="bg-lifekey-teal hover:bg-lifekey-blue">
              <Link to="/forgot-password">
                Vyžiadať nový odkaz na obnovenie hesla
              </Link>
            </Button>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Obnovenie hesla">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border">
          <p className="mb-6 text-muted-foreground">
            Zadajte nové heslo pre váš účet.
          </p>
          
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Nové heslo</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Heslo musí mať aspoň 8 znakov.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Potvrďte nové heslo</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-lifekey-teal hover:bg-lifekey-blue" 
              disabled={isLoading}
            >
              {isLoading ? "Nastavujem heslo..." : "Nastaviť nové heslo"}
            </Button>
          </form>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ResetPassword;
