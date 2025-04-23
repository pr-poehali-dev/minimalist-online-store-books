import { FC } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  oldPrice?: number;
  coverImage: string;
  isNew?: boolean;
  className?: string;
}

const BookCard: FC<BookCardProps> = ({
  id,
  title,
  author,
  price,
  oldPrice,
  coverImage,
  isNew = false,
  className
}) => {
  return (
    <Link 
      to={`/book/${id}`} 
      className={cn(
        "group flex flex-col overflow-hidden hover-scale", 
        className
      )}
    >
      <div className="relative aspect-[2/3] mb-3 bg-muted rounded-md overflow-hidden">
        <img 
          src={coverImage || "/placeholder.svg"} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isNew && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            Новинка
          </div>
        )}
        {oldPrice && (
          <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
            Скидка
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{author}</p>
        <div className="flex items-baseline gap-2">
          <span className="font-semibold">{price} ₽</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {oldPrice} ₽
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
