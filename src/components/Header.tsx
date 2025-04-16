
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Key, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/');
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-lg flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Key className="h-6 w-6 text-lifekey-teal" />
            <span className="text-xl font-semibold tracking-tight">Životný kľúč</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/documents" className="text-sm font-medium hover:text-lifekey-teal transition-colors">
            Dokumenty
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-lifekey-teal transition-colors">
            Kontakty
          </Link>
          <Link to="/activity" className="text-sm font-medium hover:text-lifekey-teal transition-colors">
            Aktivita
          </Link>
          <Link to="/account" className="text-sm font-medium hover:text-lifekey-teal transition-colors">
            Účet
          </Link>
          <Button className="bg-lifekey-teal hover:bg-lifekey-blue" onClick={handleLogin}>
            Prihlásiť sa
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open main menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-y-0 right-0 z-50 w-full bg-background transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center gap-2">
            <Key className="h-6 w-6 text-lifekey-teal" />
            <span className="text-xl font-semibold">Životný kľúč</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close main menu"
          >
            <X size={24} />
          </Button>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          <Link 
            to="/documents" 
            className="py-2 text-lg font-medium hover:text-lifekey-teal transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dokumenty
          </Link>
          <Link 
            to="/contacts" 
            className="py-2 text-lg font-medium hover:text-lifekey-teal transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kontakty
          </Link>
          <Link 
            to="/activity" 
            className="py-2 text-lg font-medium hover:text-lifekey-teal transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Aktivita
          </Link>
          <Link 
            to="/account" 
            className="py-2 text-lg font-medium hover:text-lifekey-teal transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Účet
          </Link>
          <Button className="bg-lifekey-teal hover:bg-lifekey-blue w-full mt-4" onClick={handleLogin}>
            Prihlásiť sa
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
