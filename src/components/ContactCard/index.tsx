import Button from "../Button";
import css from "./index.module.scss";

const ContactCard = () => {
  return (
    <div className={css.contactCard}>
      <h3>Каталог неликвидов</h3>
      <Button text="Связаться с нами" to="/cart" width={"200"} />
    </div>
  );
};

export default ContactCard;
