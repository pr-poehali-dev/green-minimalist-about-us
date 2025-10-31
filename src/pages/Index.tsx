import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const timeline = [
    { year: "2010", event: "Основание компании" },
    { year: "2015", event: "Выход на международный рынок" },
    { year: "2018", event: "Запуск инновационной платформы" },
    { year: "2023", event: "Более 1000 успешных проектов" },
  ];

  const team = [
    { name: "Алексей Иванов", role: "Генеральный директор", icon: "UserCircle" },
    { name: "Мария Петрова", role: "Технический директор", icon: "Code" },
    { name: "Дмитрий Сидоров", role: "Директор по развитию", icon: "TrendingUp" },
    { name: "Елена Смирнова", role: "Руководитель отдела продаж", icon: "Users" },
  ];

  const stats = [
    { number: "1000+", label: "Довольных клиентов" },
    { number: "15+", label: "Лет на рынке" },
    { number: "50+", label: "Крупных партнеров" },
    { number: "24/7", label: "Поддержка клиентов" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Building2" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-primary">БитриксПро</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#history" className="text-gray-700 hover:text-primary transition-colors">История</a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Команда</a>
            <a href="#cases" className="text-gray-700 hover:text-primary transition-colors">Кейсы</a>
            <a href="#clients" className="text-gray-700 hover:text-primary transition-colors">Клиенты</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:inline-flex">
            Связаться с нами
          </Button>
        </nav>
      </header>

      <section id="about" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Sparkles" className="text-primary" size={18} />
            <span className="text-primary font-medium">О компании</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent">
            Мы создаем цифровое будущее
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Лидер в сфере внедрения 1С Битрикс. Более 15 лет помогаем бизнесу достигать новых высот через технологические решения
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            История компании
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
            {timeline.map((item, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 text-center md:text-right">
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
                      <div className="text-gray-700">{item.event}</div>
                    </Card>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg">
                    <Icon name="CheckCircle2" className="text-white" size={24} />
                  </div>
                  <div className="flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-white to-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Мы предлагаем комплексный подход и гарантируем результат
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Target" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Индивидуальный подход</h3>
              <p className="text-gray-600 leading-relaxed">
                Разрабатываем решения под ваши уникальные бизнес-процессы. Никаких шаблонов — только то, что нужно именно вам.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Rocket" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Быстрый запуск</h3>
              <p className="text-gray-600 leading-relaxed">
                Agile-методология позволяет запускать проекты в 2 раза быстрее. Первые результаты уже через 2 недели.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="HeadphonesIcon" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Поддержка 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                Круглосуточная техподдержка и консультации. Ваши вопросы решаются в течение 30 минут.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="GraduationCap" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Обучение команды</h3>
              <p className="text-gray-600 leading-relaxed">
                Проводим подробное обучение ваших сотрудников. Видеокурсы, инструкции и личные консультации.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="LineChart" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Рост бизнеса</h3>
              <p className="text-gray-600 leading-relaxed">
                Наши клиенты увеличивают продажи в среднем на 250% за первый год работы с новой системой.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="ShieldCheck" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Гарантия качества</h3>
              <p className="text-gray-600 leading-relaxed">
                Официальная гарантия на все работы. Бесплатное устранение любых недочетов в течение года.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Наша команда
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={member.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Нам доверяют
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            Среди наших клиентов крупнейшие компании России и СНГ
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-24 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary/5 transition-colors">
                <Icon name="Building" className="text-gray-400" size={40} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Icon name="Award" className="text-primary" size={20} />
              <span>Сертифицированный партнер 1С-Битрикс</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={20} />
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={20} />
              <span>Быстрое внедрение</span>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            Кейсы наших проектов
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Реальные истории успеха наших клиентов
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-green-700 flex items-center justify-center">
                <Icon name="ShoppingCart" className="text-white" size={64} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="TrendingUp" className="text-primary" size={20} />
                  <span className="text-primary font-semibold">Интернет-магазин</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Рост продаж на 340%</h3>
                <p className="text-gray-600 mb-4">
                  Запустили полнофункциональный интернет-магазин для федеральной сети. Интеграция с 1С, CRM и доставкой.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Срок реализации: 2 месяца</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span>15 000+ пользователей/день</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <Icon name="Briefcase" className="text-white" size={64} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Building2" className="text-primary" size={20} />
                  <span className="text-primary font-semibold">Корпоративный портал</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Автоматизация HR-процессов</h3>
                <p className="text-gray-600 mb-4">
                  Корпоративный портал для крупного холдинга с 500+ сотрудниками. Полная автоматизация документооборота.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Срок реализации: 3 месяца</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={16} className="text-primary" />
                    <span>Экономия 40% рабочего времени</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-primary flex items-center justify-center">
                <Icon name="Smartphone" className="text-white" size={64} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Zap" className="text-primary" size={20} />
                  <span className="text-primary font-semibold">Мобильное приложение</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Рост конверсии на 280%</h3>
                <p className="text-gray-600 mb-4">
                  Разработка мобильного приложения для сети ресторанов. Программа лояльности и онлайн-заказы.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Срок реализации: 4 месяца</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Download" size={16} className="text-primary" />
                    <span>50 000+ установок</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами в течение 24 часов
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 h-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-gray-900">Адрес</h3>
                  <p className="text-gray-600">Москва, ул. Примерная, д. 1</p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-gray-900">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-gray-900">Email</h3>
                  <p className="text-gray-600">info@bitrixpro.ru</p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-gray-900">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Building2" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold">БитриксПро</span>
          </div>
          <p className="text-gray-400 mb-6">
            Профессиональное внедрение 1С-Битрикс для вашего бизнеса
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">© 2024 БитриксПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;