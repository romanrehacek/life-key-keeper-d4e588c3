
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface NavigationProps {
  links: Array<{ name: string; path: string; }>;
}

const Navigation = ({ links }: NavigationProps) => {
  const location = useLocation();
  
  return (
    <>
      {links.map((link) => (
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
    </>
  );
};

export default Navigation;
