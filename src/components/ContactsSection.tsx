import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
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
                  <div className="text-white font-semibold">
</div>
                  <div className="text-gray-300">г.Можга, ул. Наговицына,76</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-pink-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">15-17 октября 2025</div>
                  <div className="text-gray-300">72 часа упорной работы</div>
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
                <p className="mb-8 text-[#000000]">
                  Регистрация закрывается 10 октября 2025! Не упусти шанс стать частью технологического будущего.
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
  );
};

export default ContactsSection;