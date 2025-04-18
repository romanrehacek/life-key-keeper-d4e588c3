import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Key, Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from '@/hooks/useTheme';
import LanguageSelector from '@/components/LanguageSelector';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const isDashboardPath = ['/documents', '/contacts', '/activity', '/account'].includes(location.pathname);
  const isAuthenticated = false;
  
  const handleLogin = () => {
    navigate('/login');
  };

  const publicNavLinks = [
    { name: "Info", path: "/info" },
    { name: "Blog", path: "/blog" },
    { name: "Premium", path: "/premium" },
  ];

  const dashboardNavLinks = [
    { name: "Dokumenty", path: "/documents" },
    { name: "Kontakty", path: "/contacts" },
    { name: "Aktivita", path: "/activity" },
    { name: "Účet", path: "/account" },
  ];
  
  const navLinks = isDashboardPath || isAuthenticated ? dashboardNavLinks : publicNavLinks;

  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="container-lg flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Key className="h-6 w-6 text-lifekey-teal" />
              <span className="text-xl font-semibold tracking-tight">Životný kľúč</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {!isAuthenticated && publicNavLinks.map((link) => (
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="mr-2"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <LanguageSelector />
            {isAuthenticated ? (
              <Button className="bg-lifekey-teal hover:bg-lifekey-blue">
                Odhlásiť sa
              </Button>
            ) : (
              <Button className="bg-lifekey-teal hover:bg-lifekey-blue" onClick={handleLogin}>
                Prihlásiť sa
              </Button>
            )}
          </div>
        </div>
      </header>

      {isAuthenticated && (
        <nav className="hidden md:block border-r bg-sidebar w-64 h-[calc(100vh-4rem)] fixed top-16 left-0">
          <div className="p-4">
            <div className="space-y-1">
              {dashboardNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md text-sm font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}

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
    </div>
  );
};

export default Header;
