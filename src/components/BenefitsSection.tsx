
const benefits = [
  {
    iconUrl: "/lovable-uploads/07f73292-7b96-4f56-82f5-87805b1a8b7f.png",
    title: "Быстрое оформление",
    description: "Предоставляем персонал в течение 2-4 часов после заявки",
  },
  {
    iconUrl: "/lovable-uploads/d62ba102-e96c-4297-aa06-461162b4a94c.png",
    title: "Гарантия качества",
    description: "Все сотрудники проходят тщательный отбор и проверку",
  },
  {
    iconUrl: "/lovable-uploads/71bd238c-3ecc-49f3-a37a-b3760b2f1e53.png",
    title: "Квалифицированный персонал",
    description: "Опытные работники с необходимыми навыками",
  },
  {
    iconUrl: "/lovable-uploads/55149b19-8edd-40a8-88c7-7e8684e5236b.png",
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
            Мы обеспечиваем надежный аутстаффинг персонала с гарантией качества и
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 overflow-hidden">
                <img 
                  src={benefit.iconUrl} 
                  alt={benefit.title}
                  className="w-10 h-10 object-contain"
                />
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
