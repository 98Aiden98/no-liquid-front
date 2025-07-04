import css from "./index.module.scss";
import Navbar from "../Navbar";
import { createRef } from "react";
import Footer from "../Footer";
import ContactCard from "../ContactCard";
import SearchField from "../SearchField";
import Filters from "../Filters";
import ProductList from "../ProductList";

// eslint-disable-next-line react-refresh/only-export-components
export const layoutContextElRef = createRef<HTMLDivElement>();

export const Layout = () => {
  return (
    <div className={css.layout}>
      <Navbar />

      <div className={css.content} ref={layoutContextElRef}>
        <ContactCard />
        <SearchField />
        <Filters />
        <ProductList/>
        <Footer />
      </div>
    </div>
  );
};
