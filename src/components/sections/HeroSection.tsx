import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
