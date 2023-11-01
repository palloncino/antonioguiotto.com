import WhatsappPng from '../media/images/Whatsapp.png';

const WhatsAppButton = () => {
  const openWhatsAppChat = () => {
    const win = window.open('https://wa.me/1234567890', '_blank');
    win?.focus();
  }

  return (
    <div className="whatsapp-button" onClick={openWhatsAppChat}>
      <img src={WhatsappPng} alt="WhatsApp Icon"/>
    </div>
  );
}

export default WhatsAppButton;