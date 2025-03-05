
import { Phone, Mail, MapPin, MessageCircle, Send, Shield, FileText, Star, DollarSign, HelpCircle, Contact, Home } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  
  return <footer className="bg-gradient-to-br from-primary/95 to-primary py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">РабочийКласс</h3>
            <p className="text-white/80 mb-6">
              Профессиональный аутстаффинг персонала в России. Быстро, надежно, выгодно.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <a href="tel:+79240424890" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Phone size={20} />
                  <span>+7 (924) 042-48-90</span>
                </a>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://t.me/tmnsklwork"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Наш Телеграм"
                      >
                        <Send size={20} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Напишите в Телеграм</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="https://wa.me/79227837198"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Наш WhatsApp"
                      >
                        <MessageCircle size={20} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Напишите в WA</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
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
              <a href="#services" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <FileText size={16} />
                <span>Услуги</span>
              </a>
              <a href="#benefits" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Star size={16} />
                <span>Преимущества</span>
              </a>
              <a href="#pricing" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <DollarSign size={16} />
                <span>Цены</span>
              </a>
              <a href="#faq" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <HelpCircle size={16} />
                <span>Частые вопросы</span>
              </a>
              <a href="#contact" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                <Contact size={16} />
                <span>Контакты</span>
              </a>
              
              <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
                <DialogTrigger asChild>
                  <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                    <Shield size={16} className="inline-block mr-1" />
                    <span>Политика конфиденциальности</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Политика конфиденциальности</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 text-sm">
                    <h2 className="text-lg font-bold mb-2">1. Общие положения</h2>
                    <p className="mb-4">
                      Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных физических лиц, пользующихся сервисами сайта РабочийКласс (далее — Сайт).
                    </p>
                    <p className="mb-4">
                      ИП А.Б. Васюков (ИНН 860319248616), далее — Оператор, действует в соответствии с Федеральным законом от 27.07.2006 N 152-ФЗ "О персональных данных".
                    </p>
                    
                    <h2 className="text-lg font-bold mb-2 mt-6">2. Сбор персональных данных</h2>
                    <p className="mb-4">
                      Оператор осуществляет сбор следующих персональных данных:
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                      <li>Имя и фамилия</li>
                      <li>Контактный телефон</li>
                      <li>Адрес электронной почты</li>
                      <li>Сообщения, отправленные через формы обратной связи</li>
                    </ul>
                    
                    <h2 className="text-lg font-bold mb-2 mt-6">3. Цели обработки персональных данных</h2>
                    <p className="mb-4">
                      Персональные данные обрабатываются в следующих целях:
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                      <li>Оказание услуг аутстаффинга</li>
                      <li>Информирование о новых услугах и специальных предложениях</li>
                      <li>Улучшение качества обслуживания и повышение удобства использования Сайта</li>
                      <li>Проведение статистических и маркетинговых исследований</li>
                    </ul>
                    
                    <h2 className="text-lg font-bold mb-2 mt-6">4. Обработка персональных данных</h2>
                    <p className="mb-4">
                      В отношении персональных данных пользователя сохраняется их конфиденциальность. Оператор использует безопасные протоколы передачи данных.
                    </p>
                    <p className="mb-4">
                      Срок хранения персональных данных определяется достижением целей их обработки или требованиями законодательства Российской Федерации.
                    </p>
                    
                    <h2 className="text-lg font-bold mb-2 mt-6">5. Права пользователя</h2>
                    <p className="mb-4">
                      Пользователь имеет право:
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                      <li>Получать информацию, касающуюся обработки его персональных данных</li>
                      <li>Требовать уточнения своих персональных данных, их блокирования или уничтожения</li>
                      <li>Отозвать согласие на обработку персональных данных</li>
                    </ul>
                    
                    <h2 className="text-lg font-bold mb-2 mt-6">6. Заключительные положения</h2>
                    <p className="mb-4">
                      Настоящая Политика может быть изменена без предварительного уведомления пользователя. Новая редакция Политики вступает в силу с момента ее размещения на Сайте.
                    </p>
                    <p className="mb-4">
                      Используя Сайт, пользователь подтверждает согласие с положениями настоящей Политики конфиденциальности.
                    </p>
                    
                    <p className="mt-6 text-sm text-gray-500">
                      Дата последнего обновления: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10 mb-6">
          <p className="text-white/90 font-bold text-sm">
            ИП А.Б. Васюков ИНН 860319248616
          </p>
        </div>
        
        <div className="mt-6 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-white/60">
            <p>© {new Date().getFullYear()} РабочийКласс. Все права защищены.</p>
            <p className="mt-2 md:mt-0 text-sm">
              <a href="https://t.me/person_grata" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Дизайн и разработка сайта</a>
              {" - КБ "}
              <a href="https://t.me/person_grata" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">"SV-Group"</a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
