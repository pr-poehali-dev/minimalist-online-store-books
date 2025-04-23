import { Link } from "react-router-dom";
import { Search, ShoppingBag, User } from "lucide-react";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Художественная литература",
    items: ["Классика", "Современная проза", "Фантастика", "Детективы"]
  },
  {
    title: "Нехудожественная литература",
    items: ["Бизнес", "Психология", "История", "Наука"]
  },
  {
    title: "Обучающие материалы",
    items: ["Курсы", "Учебники", "Рабочие тетради", "Интерактивные материалы"]
  }
];

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-semibold">КнигоМир</Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-3 gap-4 p-4 w-[600px]">
                  {categories.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <h3 className="font-medium text-sm">{category.title}</h3>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item}>
                            <NavigationMenuLink asChild>
                              <Link 
                                to={`/catalog/${item.toLowerCase()}`} 
                                className={cn(
                                  "block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                )}
                              >
                                {item}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/new" className={cn("px-4 py-2 text-sm hover:text-primary transition-colors")}>
                Новинки
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/courses" className={cn("px-4 py-2 text-sm hover:text-primary transition-colors")}>
                Курсы
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/sale" className={cn("px-4 py-2 text-sm hover:text-primary transition-colors")}>
                Скидки
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
            <Search size={20} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
            <User size={20} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
