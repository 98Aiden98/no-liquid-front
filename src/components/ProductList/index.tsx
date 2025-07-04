import ProductCard from "../ProductCard";
import css from "./index.module.scss";

const ProductList = () => {
  const products = [
    {
      image: "productPhotos/example.webp",
      title: "Lorem ipsum dolor sit amet 1",
      category: "Материал 1",
      properties: ["Свойство 1: Что-то там", "Свойство 2: Что-то там", "Свойство 3: Что-то там"],
      price: "5000 ₽",
      count: "5",
    },
    {
      image: "productPhotos/example.webp",
      title: "Lorem ipsum dolor sit amet 2",
      category: "Материал 2",
      properties: ["Свойство 1: Что-то там", "Свойство 2: Что-то там", "Свойство 3: Что-то там"],
      price: "6000 ₽",
      count: "10",
    },
    {
      image: "productPhotos/example.webp",
      title: "Lorem ipsum dolor sit amet 3",
      category: "Материал 3",
      properties: ["Свойство 1: Что-то там", "Свойство 2: Что-то там", "Свойство 3: Что-то там"],
      price: "7000 ₽",
      count: "15",
    },
    {
      image: "productPhotos/example.webp",
      title: "Lorem ipsum dolor sit amet 4",
      category: "Материал 3",
      properties: ["Свойство 1: Что-то там", "Свойство 2: Что-то там", "Свойство 3: Что-то там"],
      price: "2000 ₽",
      count: "11",
    },
    {
      image: "productPhotos/example.webp",
      title: "Lorem ipsum dolor sit amet 5",
      category: "Материал 3",
      properties: ["Свойство 1: Что-то там", "Свойство 2: Что-то там", "Свойство 3: Что-то там"],
      price: "11000 ₽",
      count: "12",
    },
  ];

  return (
    <div className={css.productList}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          category={product.category}
          properties={product.properties}
          price={product.price}
          count={product.count}
        />
      ))}
    </div>
  );
};

export default ProductList;