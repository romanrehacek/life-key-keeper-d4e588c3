
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, Loader2, HelpCircle } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';
import { 
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Setup2FA = () => {
  const [method, setMethod] = useState("authenticator");
  const [secretKey, setSecretKey] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Generate QR code and secret key on component mount
  useEffect(() => {
    // Simulate API call to generate 2FA secret and QR code
    const generateSecret = () => {
      setIsGenerating(true);
      setTimeout(() => {
        setSecretKey("ABCDEFGHIJKLMNOP");
        setQrCodeUrl("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=otpauth://totp/Zivotny-Kluc:user@example.com?secret=ABCDEFGHIJKLMNOP&issuer=Zivotny-Kluc");
        setIsGenerating(false);
      }, 1500);
    };
    
    generateSecret();
  }, []);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.length !== 6) {
      setError("Zadajte 6-miestny kód.");
      return;
    }
    
    setIsLoading(true);
    setError(null);

    try {
      // Placeholder for 2FA verification
      console.log("Verifying 2FA code:", code);
      
      // Simulate API call
      setTimeout(() => {
        if (code === "123456") { // Demo verification code
          setSuccess(true);
          toast({
            title: "2FA aktivovaná",
            description: "Dvojfaktorová autentifikácia bola úspešne nastavená na vašom účte."
          });
          setTimeout(() => {
            navigate("/account");
          }, 2000);
        } else {
          setError("Nesprávny verifikačný kód. Skúste to znova.");
        }
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError("Verifikácia zlyhala. Skúste to znova.");
      setIsLoading(false);
    }
  };

  if (isGenerating) {
    return (
      <PageTemplate title="Nastavenie dvojfaktorovej autentifikácie">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border text-center">
            <div className="flex justify-center mb-6">
              <Loader2 className="h-12 w-12 animate-spin text-lifekey-teal" />
            </div>
            <h2 className="text-xl font-medium mb-4">Generujem bezpečnostné kľúče...</h2>
            <p className="text-muted-foreground">Počkajte prosím, pripravujeme všetko potrebné pre dvojfaktorovú autentifikáciu.</p>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Nastavenie dvojfaktorovej autentifikácie">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold mb-6 text-center">Zabezpečte svoj účet</h2>
          
          <p className="mb-6 text-muted-foreground">
            Dvojfaktorová autentifikácia poskytuje dodatočnú vrstvu zabezpečenia pre váš účet. Po nastavení budete potrebovať zadať jednorázový kód pri každom prihlásení.
          </p>
          
          <Tabs value={method} onValueChange={setMethod} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="authenticator">Autentifikátor</TabsTrigger>
              <TabsTrigger value="sms">SMS kód</TabsTrigger>
            </TabsList>
            
            <TabsContent value="authenticator" className="space-y-6 mt-4">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="bg-white p-4 inline-block rounded-lg mb-4">
                    <img src={qrCodeUrl} alt="QR kód pre autentifikátor" className="w-48 h-48" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="secret-key">Tajný kľúč</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="secret-key" 
                      value={secretKey} 
                      readOnly 
                      className="font-mono"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        navigator.clipboard.writeText(secretKey);
                        toast({
                          title: "Skopírované",
                          description: "Tajný kľúč bol skopírovaný do schránky."
                        });
                      }}
                    >
                      Kopírovať
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Naskenujte QR kód pomocou autentifikačnej aplikácie (Google Authenticator, Authy, Microsoft Authenticator) alebo manuálne zadajte tajný kľúč.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sms" className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="phone-number">Telefónne číslo</Label>
                <Input 
                  id="phone-number" 
                  placeholder="+421 9XX XXX XXX" 
                />
                <p className="text-xs text-muted-foreground">
                  Na toto telefónne číslo budeme posielať jednorázové kódy pri prihlásení.
                </p>
              </div>
              
              <Button 
                className="w-full bg-lifekey-teal hover:bg-lifekey-blue"
              >
                Poslať overovací kód
              </Button>
            </TabsContent>
          </Tabs>
          
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="verification-code">Overovací kód</Label>
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
                Zadajte 6-miestny kód z vašej autentifikačnej aplikácie
                {method === "authenticator" ? " (pre demo použite kód: 123456)" : ""}
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-lifekey-teal hover:bg-lifekey-blue" 
              disabled={isLoading}
            >
              {isLoading ? "Overujem..." : "Aktivovať 2FA"}
            </Button>
          </form>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Setup2FA;
