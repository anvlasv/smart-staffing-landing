
import { Users, Package, Hammer, Brush, BedDouble } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Users,
    title: "Разнорабочие",
    description: "Универсальные работники для различных задач",
    image: "/lovable-uploads/d62ba102-e96c-4297-aa06-461162b4a94c.png"
  },
  {
    icon: Package,
    title: "Грузчики",
    description: "Погрузка, разгрузка и перемещение грузов",
    image: "/lovable-uploads/07f73292-7b96-4f56-82f5-87805b1a8b7f.png"
  },
  {
    icon: Hammer,
    title: "Упаковщики",
    description: "Сортировка и упаковка товаров на складе",
    image: "/lovable-uploads/71bd238c-3ecc-49f3-a37a-b3760b2f1e53.png"
  },
];

const additionalServices = [
  {
    icon: Brush,
    title: "Уборщики",
    description: "Профессиональная уборка помещений",
    image: "/lovable-uploads/55149b19-8edd-40a8-88c7-7e8684e5236b.png"
  },
  {
    icon: BedDouble,
    title: "Горничные",
    description: "Уборка и обслуживание номеров",
    image: "/lovable-uploads/5a436532-fdab-4bf8-b9cb-4332b33fc8d1.png"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {additionalServices.map((service, index) => (
            <Card key={index} className="overflow-hidden group animate-fade-in" style={{ animationDelay: `${(index + 3) * 100}ms` }}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
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
