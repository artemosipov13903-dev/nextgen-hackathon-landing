import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  return (
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
            ХАКАТОН 2025
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">Создай будущее технологий за 72 часа. Присоединяйся к крупнейшему хакатону для молодых разработчиков!</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-lg text-purple-300">
              <Icon name="Calendar" size={24} />
              <span>15-17 октября 2025</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-pink-300">
              <Icon name="MapPin" size={24} />
              <span>г.Можга, ул. Наговицына, 76</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-green-300">
              <Icon name="Users" size={24} />
              <span></span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl rounded-full hover-scale"
            onClick={() => onScrollToSection('contacts')}
          >
            Зарегистрироваться
            <Icon name="ArrowRight" size={24} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;