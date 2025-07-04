import css from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerSections}>
        <div className={css.section}>
          <h3>RM RAIL</h3>
          <p>
            Phasellus et tortor gravida, vulputat nibh sed, consectetur dolor.
            Vestibulum feugiat, ipsum vel gravida pharetra.
          </p>
        </div>
        <div className={css.section}>
          <h3>Контактная информация</h3>
          <p>uk@rmrail.ru</p>
          <p>8 (800) 20-10-700</p>
          <p>www.rmrail.ru</p>
          <p>Саранск, ул. Лодыгина, д. 11</p>
        </div>
        <div className={css.section}>
          <h3>Полезные ссылки</h3>
          <p>Class aptent taciti</p>
          <p>Phasellus et tortor gravida</p>
          <p>Lorem ipsum dolor sit amet</p>
          <p>Duis bibendum dolor odio</p>
        </div>
      </div>
      <hr />
      <div className={css.copyright}>
        <p>© 2025 PM Peйл</p>
      </div>
    </footer>
  );
};

export default Footer;
