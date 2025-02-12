
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/95 to-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ГрузВзяли</h3>
            <p className="text-white/80">
              Профессиональный аутстаффинг персонала в России. Быстро, надежно, выгодно.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79240424890" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>+7 (924) 042-48-90</span>
              </a>
              <a href="mailto:info@gruzivzali.ru" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@gruzivzali.ru</span>
              </a>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-5 w-5" />
                <span>г. Тюмень, ул Республики 207, оф. 502</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Навигация</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-white/80 hover:text-white transition-colors">
                Услуги
              </a>
              <a href="#benefits" className="block text-white/80 hover:text-white transition-colors">
                Преимущества
              </a>
              <a href="#pricing" className="block text-white/80 hover:text-white transition-colors">
                Цены
              </a>
              <a href="#contact" className="block text-white/80 hover:text-white transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/70">
          <p>© {new Date().getFullYear()} ГрузВзяли. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
