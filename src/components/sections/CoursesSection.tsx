import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CourseCard from "@/components/CourseCard";

interface CoursesSectionProps {
  courses: Array<{
    id: string;
    title: string;
    description: string;
    duration: string;
    students: number;
    price: number;
    oldPrice?: number;
    coverImage: string;
  }>;
}

const CoursesSection = ({ courses }: CoursesSectionProps) => {
  return (
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
  );
};

export default CoursesSection;
