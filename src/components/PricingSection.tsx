
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

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
  return (
    <section className="py-20 bg-accent" id="pricing">
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
              className={`p-8 relative animate-fade-in ${
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
              <Button
                className={`w-full ${
                  plan.featured ? "" : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Заказать
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
