
import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">ГрузВзяли</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+79240424890" className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span className="hidden md:inline">7-924-042-48-90</span>
            </a>
            <Button asChild>
              <a href="#contact">Оставить заявку</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
