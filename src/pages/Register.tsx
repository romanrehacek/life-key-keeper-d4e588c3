import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Heslá sa nezhodujú.");
      return;
    }
    
    setIsLoading(true);
    setError(null);

    try {
      // Placeholder for registration
      console.log("Registration attempt with:", email);
      
      // Simulate registration
      setTimeout(() => {
        toast({
          title: "Registrácia úspešná",
          description: "Poslali sme vám potvrdzovací e-mail na dokončenie registrácie."
        });
        navigate("/verify-email");
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError("Registrácia zlyhala. Skúste to znova.");
      setIsLoading(false);
    }
  };

  return (
    <PageTemplate title="Vytvorte si účet">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border">
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Vaše meno</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Zadajte svoje meno"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-mailová adresa</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.sk"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Heslo</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Potvrďte heslo</Label>
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
              {isLoading ? "Registrujem..." : "Zaregistrovať sa"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Už máte účet?{" "}
              <Link to="/login" className="text-lifekey-teal hover:underline">
                Prihlásiť sa
              </Link>
            </p>
          </div>
          
          <div className="mt-4 text-xs text-center text-muted-foreground">
            Registráciou súhlasíte s našimi{" "}
            <Link to="/terms" className="text-lifekey-teal hover:underline">
              podmienkami používania
            </Link>{" "}
            a{" "}
            <Link to="/privacy" className="text-lifekey-teal hover:underline">
              ochranou osobných údajov
            </Link>.
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Register;
