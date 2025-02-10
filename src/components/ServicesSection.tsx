
import { Users, Package, Hammer, Shield, UtensilsCrossed, BedDouble } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Users,
    title: "Разнорабочие",
    description: "Универсальные работники для различных задач",
  },
  {
    icon: Package,
    title: "Грузчики",
    description: "Погрузка, разгрузка и перемещение грузов",
  },
  {
    icon: Hammer,
    title: "Упаковщики",
    description: "Сортировка и упаковка товаров на складе",
  },
  {
    icon: Shield,
    title: "Охранники",
    description: "Обеспечение безопасности объектов",
  },
  {
    icon: UtensilsCrossed,
    title: "Официанты",
    description: "Обслуживание мероприятий любого масштаба",
  },
  {
    icon: BedDouble,
    title: "Горничные",
    description: "Уборка и обслуживание номеров",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600">
            Предоставляем персонал для различных сфер бизнеса. Работники для склада, уборщики для офиса и другие специалисты доступны в аренду на любой срок.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-4">
                <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
