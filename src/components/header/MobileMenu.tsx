
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { X, Key } from 'lucide-react';
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ name: string; path: string; }>;
  isAuthenticated: boolean;
  onLogin: () => void;
}

const MobileMenu = ({ isOpen, onClose, links, isAuthenticated, onLogin }: MobileMenuProps) => {
  return (
    <div className={cn(
      "md:hidden fixed inset-y-0 right-0 z-50 w-full bg-background transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "translate-x-full"
    )}>
      <div className="flex items-center justify-between h-16 px-6 border-b">
        <div className="flex items-center gap-2">
          <Key className="h-6 w-6 text-lifekey-teal" />
          <span className="text-xl font-semibold">Životný kľúč</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close main menu"
        >
          <X size={24} />
        </Button>
      </div>
      <nav className="flex flex-col p-6 space-y-4">
        {links.map((link) => (
          <Link 
            key={link.path}
            to={link.path} 
            className="py-2 text-lg font-medium transition-colors hover:text-lifekey-teal"
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
        {isAuthenticated ? (
          <Button className="bg-lifekey-teal hover:bg-lifekey-blue w-full mt-4">
            Odhlásiť sa
          </Button>
        ) : (
          <Button className="bg-lifekey-teal hover:bg-lifekey-blue w-full mt-4" onClick={onLogin}>
            Prihlásiť sa
          </Button>
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
