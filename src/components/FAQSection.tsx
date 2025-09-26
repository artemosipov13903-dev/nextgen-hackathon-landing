import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqData = [
    {
      question: "Кто может участвовать в хакатоне?",
      answer: "Участвовать могут студенты вузов, школьники 9-11 классов и молодые специалисты до 25 лет. Опыт программирования приветствуется, но не обязателен."
    },
    {
      question: "Нужно ли платить за участие?",
      answer: "Участие в хакатоне полностью бесплатное. Мы обеспечиваем питание, место для работы и все необходимые материалы."
    },
    {
      question: "Можно ли участвовать удаленно?",
      answer: "Хакатон проходит в очном формате в Москве. Удаленное участие не предусмотрено для обеспечения максимального качества менторинга и нетворкинга."
    },
    {
      question: "Что нужно принести с собой?",
      answer: "Ноутбук, зарядное устройство, удобную одежду и энтузиазм! Еду, напитки и все остальное мы обеспечим."
    },
    {
      question: "Как формируются команды?",
      answer: "Вы можете прийти с готовой командой до 4 человек или найти единомышленников на месте во время networking-сессии."
    },
    {
      question: "Какие технологии можно использовать?",
      answer: "Любые! Ограничений по технологиям нет. Главное — создать работающий прототип и хорошо его презентовать."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 rounded-lg border border-white/10 px-6"
              >
                <AccordionTrigger className="text-white text-left hover:text-purple-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;