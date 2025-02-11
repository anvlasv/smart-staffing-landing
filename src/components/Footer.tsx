
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Smart Staffing</h3>
            <p className="text-muted-foreground">
              Профессиональный аутстаффинг персонала в России. Быстро, надежно, выгодно.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+74951234567" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span>+7 (495) 123-45-67</span>
              </a>
              <a href="mailto:info@smartstaffing.ru" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@smartstaffing.ru</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Навигация</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#benefits" className="block text-muted-foreground hover:text-primary transition-colors">
                Преимущества
              </a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                Цены
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Smart Staffing. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
