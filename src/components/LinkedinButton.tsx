import LinkedinPng from '../media/images/Linkedin.png';

const LinkedinButton = () => {
  const openLink = () => {
    const win = window.open('https://www.linkedin.com/in/antonioguiotto/', '_blank');
    win?.focus();
  }

  return (
    <div className="linkedin-button" onClick={openLink}>
      <img src={LinkedinPng} alt="Linkedin Icon"/>
    </div>
  );
}

export default LinkedinButton;