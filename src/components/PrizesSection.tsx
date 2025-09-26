import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PrizesSection = () => {
  const prizes = [
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
  ];

  const partners = ["Яндекс", "Сбербанк", "VK", "Ozon", "Тинькофф", "Mail.ru"];

  return (
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
          {prizes.map((prize, index) => (
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
            {partners.map((partner, index) => (
              <div key={index} className="text-xl font-semibold text-gray-300 px-6 py-3 bg-white/5 rounded-lg">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;