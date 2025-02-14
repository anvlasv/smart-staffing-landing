
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-primary/90 to-primary py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ef35a989-b769-43ff-b6d3-5c621e4a43bb.png" 
              alt="РабочийКласс"
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/90 hover:text-white transition-colors">
              Услуги
            </a>
            <a href="#benefits" className="text-white/90 hover:text-white transition-colors">
              Преимущества
            </a>
            <a href="#pricing" className="text-white/90 hover:text-white transition-colors">
              Цены
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              Контакты
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+79240424890" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
              <Phone size={20} />
              <span className="hidden md:inline">+7 (924) 042-48-90</span>
            </a>
            <Button className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="#contact">Оставить заявку</a>
            </Button>
            <button
              className="md:hidden text-white p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary shadow-lg py-4 px-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={handleNavigationClick}
              >
                Услуги
              </a>
              <a 
                href="#benefits" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={handleNavigationClick}
              >
                Преимущества
              </a>
              <a 
                href="#pricing" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={handleNavigationClick}
              >
                Цены
              </a>
              <a 
                href="#contact" 
                className="text-white/90 hover:text-white transition-colors"
                onClick={handleNavigationClick}
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
