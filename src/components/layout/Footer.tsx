import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
  );
};

export default Footer;
