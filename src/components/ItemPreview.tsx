import CheckoutItem from "./CheckoutItem";
import "./ItemPreview.css";

const ItemPreview = () => {

  return (
    <div className="item-checkout-info-container">

      <div className="item-preview-container">
        Item Preview
      </div>

      <div>
        <CheckoutItem />
      </div>

    </div>

  )
};

export default ItemPreview;