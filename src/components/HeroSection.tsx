
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#E5DEFF] to-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm font-medium">
              Аутстафинг персонала для вашего бизнеса
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Рабочий персонал на любой срок – 
              <span className="text-[#8B5CF6]">быстро, надежно, выгодно</span>
            </h1>
            <p className="text-xl text-gray-600">
              Предоставляем квалифицированный персонал для любых задач: от грузчиков до официантов. Оформление за 2 часа, гарантия качества работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="group bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors">
                    Заказать персонал
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Заказать персонал</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none">
                        Ваше имя
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium leading-none">
                        Телефон
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full p-2 border rounded-md"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-2 border rounded-md"
                        placeholder="Опишите ваши требования"
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="bg-[#8B5CF6] hover:bg-[#7C3AED]">
                      Отправить заявку
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10"
                onClick={scrollToPricing}
              >
                Узнать стоимость
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Профессиональная команда"
              className="rounded-2xl shadow-2xl animate-fade-in hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
};

