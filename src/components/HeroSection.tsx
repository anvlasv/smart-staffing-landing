
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-accent to-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Аутстафинг персонала для вашего бизнеса
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Рабочий персонал на любой срок – 
              <span className="text-primary">быстро, надежно, выгодно</span>
            </h1>
            <p className="text-xl text-gray-600">
              Предоставляем квалифицированный персонал для любых задач: от грузчиков до официантов. Оформление за 2 часа, гарантия качества работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Заказать персонал
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Узнать стоимость
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Профессиональная команда"
              className="rounded-2xl shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
};
