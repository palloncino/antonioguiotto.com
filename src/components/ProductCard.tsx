import { useState } from "react";

const ProductCard = ({ selectedProduct, setSelectedProduct, id, title, price, description, dated, thumbnail, media }: any) => {

  const [isHover, setIsHover] = useState(false);

  const getClasses = (selected: boolean, hover: boolean) => {
    let classesStr = "";
    if (selected) {
      classesStr += " selected";
    }
    if (!hover) {
      classesStr += " not-hovered";
    }
    return classesStr;
  };

  return (
    <div
      key={id}
      className={`shop-page-product-container ${getClasses(
        selectedProduct === id,
        isHover
      )}`}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }} onClick={() => setSelectedProduct(id)}>
      <div>{title}</div>
      <div className="shop-page-product-media-container" style={{ background: `url(${thumbnail})` }}>
      </div>
      <div>{price}</div>
      <div>{description}</div>
      <div>{dated}</div>
    </div>
  );
};

export default ProductCard;
