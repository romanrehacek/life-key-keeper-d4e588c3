
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Key, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if user is authenticated and in dashboard area
  // For this demo version, we'll consider dashboard paths to be documents, contacts, activity, account
  const isDashboardPath = ['/documents', '/contacts', '/activity', '/account'].includes(location.pathname);
  
  // For demo purposes, assume user is not authenticated
  const isAuthenticated = false;
  
  const handleLogin = () => {
    navigate('/login');
  };

  // Public navigation links (when not logged in)
  const publicNavLinks = [
    { name: "Info", path: "/info" },
    { name: "Blog", path: "/blog" },
    { name: "Premium", path: "/premium" },
  ];

  // Dashboard navigation links (when logged in)
  const dashboardNavLinks = [
    { name: "Dokumenty", path: "/documents" },
    { name: "Kontakty", path: "/contacts" },
    { name: "Aktivita", path: "/activity" },
    { name: "Účet", path: "/account" },
  ];
  
  // Determine which set of links to show
  const navLinks = isDashboardPath || isAuthenticated ? dashboardNavLinks : publicNavLinks;

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
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === link.path 
                  ? "text-lifekey-teal" 
                  : "hover:text-lifekey-teal"
              )}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <Button className="bg-lifekey-teal hover:bg-lifekey-blue">
              Odhlásiť sa
            </Button>
          ) : (
            <Button className="bg-lifekey-teal hover:bg-lifekey-blue" onClick={handleLogin}>
              Prihlásiť sa
            </Button>
          )}
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
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={cn(
                "py-2 text-lg font-medium transition-colors",
                location.pathname === link.path 
                  ? "text-lifekey-teal" 
                  : "hover:text-lifekey-teal"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <Button className="bg-lifekey-teal hover:bg-lifekey-blue w-full mt-4">
              Odhlásiť sa
            </Button>
          ) : (
            <Button className="bg-lifekey-teal hover:bg-lifekey-blue w-full mt-4" onClick={handleLogin}>
              Prihlásiť sa
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
