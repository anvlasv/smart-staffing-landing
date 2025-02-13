
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";
import InputMask from "react-input-mask";

const pricingPlans = [
  {
    title: "Грузчики",
    price: "от 2500",
    period: "за смену",
    features: [
      "Минимальный заказ - 4 часа",
      "Оплата по факту работы",
      "Собственный инвентарь",
      "Страховка",
    ],
  },
  {
    title: "Разнорабочие",
    price: "от 3000",
    period: "за смену",
    features: [
      "Опыт работы от 1 года",
      "Бригадир в подарок",
      "Замена в случае болезни",
      "Инструменты включены",
    ],
    featured: true,
  },
  {
    title: "Уборщики",
    price: "от 2000",
    period: "за смену",
    features: [
      "Профессиональные средства",
      "Форма включена",
      "Опыт от 2 лет",
      "Медкнижка",
    ],
  },
];

export const PricingSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    const mailtoLink = `mailto:barm.70@gmail.com?subject=${encodeURIComponent("Заявка персонала")}&body=${encodeURIComponent(
      `Имя: ${data.name}\nТелефон: ${data.phone}\nСообщение: ${data.message}`
    )}`;
    window.location.href = mailtoLink;

    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Прозрачные цены</h2>
          <p className="text-gray-600">
            Стоимость услуг зависит от типа персонала и срока аренды. Возможны индивидуальные условия для долгосрочных контрактов.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative animate-fade-in bg-white ${
                plan.featured
                  ? "border-primary shadow-lg scale-105"
                  : "border-gray-200"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.featured && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Популярное
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600"> ₽</span>
                  <span className="text-gray-500 text-sm">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className={`w-full ${
                      plan.featured ? "bg-primary" : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    Заказать
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Заказать {plan.title.toLowerCase()}</DialogTitle>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
