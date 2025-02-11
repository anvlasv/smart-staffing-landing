
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
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-none font-montserrat font-medium border-2 border-primary">
              Аутстафинг персонала для вашего бизнеса
            </span>
            <h1 className="font-raleway text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Рабочий персонал на любой срок – 
              <span className="text-primary">быстро, надежно, выгодно</span>
            </h1>
            <p className="font-montserrat text-xl text-gray-300">
              Предоставляем квалифицированный персонал для любых задач: от грузчиков до официантов. Оформление за 2 часа, гарантия качества работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="group bg-primary hover:bg-primary/80 transition-colors font-montserrat rounded-none border-2 border-primary">
                    Заказать персонал
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-background border-primary">
                  <DialogHeader>
                    <DialogTitle className="font-raleway text-2xl text-white">Заказать персонал</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-montserrat font-medium leading-none text-white">
                        Ваше имя
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-2 bg-accent border-2 border-primary text-white font-montserrat rounded-none"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-montserrat font-medium leading-none text-white">
                        Телефон
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full p-2 bg-accent border-2 border-primary text-white font-montserrat rounded-none"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-montserrat font-medium leading-none text-white">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-2 bg-accent border-2 border-primary text-white font-montserrat rounded-none"
                        placeholder="Опишите ваши требования"
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="bg-primary hover:bg-primary/80 font-montserrat rounded-none border-2 border-primary">
                      Отправить заявку
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary/10 font-montserrat rounded-none"
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
              className="rounded-none border-4 border-primary shadow-2xl animate-fade-in hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </section>
  );
};
