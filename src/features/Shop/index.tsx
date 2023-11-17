import { useState } from "react";
import { useNavigate } from "react-router";
import ProductCard from "../../components/ProductCard";
import PaypalPng from '../../media/images/Paypal.png';
import Logo from "../../media/images/logo.png";
import "./shop.css";

const Shop = () => {
  const products = [
    {
      id: 1000,
      title: "Cave",
      price: 320,
      description:
        "Marker on canvas",
      dated: "2018",
      thumbnail: 'https://antonio-guiotto-media.s3.amazonaws.com/cave.png',
      media: ['https://antonio-guiotto-media.s3.amazonaws.com/cave.png'],
    },
    {
      id: 1001,
      title: "Frog",
      price: 80,
      description:
        "Marker on paperbox",
      dated: "2018",
      thumbnail: 'https://antonio-guiotto-media.s3.amazonaws.com/frong.png',
      media: ['https://antonio-guiotto-media.s3.amazonaws.com/frong.png'],
    },
    {
      id: 1002,
      title: "Marina",
      price: 80,
      description:
        "Marker on canvas",
      dated: "2018",
      thumbnail: 'https://antonio-guiotto-media.s3.amazonaws.com/marina.png',
      media: ['https://antonio-guiotto-media.s3.amazonaws.com/marina.png'],
    },
    {
      id: 1003,
      title: "Shark",
      price: 320,
      description:
        "Marker on canvas",
      dated: "2018",
      thumbnail: 'https://antonio-guiotto-media.s3.amazonaws.com/shark.png',
      media: ['https://antonio-guiotto-media.s3.amazonaws.com/shark.png'],
    },
  ];

  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(1000);

  const displayItem = (_index: number) => {
    const product = products.find(({ id }) => id === _index);
    if (product) {
      const { id, title, price, description, dated, thumbnail } = product;

      return (
        <div className="shop-page-product">
          <div className="shop-page-product-detail">{id}</div>
          <h3 className="shop-page-product-title">{title}</h3>
          <div className="shop-page-product-media">
            <img src={thumbnail} alt="product" />
          </div>
          <div className="shop-page-product-detail">Price: {price} $</div>
          <div className="shop-page-product-detail">
            Date of creation: {dated}
          </div>
          <div className="shop-page-product-detail">{description}</div>
          <hr />
          <div>
            <h3>Payment methods</h3>
            <div>
              The current possible payment methods are via Paypal or via Bank
              Transef
            </div>
            <div style={{ cursor: "pointer" }}>
              <h3>PayPal</h3>
              <div className="">
                <img height="50" src={PaypalPng} alt="Paypal Icon" />
              </div>
            </div>
            <div>
              <h3>Bank Transfer</h3>
              <div>Name: ANTONIO GUIOTTO</div>
              <div>IBAN: IT73 A036 4601 6005 2646 6527 748</div>
              <div>BIC: NTSBITM1XXX</div>
            </div>
            <div>
              <h3>Shipping methods</h3>
              <div>
                shipping is international shipping might take from 7 to 30 days.
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <div className="shop-page-container">
      <div className="shop-page-header">
        <div className="shop-page-header-column" onClick={() => navigate("/")}>
          <img className="explore-page-logo" src={Logo} alt="Logo" />
          <div className="explore-page-logo-titles-container">
            <div className="explore-page-logo-title">
              Authentic artistic endeavors
            </div>
            <div className="explore-page-logo-subtitle">← Back to Homepage</div>
          </div>
        </div>

        {/* 
          <div className="shop-page-header-column">
            other stuff
          </div> 
        */}
      </div>

      <div className="shop-page-content-container">
        <div className="shop-page-products-container">
          <div className="shop-page-products-grid">
            {products.map(
              ({ id, title, price, description, dated, thumbnail, media }) => (
                <ProductCard
                  key={id}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  dated={dated}
                  thumbnail={thumbnail}
                  media={media}
                />
              )
            )}
          </div>
        </div>

        <div className="shop-page-product-preview-container">
          {displayItem(selectedProduct)}
        </div>
      </div>
    </div>
  );
};

export default Shop;
