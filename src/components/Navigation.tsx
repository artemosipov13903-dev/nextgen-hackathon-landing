import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  return (
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
                onClick={() => onSectionClick(item.id)}
                className={`text-sm transition-colors hover:text-purple-400 ${
                  activeSection === item.id ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Link 
              to="/presentation"
              className="text-sm transition-colors hover:text-purple-400 text-gray-300"
            >
              Презентация
            </Link>
          </div>
          <Button 
            onClick={() => onSectionClick('contacts')} 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Регистрация
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;