
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, ArrowLeft, CheckCircle2 } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Placeholder for password reset
      console.log("Password reset for:", email);
      
      // Simulate API call
      setTimeout(() => {
        toast({
          title: "E-mail odoslaný",
          description: "Pokyny na obnovenie hesla boli odoslané na vašu e-mailovú adresu.",
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />
        });
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError("Odoslanie e-mailu zlyhalo. Skúste to znova.");
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <PageTemplate title="Zabudnuté heslo">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">E-mail odoslaný</h2>
            
            <p className="mb-6 text-muted-foreground">
              Poslali sme vám e-mail s pokynmi na obnovenie hesla. Skontrolujte svoju e-mailovú schránku.
            </p>
            
            <Button asChild className="bg-lifekey-teal hover:bg-lifekey-blue">
              <Link to="/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Späť na prihlásenie
              </Link>
            </Button>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Zabudnuté heslo">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border">
          <p className="mb-6 text-muted-foreground">
            Zadajte svoju e-mailovú adresu a pošleme vám pokyny na obnovenie hesla.
          </p>
          
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mailová adresa</Label>
              <Input
                id="email"
                type="email"
                placeholder="vas@email.sk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-lifekey-teal hover:bg-lifekey-blue" 
              disabled={isLoading}
            >
              {isLoading ? "Odosielam..." : "Odoslať pokyny na obnovenie hesla"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-lifekey-teal hover:underline flex items-center justify-center">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Späť na prihlásenie
            </Link>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ForgotPassword;
