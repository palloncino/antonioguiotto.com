import { useState } from "react";
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
          {"LOADING...".split("").map((char) => (
            <span>{char}</span>
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
            {title.split("").map((char: string) => (
              <span>{char}</span>
            ))}
          </h3>
          <div className="preview-media">
            {images.map((image: any, index: number) => (
              <img
                key={index}
                src={image}
                alt={`${title} screenshot ${index + 1}`}
              />
            ))}
            {videos.map((video: any, index: number) => (
              <video
                poster={thumbnail}
                onDoubleClick={() => setMuted(!muted)}
                key={index}
                src={video}
                autoPlay={true}
                muted={id === 2141234 ? false : muted}
                controls={false}
                loop
              />
            ))}
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
