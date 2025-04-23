import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Scroll } from "lucide-react";

// Данные категорий
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

const CategoriesSection = () => {
  return (
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
  );
};

export default CategoriesSection;
