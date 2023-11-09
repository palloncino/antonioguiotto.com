import { useState } from "react";
import YouTube from "react-youtube";
import "./PreviewCard.css";

const PreviewCard = ({
  id,
  title,
  devices,
  description,
  status,
  images,
  thumbnail,
  videos,
}: any) => {
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(false);

  const renderLoading = () => {
    return (
      <div className="explore-page-card-preview-loading">
        <h3 className="explore-page-card-preview-title">
          {"LOADING...".split("").map((char, index) => (
            <span key={char+index+char}>{char}</span>
          ))}
        </h3>
      </div>
    );
  };
  const renderPreview = () => {
    return (
      <div className="explore-page-card-preview">
        <div className="explore-page-card-preview-content">
          <h3 className="explore-page-card-preview-title loading">
            {title.split("").map((char: string, index: number) => (
              <span key={char+index+char}>{char}</span>
            ))}
          </h3>
          <div className="preview-media">
            {videos[0] ? (
              <YouTube
                className={"youtube-frame"}
                videoId={videos[0].videoId}
                opts={{
                  // height: "390",
                  // width: "640",
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                    controls: 1,
                    loop: 0,
                    muted: 0,
                  },
                }}
                // onEnd={handleVideoEnd}
              />
            ) : (
              <img src={images[0]} alt={`${title}`} />
            )}
          </div>
          {description && (
            <div className="preview-text-description-devices">
              <div className="preview-text-description-key">About</div>
              <div className="preview-text-description-value">
                {description}
              </div>
            </div>
          )}
          <div className="preview-text-description-container">
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
          </div>
        </div>
      </div>
    );
  };
  return loading ? renderLoading() : renderPreview();
};

export default PreviewCard;
