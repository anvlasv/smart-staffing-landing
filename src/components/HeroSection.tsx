
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-accent to-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Аутстафинг персонала для вашего бизнеса
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Рабочий персонал на любой срок – 
            <span className="text-primary">быстро, надежно, выгодно</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предоставляем квалифицированный персонал для любых задач: от грузчиков до официантов. Оформление за 2 часа, гарантия качества работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Заказать персонал
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Узнать стоимость
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
};
