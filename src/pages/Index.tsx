import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Scroll } from "lucide-react";
import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";

// Мок-данные для демонстрации
const featuredBooks = [
  {
    id: "1",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    price: 650,
    coverImage: "/placeholder.svg",
    isNew: false,
  },
  {
    id: "2",
    title: "Тонкое искусство пофигизма",
    author: "Марк Мэнсон",
    price: 750,
    oldPrice: 990,
    coverImage: "/placeholder.svg",
    isNew: false,
  },
  {
    id: "3",
    title: "Происхождение всего",
    author: "Нил Деграсс Тайсон",
    price: 850,
    coverImage: "/placeholder.svg",
    isNew: true,
  },
];

const newBooks = [
  {
    id: "4",
    title: "Атомные привычки",
    author: "Джеймс Клир",
    price: 790,
    coverImage: "/placeholder.svg",
    isNew: true,
  },
  {
    id: "5",
    title: "Думай медленно, решай быстро",
    author: "Даниэль Канеман",
    price: 890,
    coverImage: "/placeholder.svg",
    isNew: true,
  },
  {
    id: "6",
    title: "Тайная опора",
    author: "Людмила Петрановская",
    price: 690,
    coverImage: "/placeholder.svg",
    isNew: true,
  },
];

const courses = [
  {
    id: "1",
    title: "Введение в программирование на Python",
    description: "Базовый курс для начинающих программистов без опыта",
    duration: "3 месяца",
    students: 1205,
    price: 12500,
    coverImage: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Искусство ведения переговоров",
    description: "Научитесь убедительно выражать свою позицию и достигать нужных результатов",
    duration: "1 месяц",
    students: 832,
    price: 8900,
    oldPrice: 11900,
    coverImage: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Основы финансовой грамотности",
    description: "Всё о планировании бюджета, инвестициях и личных финансах",
    duration: "2 месяца",
    students: 1567,
    price: 9900,
    coverImage: "/placeholder.svg",
  },
];

const categories = [
  { 
    icon: <BookOpen className="h-10 w-10 text-primary" />, 
    title: "Художественная литература", 
    description: "Романы, рассказы, стихи и другие произведения",
    link: "/catalog/fiction"
  },
  { 
    icon: <Scroll className="h-10 w-10 text-primary" />, 
    title: "Нехудожественная литература", 
    description: "Научпоп, история, бизнес и саморазвитие",
    link: "/catalog/non-fiction"
  },
  { 
    icon: <GraduationCap className="h-10 w-10 text-primary" />, 
    title: "Обучающие курсы", 
    description: "Онлайн-курсы по различным направлениям",
    link: "/courses"
  },
];

const Index = () => {
  const [emailValue, setEmailValue] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-secondary to-background">
          <div className="container flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Откройте мир знаний с нашими книгами и курсами
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Лучшие издания художественной и научно-популярной литературы, а также авторские образовательные курсы по доступным ценам
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="font-medium">
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Популярные курсы
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-96 bg-primary/10 rounded-lg"></div>
                <div className="relative z-10 w-72 h-96 bg-card shadow-lg rounded-lg overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Book collection" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories section */}
        <section className="py-14 container">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-2">Каталог</h2>
            <p className="text-muted-foreground">Найдите то, что вам интересно</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <Link 
                to={category.link} 
                key={idx}
                className="p-6 border rounded-lg bg-card hover:border-primary hover:shadow-sm transition-all hover-scale"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-medium mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <span className="text-primary flex items-center gap-1 story-link">
                  Перейти <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Featured books section */}
        <section className="py-14 container">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Бестселлеры</h2>
              <p className="text-muted-foreground">Самые популярные книги этого месяца</p>
            </div>
            <Link to="/catalog" className="text-primary flex items-center gap-1 story-link">
              Все книги <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </section>
        
        {/* New arrivals section */}
        <section className="py-14 container">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Новые поступления</h2>
              <p className="text-muted-foreground">Свежие издания в нашем каталоге</p>
            </div>
            <Link to="/new" className="text-primary flex items-center gap-1 story-link">
              Все новинки <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </section>
        
        {/* Courses section */}
        <section className="py-14 bg-muted/50">
          <div className="container">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Образовательные курсы</h2>
                <p className="text-muted-foreground">Онлайн-курсы от лучших преподавателей</p>
              </div>
              <Link to="/courses" className="text-primary flex items-center gap-1 story-link">
                Все курсы <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter section */}
        <section className="py-14 container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Подпишитесь на рассылку</h2>
            <p className="text-muted-foreground mb-6">
              Получайте уведомления о новых книгах, скидках и специальных предложениях
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="Ваш email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-muted py-10 border-t">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">О компании</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">О нас</Link></li>
                <li><Link to="/contacts" className="text-sm text-muted-foreground hover:text-primary">Контакты</Link></li>
                <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-primary">Вакансии</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Помощь</h3>
              <ul className="space-y-2">
                <li><Link to="/delivery" className="text-sm text-muted-foreground hover:text-primary">Доставка</Link></li>
                <li><Link to="/return" className="text-sm text-muted-foreground hover:text-primary">Возврат</Link></li>
                <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Каталог</h3>
              <ul className="space-y-2">
                <li><Link to="/catalog/fiction" className="text-sm text-muted-foreground hover:text-primary">Художественная</Link></li>
                <li><Link to="/catalog/non-fiction" className="text-sm text-muted-foreground hover:text-primary">Нехудожественная</Link></li>
                <li><Link to="/courses" className="text-sm text-muted-foreground hover:text-primary">Курсы</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>г. Москва, ул. Книжная, 123</p>
                <p>тел.: +7 (XXX) XXX-XX-XX</p>
                <p>email: info@книгомир.рф</p>
              </address>
            </div>
          </div>
          <div className="pt-6 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
            <div>© 2023 КнигоМир. Все права защищены.</div>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-primary">Политика конфиденциальности</Link>
              <Link to="/terms" className="hover:text-primary">Условия использования</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
