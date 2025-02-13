
import { Users, Package, Hammer, Brush, BedDouble } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Users,
    title: "Разнорабочие",
    description: "Универсальные работники для различных задач",
    image: "/lovable-uploads/578b64df-ced1-41e5-bdaa-c1c5f575a795.png"
  },
  {
    icon: Package,
    title: "Грузчики",
    description: "Погрузка, разгрузка и перемещение грузов",
    image: "/lovable-uploads/fc1d724d-1c78-4c3c-8b18-573ae10c78c3.png"
  },
  {
    icon: Hammer,
    title: "Упаковщики",
    description: "Сортировка и упаковка товаров на складе",
    image: "/lovable-uploads/d76cf390-ff03-46e1-bb44-be28bb6f5583.png"
  },
];

const additionalServices = [
  {
    icon: Brush,
    title: "Уборщики",
    description: "Профессиональная уборка помещений",
    image: "/lovable-uploads/ece4db20-5f19-4e18-9893-9176bca529e1.png"
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
