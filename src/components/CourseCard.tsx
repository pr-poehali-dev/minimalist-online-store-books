import { FC } from "react";
import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  price: number;
  oldPrice?: number;
  coverImage: string;
  className?: string;
}

const CourseCard: FC<CourseCardProps> = ({
  id,
  title,
  description,
  duration,
  students,
  price,
  oldPrice,
  coverImage,
  className
}) => {
  return (
    <Link 
      to={`/course/${id}`} 
      className={cn(
        "group flex flex-col overflow-hidden border rounded-lg bg-card transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={coverImage || "/placeholder.svg"} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        <h3 className="text-lg font-medium line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto pt-3">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{students} студентов</span>
          </div>
        </div>
        
        <div className="flex items-baseline gap-2 pt-1">
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

export default CourseCard;
