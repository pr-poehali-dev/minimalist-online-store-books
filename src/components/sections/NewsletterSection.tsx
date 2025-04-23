import { useState } from "react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  const [emailValue, setEmailValue] = useState("");

  return (
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
  );
};

export default NewsletterSection;
