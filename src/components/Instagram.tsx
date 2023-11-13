import InstagramPng from '../media/images/Instagram.png';

const InstagramButton = () => {
  const openLink = () => {
    const win = window.open('https://www.instagram.com/antonio_guiotto/', '_blank');
    win?.focus();
  }

  return (
    <div className="instagram-button" onClick={openLink}>
      <img src={InstagramPng} alt="Instagram Icon"/>
    </div>
  );
}

export default InstagramButton;