
import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';

const VerifyEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const handleResendEmail = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "E-mail odoslaný",
        description: "Potvrdzovací e-mail bol odoslaný znova.",
      });
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (token) {
      // If there's a token in the URL, simulate verification
      setIsLoading(true);
      
      setTimeout(() => {
        setIsVerified(true);
        setIsLoading(false);
        toast({
          title: "E-mail overený",
          description: "Vaša e-mailová adresa bola úspešne overená.",
          icon: <CheckCircle2 className="h-5 w-5 text-green-500" />
        });
      }, 1500);
    }
  }, [token, toast]);

  if (isLoading && token) {
    return (
      <PageTemplate title="Overenie e-mailovej adresy">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border text-center">
            <div className="flex justify-center mb-6">
              <Loader2 className="h-12 w-12 animate-spin text-lifekey-teal" />
            </div>
            <h2 className="text-xl font-medium mb-4">Overujem e-mailovú adresu...</h2>
            <p className="text-muted-foreground">Počkajte prosím, overujeme vašu e-mailovú adresu.</p>
          </div>
        </div>
      </PageTemplate>
    );
  }

  if (isVerified) {
    return (
      <PageTemplate title="E-mail overený">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">E-mail úspešne overený</h2>
            
            <p className="mb-6 text-muted-foreground">
              Vaša e-mailová adresa bola úspešne overená. Teraz sa môžete prihlásiť do svojho účtu.
            </p>
            
            <Button asChild className="bg-lifekey-teal hover:bg-lifekey-blue">
              <Link to="/login">
                Prihlásiť sa
              </Link>
            </Button>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Overte svoju e-mailovú adresu">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border text-center">
          <div className="mb-6">
            <svg className="mx-auto h-16 w-16 text-lifekey-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Overte svoju e-mailovú adresu</h2>
          
          <p className="mb-6 text-muted-foreground">
            Poslali sme potvrdzovací e-mail na vašu e-mailovú adresu. Kliknite na odkaz v e-maili na dokončenie registrácie.
          </p>
          
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <p className="mb-6 text-muted-foreground">
            Nedostali ste e-mail? Skontrolujte priečinok so spamom alebo si vyžiadajte nový potvrdzovací e-mail.
          </p>
          
          <Button 
            className="bg-lifekey-teal hover:bg-lifekey-blue" 
            onClick={handleResendEmail}
            disabled={isLoading}
          >
            {isLoading ? "Odosielam..." : "Poslať znova"}
          </Button>
          
          <div className="mt-6">
            <Link to="/login" className="text-sm text-lifekey-teal hover:underline">
              Späť na prihlásenie
            </Link>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default VerifyEmail;
