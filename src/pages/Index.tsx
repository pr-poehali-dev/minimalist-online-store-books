import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import BooksSection from "@/components/sections/BooksSection";
import CoursesSection from "@/components/sections/CoursesSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/layout/Footer";
import { featuredBooks, newBooks, courses } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <HeroSection />
        
        {/* Categories section */}
        <CategoriesSection />
        
        {/* Featured books section */}
        <BooksSection
          title="Бестселлеры"
          subtitle="Самые популярные книги этого месяца"
          viewAllLink="/catalog"
          viewAllText="Все книги"
          books={featuredBooks}
        />
        
        {/* New arrivals section */}
        <BooksSection
          title="Новые поступления"
          subtitle="Свежие издания в нашем каталоге"
          viewAllLink="/new"
          viewAllText="Все новинки"
          books={newBooks}
        />
        
        {/* Courses section */}
        <CoursesSection courses={courses} />
        
        {/* Newsletter section */}
        <NewsletterSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
