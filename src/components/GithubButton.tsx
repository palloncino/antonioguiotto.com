import GithubPng from '../media/images/Github.png';

const GithubButton = () => {
  const openLink = () => {
    const win = window.open('https://github.com/palloncino', '_blank');
    win?.focus();
  }

  return (
    <div className="github-button" onClick={openLink}>
      <img src={GithubPng} alt="Github Icon"/>
    </div>
  );
}

export default GithubButton;