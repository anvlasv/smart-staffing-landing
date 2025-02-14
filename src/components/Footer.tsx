
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/95 to-primary py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">РабочийКласс</h3>
            <p className="text-white/80">
              Профессиональный аутстаффинг персонала в России. Быстро, надежно, выгодно.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79240424890" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Phone size={20} />
                <span>+7 (924) 042-48-90</span>
              </a>
              <a href="mailto:barm.70@gmail.com" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
                <span>barm.70@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin size={20} />
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
        
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-white/70">
          <p>© {new Date().getFullYear()} РабочийКласс. Все права защищены.</p>
          <p className="text-sm">
            Дизайн <a href="https://t.me/person_grata" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">SV-Group</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
