import Button from "../Button";
import css from "./index.module.scss";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  properties: string[];
  price: string;
  count: string;
}

const ProductCard = ({
  image,
  title,
  category,
  properties,
  price,
  count,
}: ProductCardProps) => {
  return (
    <div className={css.productCard}>
      <div className={css.productCardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={css.productCardInfo}>
        <h2 className={css.productCardTitle}>{title}</h2>
        <div className={css.productCardDescription}>
          <p>Категория: {category}</p>
          {properties.map((prop, index) => (
            <p key={index}>{prop}</p>
          ))}
        </div>
        <p className={css.productCardPrice}>{price}</p>
        <div className={css.productCardCount}>Количество: {count}</div>
        <Button text="Добавить в корзину" width={"100%"} />
      </div>
    </div>
  );
};

export default ProductCard;