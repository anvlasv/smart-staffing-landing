
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "Как быстро можно оформить заявку на персонал?",
    answer: "Оформление договора занимает всего 2 часа. После подписания документов персонал может приступить к работе в тот же день."
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы гарантируем качество работы предоставляемого персонала. В случае болезни или неявки работника, мы оперативно осуществляем замену."
  },
  {
    question: "На какой минимальный срок можно нанять персонал?",
    answer: "Минимальный срок найма составляет 3 часа. Вы оплачиваете только фактически отработанное время."
  },
  {
    question: "Какие виды персонала вы предоставляете?",
    answer: "Мы предоставляем грузчиков, разнорабочих, упаковщиков, уборщиков и горничных. Все работники имеют опыт работы и необходимые документы."
  },
  {
    question: "Работаете ли вы с юридическими лицами?",
    answer: "Да, мы работаем как с юридическими, так и с физическими лицами. Предоставляем полный пакет документов и заключаем официальный договор."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-gray-600">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                <AccordionTrigger className="px-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
