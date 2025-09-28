import Icon from '@/components/ui/icon';

const ScheduleSection = () => {
  const scheduleData = [
    {
      day: "День 1 - 15 октября 2025",
      events: [
        { time: "10:00", title: "Регистрация и welcome-кофе", icon: "Coffee" },
        { time: "11:00", title: "Торжественное открытие", icon: "Star" },
        { time: "12:00", title: "Презентация треков и задач", icon: "Presentation" },
        { time: "14:00", title: "Формирование команд", icon: "Users" },
        { time: "15:00", title: "Начало работы над проектами", icon: "Code" }
      ]
    },
    {
      day: "День 2 - 16 октября 2025",
      events: [
        { time: "09:00", title: "Утренний бриф", icon: "Sun" },
        { time: "10:00", title: "Воркшопы от партнеров", icon: "BookOpen" },
        { time: "12:00", title: "Менторинг", icon: "MessageCircle" },
        { time: "18:00", title: "Промежуточные презентации", icon: "Monitor" },
        { time: "20:00", title: "Networking ужин", icon: "Users" }
      ]
    },
    {
      day: "День 3 - 17 октября 2025",
      events: [
        { time: "10:00", title: "Финальная подготовка проектов", icon: "Code" },
        { time: "14:00", title: "Питч-сессии команд", icon: "Presentation" },
        { time: "16:00", title: "Оценка жюри", icon: "Users" },
        { time: "18:00", title: "Церемония награждения", icon: "Trophy" },
        { time: "19:30", title: "Закрытие хакатона", icon: "Star" }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Расписание
          </h2>
          <p className="text-xl text-gray-300">Три дня упорной работы</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {scheduleData.map((day, dayIndex) => (
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
  );
};

export default ScheduleSection;