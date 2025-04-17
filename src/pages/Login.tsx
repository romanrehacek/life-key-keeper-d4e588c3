
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle } from "lucide-react";
import PageTemplate from '@/components/PageTemplate';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Placeholder for authentication
      console.log("Login attempt with:", email);
      
      // Simulate login
      setTimeout(() => {
        toast({
          title: "Prihlásenie úspešné",
          description: "Vitajte späť v aplikácii Životný kľúč!",
        });
        navigate("/documents");
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError("Prihlásenie zlyhalo. Skontrolujte svoje údaje a skúste to znova.");
      setIsLoading(false);
    }
  };

  return (
    <PageTemplate title="Prihláste sa do svojho účtu">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg border">
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
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Heslo</Label>
                <Link 
                  to="/forgot-password"
                  className="text-sm text-lifekey-teal hover:underline"
                >
                  Zabudnuté heslo?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-lifekey-teal hover:bg-lifekey-blue" 
              disabled={isLoading}
            >
              {isLoading ? "Prihlasujem..." : "Prihlásiť sa"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Ešte nemáte účet?{" "}
              <Link to="/register" className="text-lifekey-teal hover:underline">
                Zaregistrovať sa
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Login;
