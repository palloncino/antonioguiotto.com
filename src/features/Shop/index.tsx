import { useState } from "react";
import { useNavigate } from "react-router";
import ProductCard from "../../components/ProductCard";
import PaypalPng from "../../media/images/Paypal.png";
import Logo from "../../media/images/logo.png";
import "./shop.css";

const REACT_APP_S3_MEDIA_BUCKET = "https://ag-medias.s3.amazonaws.com";

const Shop = () => {
  const products = [
    {
      id: 1000,
      title: "Cave",
      price: 800,
      description: "Marker on canvas",
      dated: "2018",
      thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/cave.png`,
      media: [`${REACT_APP_S3_MEDIA_BUCKET}/cave.png`],
    },
    {
      id: 1001,
      title: "Frog",
      price: 200,
      description: "Marker on paperbox",
      dated: "2018",
      thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/frog.png`,
      media: [`${REACT_APP_S3_MEDIA_BUCKET}/frog.png`],
    },
    {
      id: 1002,
      title: "Marina",
      price: 150,
      description: "Marker on canvas",
      dated: "2018",
      thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/marina.png`,
      media: [`${REACT_APP_S3_MEDIA_BUCKET}/marina.png`],
    },
    {
      id: 1003,
      title: "Shark",
      price: 500,
      description: "Marker on canvas",
      dated: "2018",
      thumbnail: `${REACT_APP_S3_MEDIA_BUCKET}/shark.png`,
      media: [`${REACT_APP_S3_MEDIA_BUCKET}/shark.png`],
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
          <div className="shop-page-product-head-detail-container">
            <div className="shop-page-product-title">{title}</div>
            <div className="shop-page-product-detail">ID: {id}</div>
          </div>
          <div className="shop-page-product-media">
            
          </div>
          <div className="shop-page-product-detail">Price: {price} $</div>
          <div className="shop-page-product-detail">
            Date of creation: {dated}
          </div>
          <div className="shop-page-product-detail">{description}</div>
          <hr />
          <div className="product-info-sections-container">
            <div className="product-info-section">
              <div className="payment-method-section-header">
                <h3 className="payment-methods-title">Payment methods</h3>
                <div>These are the current payment methods.</div>
              </div>
              <div className="payment-methods-container">
                <div className="payment-method-paypal">
                  <h3 className="payment-method-title">PayPal</h3>
                  <div className="">
                    <img height="50" src={PaypalPng} alt="Paypal Icon" />
                  </div>
                </div>
                <div className="payment-method-bank-transfer">
                  <h3 className="payment-method-title">Bank Transfer</h3>
                  <div className="payment-method-detail">
                    Name: ANTONIO GUIOTTO
                  </div>
                  <div className="payment-method-detail">
                    IBAN: IT73 A036 4601 6005 2646 6527 748
                  </div>
                  <div className="payment-method-detail">BIC: NTSBITM1XXX</div>
                </div>
              </div>
            </div>
            <div>
              <div className="product-info-section">
                <h3 className="shipping-methods-title">Shipping methods</h3>
                <div>
                  shipping is international shipping might take from 7 to 30
                  days.
                </div>
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
