import Logo from "../../media/images/logo.png";
import { useNavigate } from 'react-router';
import './shop.css';
import { useState } from "react";

const Shop = () => {
  const products = [
    { id: 1, title: 'Item 1', price: '10€', description: "Marker on canvas", dated: "2018" },
    { id: 2, title: 'Item 2', price: '20€', description: "Marker on canvas", dated: "2018" },
    { id: 3, title: 'Item 3', price: '40€', description: "Marker on canvas", dated: "2019" },
  ];

  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(1);

  const displayItem = (_index: number) => {
    const product = products.find(({ id }) => id === _index);
    if (product) {
      const { id, title, price, description, dated } = product;

      return (
        <div className="shop-page-product">
          <h3 className="shop-page-product-title">{title}</h3>
          <div className="shop-page-product-detail">
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Price:</strong> {price}</p>
            <p><strong>Date:</strong> {dated}</p>
          </div>
          <p className="shop-page-product-description">{description}</p>
        </div>
      )
    } else {
      return (
        <div>
          <div>product not found</div>
        </div>
      )
    }
  }

  return (
    <div className="shop-page-container">

      <div className="shop-page-header">

        <div className="shop-page-header-column">
          <img className="explore-page-logo" src={Logo} alt="Logo" />
          <h3>Authentic artistic endeavors</h3>
        </div>

        <div className="shop-page-header-column">
          (filters)
        </div>

        <div className="shop-page-header-column">
          <button onClick={() => navigate('/')}>Back</button>
        </div>
      </div>

      <div className="shop-page-content-container">
        <div className="shop-page-products-container">
          <div className="shop-page-products-grid">
            {products.map(({ id, title, price, description, dated }) => (
              <div key={id} className="shop-page-product-container" onClick={() => setSelectedProduct(id)}>
                <div>{title}</div>
                <div className="shop-page-product-media-container" style={{ background: `url(${'https://picsum.photos/400'})` }}>
                </div>
                <div>{price}</div>
                <div>{description}</div>
                <div>{dated}</div>
              </div>
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