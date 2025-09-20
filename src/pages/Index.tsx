import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'schedule', 'tracks', 'rules', 'prizes', 'faq', 'contacts'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NextGen
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'about', label: 'О хакатоне' },
                { id: 'schedule', label: 'Расписание' },
                { id: 'tracks', label: 'Направления' },
                { id: 'prizes', label: 'Призы' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-purple-400 ${
                    activeSection === item.id ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contacts')} 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Регистрация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                NEXTGEN
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              ХАКАТОН 2024
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Создай будущее технологий за 48 часов. Присоединяйся к крупнейшему хакатону для молодых разработчиков!
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-lg text-purple-300">
                <Icon name="Calendar" size={24} />
                <span>15-17 декабря 2024</span>
              </div>
              <div className="flex items-center gap-2 text-lg text-pink-300">
                <Icon name="MapPin" size={24} />
                <span>Москва, Технопарк</span>
              </div>
              <div className="flex items-center gap-2 text-lg text-green-300">
                <Icon name="Users" size={24} />
                <span>500+ участников</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-full hover-scale"
              onClick={() => scrollToSection('contacts')}
            >
              Зарегистрироваться
              <Icon name="ArrowRight" size={24} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              О хакатоне
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              NextGen — это площадка для молодых талантов, где идеи превращаются в реальные проекты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Цель</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Объединить талантливых студентов и школьников для создания инновационных решений в сфере технологий
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Аудитория</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Студенты ВУЗов, школьники 9-11 классов, молодые специалисты до 25 лет с любым уровнем подготовки
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white">Формат</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  48 часов интенсивной работы в командах до 4 человек. Менторинг, воркшопы и нетворкинг включены
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Расписание
            </h2>
            <p className="text-xl text-gray-300">
              Три дня насыщенной программы
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  day: "День 1 - 15 декабря",
                  events: [
                    { time: "10:00", title: "Регистрация и welcome-кофе", icon: "Coffee" },
                    { time: "11:00", title: "Торжественное открытие", icon: "Star" },
                    { time: "12:00", title: "Презентация треков и задач", icon: "Presentation" },
                    { time: "14:00", title: "Формирование команд", icon: "Users" },
                    { time: "15:00", title: "Начало работы над проектами", icon: "Code" }
                  ]
                },
                {
                  day: "День 2 - 16 декабря",
                  events: [
                    { time: "09:00", title: "Утренний бриф", icon: "Sun" },
                    { time: "10:00", title: "Воркшопы от партнеров", icon: "BookOpen" },
                    { time: "12:00", title: "Менторинг", icon: "MessageCircle" },
                    { time: "18:00", title: "Промежуточные презентации", icon: "Monitor" },
                    { time: "20:00", title: "Networking ужин", icon: "Users" }
                  ]
                },
                {
                  day: "День 3 - 17 декабря",
                  events: [
                    { time: "09:00", title: "Финальная доработка", icon: "Settings" },
                    { time: "12:00", title: "Подготовка презентаций", icon: "FileText" },
                    { time: "14:00", title: "Финальные презентации", icon: "Trophy" },
                    { time: "16:00", title: "Оценка жюри", icon: "Award" },
                    { time: "17:00", title: "Награждение победителей", icon: "Medal" }
                  ]
                }
              ].map((day, dayIndex) => (
                <div key={dayIndex} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-2xl font-bold text-purple-400 mb-6">{day.day}</h3>
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Icon name={event.icon as any} size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-purple-300 font-semibold">{event.time}</div>
                          <div className="text-white">{event.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Направления
            </h2>
            <p className="text-xl text-gray-300">
              Выбери свой трек и создай проект мечты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                description: "Разработка интеллектуальных систем, нейросетей и алгоритмов машинного обучения",
                icon: "Brain",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Web & Mobile",
                description: "Создание современных веб-приложений и мобильных сервисов",
                icon: "Smartphone",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "GameDev",
                description: "Разработка компьютерных игр и интерактивных развлечений",
                icon: "Gamepad2",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Blockchain & Crypto",
                description: "DeFi, NFT, криптовалюты и децентрализованные приложения",
                icon: "Link",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "IoT & Hardware",
                description: "Интернет вещей, умные устройства и аппаратные решения",
                icon: "Cpu",
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "FinTech",
                description: "Финансовые технологии, платежные системы и банковские решения",
                icon: "CreditCard",
                color: "from-teal-500 to-green-500"
              }
            ].map((track, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover-scale group">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-r ${track.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={track.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-white">{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {track.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Правила и критерии
            </h2>
            <p className="text-xl text-gray-300">
              Честная игра и объективная оценка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Users" size={24} className="text-purple-400" />
                  Требования к участникам
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Возраст: 16-25 лет",
                  "Команды до 4 человек",
                  "Можно участвовать индивидуально",
                  "Регистрация до 10 декабря",
                  "Базовые навыки программирования приветствуются"
                ].map((rule, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>{rule}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Award" size={24} className="text-pink-400" />
                  Критерии оценки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Инновационность решения (30%)",
                  "Техническая реализация (25%)",
                  "Бизнес-потенциал (20%)",
                  "Качество презентации (15%)",
                  "Пользовательский опыт (10%)"
                ].map((criterion, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300">
                    <Icon name="Star" size={16} className="text-yellow-400" />
                    <span>{criterion}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
              <Icon name="FileText" size={16} className="mr-2" />
              Полное положение хакатона
            </Button>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Призы и партнеры
            </h2>
            <p className="text-xl text-gray-300">
              Более 2 млн рублей призового фонда
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                place: "1 место",
                prize: "500,000 ₽",
                description: "Денежный приз + менторинг + акселерация проекта",
                color: "from-yellow-400 to-orange-500"
              },
              {
                place: "2 место",
                prize: "300,000 ₽",
                description: "Денежный приз + курсы от партнеров + стажировка",
                color: "from-gray-400 to-gray-600"
              },
              {
                place: "3 место",
                prize: "200,000 ₽",
                description: "Денежный приз + сертификаты + мерч",
                color: "from-orange-400 to-red-500"
              }
            ].map((prize, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${prize.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name="Trophy" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">{prize.place}</CardTitle>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                    {prize.prize}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {prize.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Партнеры хакатона</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Яндекс", "Сбербанк", "VK", "Ozon", "Тинькофф", "Mail.ru"].map((partner, index) => (
                <div key={index} className="text-xl font-semibold text-gray-300 px-6 py-3 bg-white/5 rounded-lg">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
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
              ].map((faq, index) => (
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

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Контакты и регистрация
            </h2>
            <p className="text-xl text-gray-300">
              Готов изменить мир? Присоединяйся к нам!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-6">Площадка проведения</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-purple-400 mt-1" />
                  <div>
                    <div className="text-white font-semibold">Технопарк «Сколково»</div>
                    <div className="text-gray-300">Москва, Большой бульвар, 42</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-pink-400 mt-1" />
                  <div>
                    <div className="text-white font-semibold">15-17 декабря 2024</div>
                    <div className="text-gray-300">48 часов непрерывного творчества</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-green-400 mt-1" />
                  <div>
                    <div className="text-white font-semibold">hackathon@nextgen.ru</div>
                    <div className="text-gray-300">Вопросы по участию</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-blue-400 mt-1" />
                  <div>
                    <div className="text-white font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-gray-300">Горячая линия</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-400/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-6">Зарегистрироваться</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <p className="text-gray-300 mb-8">
                    Регистрация закрывается 10 декабря! Не упусти шанс стать частью технологического будущего.
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-xl rounded-full hover-scale"
                  >
                    Подать заявку
                    <Icon name="ExternalLink" size={24} className="ml-2" />
                  </Button>
                  
                  <div className="flex justify-center gap-4 mt-6">
                    <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Telegram
                    </Button>
                    <Button variant="outline" size="sm" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white">
                      <Icon name="Instagram" size={16} className="mr-2" />
                      Instagram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            NextGen Hackathon 2024
          </div>
          <p className="text-gray-400">
            Создавая будущее вместе • © 2024 NextGen Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;