import InstagramButton from "./Instagram";
import PaypalButton from "./Paypal";
import WhatsAppButton from "./Whatsapp";
import "./BottomLinks.css";
import LinkedinButton from "./LinkedinButton";
import GithubButton from "./GithubButton";

const BottomLinks = () => {
  return (
    <div className="connect-links-container">
      <div className="connect-links-container-text">
        <div className="connect-links-container-description-title">
          Quick links
        </div>
      </div>
      <div className="connect-links">
        <WhatsAppButton />
        <InstagramButton />
        <LinkedinButton />
        <GithubButton />
        <PaypalButton />
      </div>
    </div>
  );
};

export default BottomLinks;
