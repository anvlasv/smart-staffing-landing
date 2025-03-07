import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";
import InputMask from "react-input-mask";
import { useState } from "react";

export const HeroSection = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('form', 'hero');
    
    // Send data to send-mail.php
    fetch('send-mail.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        toast({
          title: "Заявка отправлена",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setIsOpen(false);
        e.currentTarget.reset();
      } else {
        toast({
          title: "Ошибка отправки",
          description: "Пожалуйста, попробуйте еще раз",
          variant: "destructive"
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте еще раз",
        variant: "destructive"
      });
    });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg font-montserrat font-medium">
              Профессиональный аутстаффинг персонала в России
            </span>
            <h1 className="font-raleway text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Предоставление персонала для вашего бизнеса – 
              <span className="text-primary">быстро и надежно</span>
            </h1>
            <p className="font-montserrat text-xl text-gray-600">
              Оказываем услуги по предоставлению квалифицированного персонала любой специализации: грузчики, разнорабочие, упаковщики. Оформление договора за 2 часа, гарантия качества работы, доступные цены.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 transition-colors font-montserrat">
                    Заказать персонал сейчас
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Заказать персонал</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">
                        Ваше имя
                      </label>
                      <input
                        name="name"
                        type="text"
                        className="w-full p-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">
                        Телефон
                      </label>
                      <InputMask
                        mask="+7 (999) 999-99-99"
                        name="phone"
                        className="w-full p-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">
                        Опишите ваши требования
                      </label>
                      <textarea
                        name="message"
                        className="w-full p-2 border rounded-lg"
                        rows={3}
                        required
                      />
                    </div>
                    <Button type="submit">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToPricing}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Узнать стоимость услуг
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/c5308163-489d-43e3-bb57-5157af98c863.png"
              alt="Профессиональные услуги аутстаффинга персонала"
              className="rounded-lg shadow-2xl animate-fade-in hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
