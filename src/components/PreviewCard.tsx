import React, { useState } from "react";
import "./PreviewCard.css";
import { useNavigate } from "react-router-dom";

const PreviewCard = ({
  title,
  devices,
  description,
  status,
  route,
  images,
  videos,
}: any) => {
  const [muted, setMuted] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="explore-page-card-preview">
      <div className="explore-page-card-preview-content">
        <h3 className="explore-page-card-preview-title">
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
              onDoubleClick={() => setMuted(!muted)}
              key={index}
              src={video}
              autoPlay
              muted={muted}
              controls={false}
              loop
            />
          ))}
        </div>
        <div className="preview-text-description-container">

          <div className="preview-text-description-description">
          <div className="preview-text-description-key">Description</div><div className="preview-text-description-value">{description}</div>
          </div>
          <div className="preview-text-description-devices">
            <div className="preview-text-description-key">Devices</div><div className="preview-text-description-value">{devices}</div>
          </div>
          <div className="preview-text-description-status">
          <div className="preview-text-description-key">Status</div><div className="preview-text-description-value">{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
