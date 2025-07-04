import { Link } from "react-router-dom";
import { cartPageRoute, mainPageRoute } from "../../lib/routes";
import css from "./index.module.scss";

const Navbar = () => {
  return (
    <header className={css.navbar}>
      <div className={css.logo}>
        <img src="/logo.jpg" alt="logo" /> <p>Неликвиды</p>
      </div>
      <nav className={css.menu}>
        <Link className={css.catalog} to={mainPageRoute()}>
          Каталог
        </Link>
        <Link className={css.cart} to={cartPageRoute()}>
          <img src="icons/cart-icon.png" alt="cart" />
          Корзина
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
