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
      <div className="shop-page-product-card-title">{title}</div>
      <div className="shop-page-product-card-media-container" style={{ background: `url(${thumbnail})` }}>
      </div>
      <div className="container-flex-01">
        <div className="shop-page-product-card-price">{price} $</div>
        <div className="shop-page-product-card-dated">Created in {dated}</div>
      </div>
      {/* <div className="shop-page-product-card-desciption">{description}</div> */}
    </div>
  );
};

export default ProductCard;
