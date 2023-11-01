import PaypalPng from '../media/images/Paypal.png';

const PaypalButton = () => {
  const openLink = () => {
    const win = window.open('https://paypal.me/AntonioGuiotto?country.x=IT&locale.x=it_IT', '_blank');
    win?.focus();
  }

  return (
    <div className="paypal-button" onClick={openLink}>
      <img src={PaypalPng} alt="Paypal Icon"/>
    </div>
  );
}

export default PaypalButton;