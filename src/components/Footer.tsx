
import React from 'react';
import { Link } from 'react-router-dom';
import { Key, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <Key className="h-5 w-5 mr-2 text-lifekey-teal" />
              <span className="text-xl font-semibold">Životný kľúč</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Zabezpečte svoje digitálne dedičstvo a uľahčite svojim blízkym prístup k dôležitým informáciám v prípade potreby.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Rýchle odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/info" className="text-sm text-muted-foreground hover:text-lifekey-teal transition-colors">
                  Ako to funguje
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-lifekey-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/premium" className="text-sm text-muted-foreground hover:text-lifekey-teal transition-colors">
                  Premium
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Právne informácie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-lifekey-teal transition-colors">
                  Podmienky používania
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-lifekey-teal transition-colors">
                  Ochrana osobných údajov
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-lifekey-teal transition-colors">
                  Cookie politika
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-sm text-muted-foreground hover:text-lifekey-teal transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground shrink-0" />
                <a href="mailto:info@zivotny-kluc.sk" className="text-sm text-muted-foreground hover:text-lifekey-teal transition-colors">
                  info@zivotny-kluc.sk
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground shrink-0" />
                <a href="tel:+421912345678" className="text-sm text-muted-foreground hover:text-lifekey-teal transition-colors">
                  +421 912 345 678
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Hlavná 123, 811 01 Bratislava, Slovensko
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Životný kľúč. Všetky práva vyhradené.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/login" className="text-sm text-lifekey-teal hover:underline mr-6">
              Prihlásenie
            </Link>
            <Link to="/register" className="text-sm text-lifekey-teal hover:underline">
              Registrácia
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
