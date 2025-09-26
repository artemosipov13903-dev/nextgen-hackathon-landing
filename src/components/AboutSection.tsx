import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            О хакатоне
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
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
              <CardDescription className="text-gray-300">Студенты ВУЗов, школьники, молодые специалисты до 18 лет с любым уровнем подготовки</CardDescription>
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
              <CardDescription className="text-gray-300">48 часов интенсивной работы в командах до 2 человек.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;