import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import YouTube from "react-youtube";
import "./PreviewCard.css";

const PreviewCard = ({
  id,
  title,
  devices,
  description,
  status,
  images,
  route,
  videos,
}: any) => {

  const navigate = useNavigate()

  const renderTypewriter = (desc: string) => {
    const id_num = Math.floor(Math.random()) * 100;
    return (
      <Typewriter
        key={`${desc.slice(0, 5) + id_num}`}
        words={[`${desc}`]}
        loop={1}
        typeSpeed={30}
        cursor={true}
      />
    )
  }

  const renderPreview = () => {
    return (
      <div className="explore-page-card-preview">
        <div className="explore-page-card-preview-content">
          <div className="preview-media">
            {videos[0] ? (
              <YouTube
                className="youtube-frame"
                videoId={videos[0].videoId}
                opts={{
                  playerVars: {
                    autoplay: 0,
                    controls: 1,
                    loop: 0,
                    muted: 0,
                  },
                }}
              />
            ) : (
              <img src={images[0]} alt={`${title}`} />
            )}
          </div>
          <div className="preview-text-description-container">
            {title && (
              <div className="preview-text-description-devices">
                <div className="preview-card-title">{title}</div>
              </div>
            )}
            {description && (
              <div className="preview-text-description-devices">
                <div className="preview-text-description-key">About</div>
                <div className="preview-text-description-value">
                  {renderTypewriter(description)}
                </div>
              </div>
            )}
            {devices && (
              <div className="preview-text-description-devices">
                <div className="preview-text-description-key">Devices</div>
                <div className="preview-text-description-value">{devices}</div>
              </div>
            )}
            {status && (
              <div className="preview-text-description-status">
                <div className="preview-text-description-key">Status</div>
                <div className="preview-text-description-value">{status}</div>
              </div>
            )}
            {route && route !== "/" && (
              <div className="preview-text-description-link">
                <div className="preview-text-description-key">Go to app</div>
                <div className="preview-text-description-value a" onClick={() => navigate(route)}>{route} ↗</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  return renderPreview();
};

export default PreviewCard;
