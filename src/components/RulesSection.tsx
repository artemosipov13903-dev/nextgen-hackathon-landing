import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RulesSection = () => {
  const participantRequirements = [
    "Возраст: 16-25 лет",
    "Команды до 4 человек",
    "Можно участвовать индивидуально",
    "Регистрация до 10 октября 2025",
    "Базовые навыки программирования приветствуются"
  ];

  const evaluationCriteria = [
    "Инновационность решения (30%)",
    "Техническая реализация (25%)",
    "Бизнес-потенциал (20%)",
    "Качество презентации (15%)",
    "Пользовательский опыт (10%)"
  ];

  return (
    <section id="rules" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Правила и критерии
          </h2>
          <p className="text-xl text-gray-300"></p>
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
              {participantRequirements.map((rule, index) => (
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
              {evaluationCriteria.map((criterion, index) => (
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
  );
};

export default RulesSection;