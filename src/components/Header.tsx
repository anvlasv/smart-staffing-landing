
import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="bg-background py-4 border-b border-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">ГрузВзяли</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+74951234567" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span className="hidden md:inline">+7 (495) 123-45-67</span>
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
