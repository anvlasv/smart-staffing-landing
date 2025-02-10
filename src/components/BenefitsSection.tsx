
import { Clock, Shield, BadgeCheck, PiggyBank } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Быстрое оформление",
    description: "Предоставляем персонал в течение 2-4 часов после заявки",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Все сотрудники проходят тщательный отбор и проверку",
  },
  {
    icon: BadgeCheck,
    title: "Квалифицированный персонал",
    description: "Опытные работники с необходимыми навыками",
  },
  {
    icon: PiggyBank,
    title: "Выгодные условия",
    description: "Прозрачное ценообразование без скрытых платежей",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600">
            Мы обеспечиваем надежный аутстафинг персонала с гарантией качества и
            профессионализма
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
