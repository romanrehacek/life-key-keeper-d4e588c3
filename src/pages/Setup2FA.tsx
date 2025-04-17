
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle2, Copy, RefreshCw } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Setup2FA = () => {
  const [activeTab, setActiveTab] = useState("app");
  const [qrCode, setQrCode] = useState("https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=otpauth://totp/LifeKey:user@example.com?secret=EXAMPLEOTPSECRET&issuer=LifeKey");
  const [secret, setSecret] = useState("EXAMPLEOTPSECRET");
  const [verificationCode, setVerificationCode] = useState("");
  const [recoveryKeys, setRecoveryKeys] = useState<string[]>([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showRecoveryKeys, setShowRecoveryKeys] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Generate recovery keys on component mount
  useEffect(() => {
    const generateKeys = () => {
      const keys = Array(8)
        .fill(0)
        .map(() => Math.random().toString(36).substring(2, 8) + "-" + Math.random().toString(36).substring(2, 8));
      setRecoveryKeys(keys);
    };

    generateKeys();
  }, []);

  const handleCopySecret = () => {
    navigator.clipboard.writeText(secret);
    toast({
      title: "Kľúč skopírovaný",
      description: "Tajný kľúč bol skopírovaný do schránky",
    });
  };

  const handleRefreshKeys = () => {
    const keys = Array(8)
      .fill(0)
      .map(() => Math.random().toString(36).substring(2, 8) + "-" + Math.random().toString(36).substring(2, 8));
    setRecoveryKeys(keys);
    toast({
      title: "Kľúče obnovené",
      description: "Nové záložné kľúče boli vygenerované",
    });
  };

  const handleVerifyApp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (verificationCode.length !== 6) {
      setError("Zadajte 6-miestny kód z vašej autentifikačnej aplikácie.");
      return;
    }
    
    setIsLoading(true);
    setError(null);

    try {
      // Simulate verification
      setTimeout(() => {
        if (verificationCode === "123456") {
          setShowRecoveryKeys(true);
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

  const handleSetupSMS = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.match(/^\+?[0-9\s]{10,15}$/)) {
      setError("Zadajte platné telefónne číslo.");
      return;
    }
    
    setIsLoading(true);
    setError(null);

    try {
      // Simulate sending SMS
      setTimeout(() => {
        toast({
          title: "SMS odoslaná",
          description: "Overovací kód bol odoslaný na vaše telefónne číslo.",
        });
        navigate("/verify-phone");
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError("Odoslanie SMS zlyhalo. Skúste to znova.");
      setIsLoading(false);
    }
  };

  const handleComplete = () => {
    toast({
      title: "2FA aktivované",
      description: "Dvojfaktorová autentifikácia bola úspešne nastavená.",
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />
    });
    navigate("/account");
  };

  if (showRecoveryKeys) {
    return (
      <PageTemplate title="Bezpečnostné kľúče">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-xl p-6 bg-card rounded-lg shadow-lg border">
            <h2 className="text-2xl font-semibold mb-4 text-center">Uložte si záložné kľúče</h2>
            
            <Alert className="mb-6">
              <AlertDescription>
                <span className="font-semibold">Dôležité:</span> Tieto záložné kľúče vám umožnia prístup k vášmu účtu, ak stratíte prístup k vašej autentifikačnej aplikácii. Uložte ich na bezpečnom mieste.
              </AlertDescription>
            </Alert>
            
            <div className="p-4 bg-muted rounded-md mb-6">
              <div className="grid grid-cols-2 gap-3">
                {recoveryKeys.map((key, index) => (
                  <div key={index} className="p-2 bg-card border rounded text-center font-mono">
                    {key}
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Button 
                  variant="outline" 
                  onClick={handleRefreshKeys}
                  className="flex items-center"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Vygenerovať nové kľúče
                </Button>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                className="bg-lifekey-teal hover:bg-lifekey-blue" 
                onClick={handleComplete}
              >
                Dokončiť nastavenie
              </Button>
            </div>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Nastavenie dvojfaktorovej autentifikácie">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-xl p-6 bg-card rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 text-center">Nastavenie dvojfaktorovej autentifikácie</h2>
          
          <p className="mb-6 text-center text-muted-foreground">
            Dvojfaktorová autentifikácia poskytuje zvýšenú ochranu vášho účtu vyžadovaním druhého faktora na prihlásenie sa.
          </p>
          
          <Tabs defaultValue="app" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="app">Autentifikačná aplikácia</TabsTrigger>
              <TabsTrigger value="sms">SMS</TabsTrigger>
            </TabsList>
            
            <TabsContent value="app">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-center mb-4">
                    Naskenujte tento QR kód pomocou autentifikačnej aplikácie ako Google Authenticator, Authy alebo Microsoft Authenticator.
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    <div className="border p-2 bg-white rounded">
                      <img src={qrCode} alt="QR kod pre 2FA" className="w-48 h-48" />
                    </div>
                  </div>
                  
                  <div className="flex justify-center items-center space-x-4 mb-6">
                    <div className="font-mono bg-muted px-4 py-2 rounded text-center">
                      {secret}
                    </div>
                    <Button variant="outline" onClick={handleCopySecret} size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {error && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  <form onSubmit={handleVerifyApp} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="verification-code">Zadajte overovací kód z vašej aplikácie</Label>
                      <div className="flex justify-center">
                        <InputOTP 
                          maxLength={6} 
                          value={verificationCode}
                          onChange={(value) => setVerificationCode(value)}
                          render={({ slots }) => (
                            <InputOTPGroup>
                              {slots.map((slot, index) => (
                                <InputOTPSlot key={index} {...slot} index={index} />
                              ))}
                            </InputOTPGroup>
                          )}
                        />
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
                      {isLoading ? "Overujem..." : "Overiť a pokračovať"}
                    </Button>
                  </form>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sms">
              <div className="space-y-6">
                <p className="text-center mb-4">
                  Zadajte vaše telefónne číslo a pošleme vám SMS s overovacím kódom pri každom prihlásení.
                </p>
                
                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <form onSubmit={handleSetupSMS} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone-number">Telefónne číslo</Label>
                    <Input
                      id="phone-number"
                      type="tel"
                      placeholder="+421 912 345 678"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-lifekey-teal hover:bg-lifekey-blue" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Odosielam..." : "Odoslať overovací kód"}
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Setup2FA;
