
const benefits = [
  {
    iconUrl: "/lovable-uploads/d76cf390-ff03-46e1-bb44-be28bb6f5583.png",
    title: "Быстрое оформление",
    description: "Предоставляем персонал в течение 2-4 часов после заявки",
    bgColor: "bg-[#FFE4E1]",
    iconBg: "bg-[#FFA07A]/20"
  },
  {
    iconUrl: "/lovable-uploads/578b64df-ced1-41e5-bdaa-c1c5f575a795.png",
    title: "Гарантия качества",
    description: "Все сотрудники проходят тщательный отбор и проверку",
    bgColor: "bg-[#E6F3FF]",
    iconBg: "bg-[#4169E1]/20"
  },
  {
    iconUrl: "/lovable-uploads/fc1d724d-1c78-4c3c-8b18-573ae10c78c3.png",
    title: "Квалифицированный персонал",
    description: "Опытные работники с необходимыми навыками",
    bgColor: "bg-[#F0FFF0]",
    iconBg: "bg-[#32CD32]/20"
  },
  {
    iconUrl: "/lovable-uploads/ece4db20-5f19-4e18-9893-9176bca529e1.png",
    title: "Выгодные условия",
    description: "Прозрачное ценообразование без скрытых платежей",
    bgColor: "bg-[#E6E6FA]",
    iconBg: "bg-[#9370DB]/20"
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <p className="text-gray-600">
            Мы обеспечиваем надежный аутстаффинг персонала с гарантией качества и
            профессионализма
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 animate-fade-in transition-all duration-300 hover:scale-105 ${benefit.bgColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${benefit.iconBg} mb-6 overflow-hidden`}>
                  <img 
                    src={benefit.iconUrl} 
                    alt={benefit.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
