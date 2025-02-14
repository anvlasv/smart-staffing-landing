
import { Users, Package, Hammer, Brush, BedDouble } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Users,
    title: "Разнорабочие",
    description: "Универсальные работники для различных задач",
    image: "/lovable-uploads/c31ad0a9-154d-4a7a-8e83-c52328aaed4c.png",
    bgColor: "bg-[#FFE4E1]",
    iconBg: "bg-[#FFA07A]/20"
  },
  {
    icon: Package,
    title: "Грузчики",
    description: "Погрузка, разгрузка и перемещение грузов",
    image: "/lovable-uploads/2a85b0c1-572f-4e71-ba96-df42b78f17ec.png",
    bgColor: "bg-[#E6F3FF]",
    iconBg: "bg-[#4169E1]/20"
  },
  {
    icon: Hammer,
    title: "Упаковщики",
    description: "Сортировка и упаковка товаров на складе",
    image: "/lovable-uploads/0dd8234d-f4a5-492d-80eb-c4c1281c5478.png",
    bgColor: "bg-[#F0FFF0]",
    iconBg: "bg-[#32CD32]/20"
  },
];

const additionalServices = [
  {
    icon: Brush,
    title: "Уборщики",
    description: "Профессиональная уборка помещений",
    image: "/lovable-uploads/5409a98a-207d-4bf6-b374-34865742e464.png",
    bgColor: "bg-[#E6E6FA]",
    iconBg: "bg-[#9370DB]/20"
  },
  {
    icon: BedDouble,
    title: "Горничные",
    description: "Уборка и обслуживание номеров",
    image: "/lovable-uploads/ddf1c929-df4d-46d5-922f-18e51ae694dd.png",
    bgColor: "bg-[#FFE4E1]",
    iconBg: "bg-[#FFA07A]/20"
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-gray-600">
            Предоставляем персонал для различных сфер бизнеса. Работники для склада, уборщики для офиса и другие специалисты доступны в аренду на любой срок.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden group animate-fade-in ${service.bgColor} bg-opacity-30`} 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 z-10" />
                <img
                  src={service.image}
                  alt={`${service.title} - услуги аутстаффинга в Тюмени`}
                  className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className={`mb-4 ${service.iconBg} w-14 h-14 rounded-full flex items-center justify-center`}>
                  <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {additionalServices.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden group animate-fade-in ${service.bgColor} bg-opacity-30`} 
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 z-10" />
                <img
                  src={service.image}
                  alt={`${service.title} - профессиональный персонал в Тюмени`}
                  className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className={`mb-4 ${service.iconBg} w-14 h-14 rounded-full flex items-center justify-center`}>
                  <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
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
