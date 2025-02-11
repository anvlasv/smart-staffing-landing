
import { Users, Package, Hammer, Brush, BedDouble } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Users,
    title: "Разнорабочие",
    description: "Универсальные работники для различных задач",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    icon: Package,
    title: "Грузчики",
    description: "Погрузка, разгрузка и перемещение грузов",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    icon: Hammer,
    title: "Упаковщики",
    description: "Сортировка и упаковка товаров на складе",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    icon: Brush,
    title: "Уборщики",
    description: "Профессиональная уборка помещений",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    icon: BedDouble,
    title: "Горничные",
    description: "Уборка и обслуживание номеров",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
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
            <Card key={index} className="overflow-hidden group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
