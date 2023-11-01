import PaypalButton from "./Paypal";
import WhatsAppButton from "./Whatsapp";
import "./BottomLinks.css";

const BottomLinks = () => {
  return (
    <div className="connect-links-container">
      <div className="connect-links-container-text">
        <div className="connect-links-container-description-title">
          Quick contact
        </div>
        <div className="connect-links-container-description-subtitle">
          & if you feel generous 💸
        </div>
      </div>
      <div className="connect-links">
        <WhatsAppButton />
        <PaypalButton />
      </div>
    </div>
  );
};

export default BottomLinks;
