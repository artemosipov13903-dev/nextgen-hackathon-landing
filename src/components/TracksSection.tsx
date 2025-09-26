import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TracksSection = () => {
  const tracks = [
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
  ];

  return (
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
          {tracks.map((track, index) => (
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
  );
};

export default TracksSection;