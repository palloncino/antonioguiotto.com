import PaperSvg from "../../media/images/graph-paper.svg";
import Logo from "../../media/images/logo.png";
import { useNavigate } from 'react-router';
import './shop.css';
import { useState } from "react";
import PaypalButton from "../../components/Paypal";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
  const products = [
    { id: 1123, title: 'Item 1', price: '10€', description: "Description for Item 1", dated: "2018", thumbnail: PaperSvg, media: [PaperSvg, PaperSvg] },
    { id: 2123, title: 'Item 2', price: '20€', description: "Description for Item 2", dated: "2019", thumbnail: PaperSvg, media: [PaperSvg, PaperSvg] },
    { id: 3123, title: 'Item 3', price: '30€', description: "Description for Item 3", dated: "2020", thumbnail: PaperSvg, media: [PaperSvg, PaperSvg] }
  ]

  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(1123);

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
          <div className="shop-page-product-detail">{price}</div>
          <div className="shop-page-product-detail">{dated}</div>
          <div className="shop-page-product-detail">{description}</div>
          <hr />
          <div>
            <div>
              Buy for {price} EUR.
            </div>
            <div>
              Payment methods:
            </div>

            <div>
              The current possible payment methods are via Paypal or via Bank Transef, the shipping is international shipping might take from 7 to 30 days.
            </div>
            <div style={{ cursor: 'pointer' }}>
              <PaypalButton />
            </div>
            <div>
              <div>
                <h3>Bank Transfer:</h3>
                <div>
                  Name: ANTONIO GUIOTTO
                </div>
                <div>
                  IBAN: IT73 A036 4601 6005 2646 6527 748
                </div>
                <div>
                  BIC: NTSBITM1XXX
                </div>
              </div>
            </div>
            <div>
              International shipping
            </div>
            <div>
              contacts: powerhydratoni@gmail.com
            </div>
          </div>
        </div>
      )
    } else {
      return;
    }
  }

  return (
    <div className="shop-page-container">

      <div className="shop-page-header">

        <div className="shop-page-header-column" onClick={() => navigate('/')}>
          <img className="explore-page-logo" src={Logo} alt="Logo" />
          <div className="explore-page-logo-titles-container">
            <div className="explore-page-logo-title">Authentic artistic endeavors</div>
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
            {products.map(({ id, title, price, description, dated, thumbnail, media }) => (
              <ProductCard 
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              id={id}
              title={title}
              price={price}
              description={description}
              dated={dated}
              thumbnail={thumbnail}
              media={media} />
            ))}
          </div>
        </div>

        <div className="shop-page-product-preview-container">
          {displayItem(selectedProduct)}
        </div>
      </div>
    </div>
  );
}

export default Shop;