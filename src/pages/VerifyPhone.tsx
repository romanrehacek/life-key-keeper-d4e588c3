
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';
import { 
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";

const VerifyPhone = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.length !== 6) {
      setError("Zadajte 6-miestny kód.");
      return;
    }
    
    setIsLoading(true);
    setError(null);

    try {
      // Placeholder for phone verification
      console.log("Verifying phone with code:", code);
      
      // Simulate API call
      setTimeout(() => {
        if (code === "123456") { // Demo verification code
          setIsVerified(true);
          toast({
            title: "Telefónne číslo overené",
            description: "Vaše telefónne číslo bolo úspešne overené."
          });
        } else {
          setError("Nesprávny overovací kód. Skúste to znova.");
        }
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError("Overenie zlyhalo. Skúste to znova.");
      setIsLoading(false);
    }
  };

  const handleResendCode = () => {
    // Simulate resending code
    toast({
      title: "Kód odoslaný",
      description: "Nový overovací kód bol odoslaný na vaše telefónne číslo."
    });
  };

  if (isVerified) {
    return (
      <PageTemplate title="Telefónne číslo overené">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Telefónne číslo overené</h2>
            
            <p className="mb-6 text-muted-foreground">
              Vaše telefónne číslo bolo úspešne overené. Teraz môžete pokračovať.
            </p>
            
            <Button asChild className="bg-lifekey-teal hover:bg-lifekey-blue">
              <Link to="/documents">
                Pokračovať do aplikácie
              </Link>
            </Button>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Overte svoje telefónne číslo">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 text-center">Overte svoje telefónne číslo</h2>
          
          <p className="mb-6 text-center text-muted-foreground">
            Zadajte 6-miestny kód, ktorý sme poslali na vaše telefónne číslo.
          </p>
          
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-center">
                <InputOTP 
                  maxLength={6} 
                  value={code}
                  onChange={(value) => setCode(value)}
                >
                  <InputOTPGroup>
                    {Array.from({ length: 6 }, (_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Pre demo použite kód: 123456
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-lifekey-teal hover:bg-lifekey-blue" 
              disabled={isLoading}
            >
              {isLoading ? "Overujem..." : "Overiť"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Nedostali ste kód?
            </p>
            <Button
              variant="outline"
              onClick={handleResendCode}
              className="text-lifekey-teal hover:text-lifekey-blue"
            >
              Poslať znova
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default VerifyPhone;
