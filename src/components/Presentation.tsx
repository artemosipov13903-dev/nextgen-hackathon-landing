import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Trophy, Users, Target, Award, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
  background?: string;
}

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Digital Future Hackathon 2024",
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Digital Future
            </h1>
            <h2 className="text-4xl font-semibold text-primary">Hackathon 2024</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Создаем будущее цифровых технологий вместе
            </p>
          </div>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-primary" />
              <span>15-17 ноября 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-primary" />
              <span>IT Park Kazan</span>
            </div>
          </div>
        </div>
      ),
      background: "bg-gradient-to-br from-background via-primary/5 to-purple-600/10"
    },
    {
      id: 2,
      title: "О хакатоне",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center">О хакатоне</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Цель</h3>
                  <p className="text-muted-foreground">
                    Создание инновационных решений для цифровой трансформации бизнеса
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Участники</h3>
                  <p className="text-muted-foreground">
                    Разработчики, дизайнеры, аналитики и предприниматели
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Формат</h3>
                  <p className="text-muted-foreground">
                    48 часов интенсивной работы в командах до 4 человек
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Trophy className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Призы</h3>
                  <p className="text-muted-foreground">
                    Денежные призы, менторство и возможности трудоустройства
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      background: "bg-gradient-to-br from-background to-primary/5"
    },
    {
      id: 3,
      title: "Направления",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center">Направления хакатона</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3 text-primary">AI & Machine Learning</h3>
              <p className="text-muted-foreground text-sm">
                Разработка решений с использованием искусственного интеллекта и машинного обучения
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3 text-primary">Web3 & Blockchain</h3>
              <p className="text-muted-foreground text-sm">
                Создание децентрализованных приложений и блокчейн-решений
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3 text-primary">IoT & Hardware</h3>
              <p className="text-muted-foreground text-sm">
                Разработка интернета вещей и аппаратных решений
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3 text-primary">Fintech</h3>
              <p className="text-muted-foreground text-sm">
                Финансовые технологии и платежные решения
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3 text-primary">Health Tech</h3>
              <p className="text-muted-foreground text-sm">
                Цифровые решения для здравоохранения и медицины
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3 text-primary">EdTech</h3>
              <p className="text-muted-foreground text-sm">
                Образовательные технологии и платформы обучения
              </p>
            </div>
          </div>
        </div>
      ),
      background: "bg-gradient-to-br from-background to-secondary/10"
    },
    {
      id: 4,
      title: "Расписание",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center">Расписание мероприятия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">День 1 - 15 ноября</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">09:00-10:00</span>
                  <span>Регистрация</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">10:00-11:00</span>
                  <span>Торжественное открытие</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">11:00-12:00</span>
                  <span>Формирование команд</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">12:00-00:00</span>
                  <span>Разработка проектов</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">День 2 - 16 ноября</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">00:00-09:00</span>
                  <span>Разработка проектов</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">09:00-10:00</span>
                  <span>Завтрак</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">10:00-18:00</span>
                  <span>Разработка проектов</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">18:00-00:00</span>
                  <span>Финальная доработка</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">День 3 - 17 ноября</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">09:00-10:00</span>
                  <span>Завтрак</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">10:00-14:00</span>
                  <span>Презентации команд</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">14:00-16:00</span>
                  <span>Оценка жюри</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">16:00-17:00</span>
                  <span>Награждение</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      background: "bg-gradient-to-br from-background to-accent/10"
    },
    {
      id: 5,
      title: "Призы",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center">Призы и награды</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">1 место</h3>
              <p className="text-3xl font-bold text-primary">500 000 ₽</p>
              <p className="text-muted-foreground">+ менторство + инвестиции</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-b from-gray-400 to-gray-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">2 место</h3>
              <p className="text-3xl font-bold text-primary">300 000 ₽</p>
              <p className="text-muted-foreground">+ менторство</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-b from-amber-600 to-amber-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">3 место</h3>
              <p className="text-3xl font-bold text-primary">200 000 ₽</p>
              <p className="text-muted-foreground">+ менторство</p>
            </div>
          </div>
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Специальные призы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-card p-4 rounded-lg border">
                <p className="font-medium">Лучший дизайн</p>
                <p className="text-primary">50 000 ₽</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <p className="font-medium">Лучшая техническая реализация</p>
                <p className="text-primary">50 000 ₽</p>
              </div>
            </div>
          </div>
        </div>
      ),
      background: "bg-gradient-to-br from-background via-yellow-500/5 to-primary/10"
    },
    {
      id: 6,
      title: "Контакты",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center">Контакты и регистрация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>info@digitalfuture.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>IT Park Kazan, ул. Петербургская, 52</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Регистрация</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Количество мест ограничено. Регистрируйтесь как можно скорее!
                </p>
                <Button size="lg" className="w-full text-lg">
                  Зарегистрироваться сейчас
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Спасибо за внимание!</h3>
            <p className="text-lg text-muted-foreground">
              Увидимся на Digital Future Hackathon 2024
            </p>
          </div>
        </div>
      ),
      background: "bg-gradient-to-br from-background to-primary/5"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      } else if (e.key === 'F11') {
        e.preventDefault();
        setIsFullscreen(!isFullscreen);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50' : 'relative'} ${slides[currentSlide].background || 'bg-background'}`}>
      <div className="h-screen flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-6xl">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-background/90 backdrop-blur-sm border-t p-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Назад</span>
            </Button>

            {/* Slide Indicators */}
            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2"
            >
              <span>Далее</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Slide Counter and Fullscreen */}
          <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
            <span>
              Слайд {currentSlide + 1} из {slides.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? 'Выйти из полноэкранного режима' : 'Полноэкранный режим'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;