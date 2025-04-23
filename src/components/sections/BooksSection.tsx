import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BookCard from "@/components/BookCard";

interface BooksSectionProps {
  title: string;
  subtitle: string;
  viewAllLink: string;
  viewAllText: string;
  books: Array<{
    id: string;
    title: string;
    author: string;
    price: number;
    oldPrice?: number;
    coverImage: string;
    isNew?: boolean;
  }>;
}

const BooksSection = ({ title, subtitle, viewAllLink, viewAllText, books }: BooksSectionProps) => {
  return (
    <section className="py-14 container">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        <Link to={viewAllLink} className="text-primary flex items-center gap-1 story-link">
          {viewAllText} <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
