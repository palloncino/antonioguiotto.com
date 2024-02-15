import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import "./PreviewCard.css";

const PreviewCard = ({
  id,
  type,
  title,
  keys,
  description,
  status,
  images,
  route,
  githubRepos,
  videos,
}: any) => {
  const navigate = useNavigate();

  const computePreviewMedia = () => {
    let _type: 'video' | 'image' | 'animation' | undefined = undefined;

    if (videos && videos[0]) {
      _type = 'video';
    } else if (type === 'animation') {
      _type = 'animation';
    } else if (images && images[0]) {
      _type = 'image';
    }

    switch (_type) {
      case 'video':
        return (
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
        )

      case 'image':
        return (
          <img src={images[0]} alt={`${title}`} />
        )

      case 'animation':
        return (
          <div className="animation-container">
            <span>Placeholder for 3D animation</span>
          </div>
        )

      default:
        return (
          <img src={images[0]} alt={`${title}`} />
        )
    }

  }

  const renderPreview = () => {
    return (
      <div className="explore-page-card-preview">
        <div className="explore-page-card-preview-content">
          <div className="preview-media">
            {computePreviewMedia()}
          </div>
          <div className="preview-text-description-container">
            {title && (
              <div className="preview-text-description-title">
                <div className="preview-card-title">{title}</div>
              </div>
            )}
            {type && (
              <div className="preview-text-description-type">
                <div className="preview-text-description-key">Type</div>
                <div className="preview-text-description-value">{type.toUpperCase()}</div>
              </div>
            )}
            {description && (
              <div className="preview-text-description-description">
                <div className="preview-text-description-key">About</div>
                <div className="preview-text-description-value">
                  {description}
                </div>
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
                <div
                  className="preview-text-description-value a"
                  onClick={() => navigate(route)}
                >
                  {route.slice(1)} ↗
                </div>
              </div>
            )}
            {githubRepos && githubRepos.length > 0 && (
              <div className="preview-text-description-link">
                <div className="preview-text-description-key">
                  Repositories
                </div>
                {githubRepos.map((name: string) => (
                  <div
                    key={name.slice(0, 10)}
                    className="preview-text-description-value a"
                    onClick={() =>
                      window.open(
                        `https://github.com/palloncino/${name}`,
                        "_blank"
                      )
                    }
                  >
                    {name} ↗
                  </div>
                ))}
              </div>
            )}
            {keys && (
              <div className="preview-text-description-keys">
                <div className="preview-text-description-key">Keys</div>
                <div className="preview-text-description-value">{keys}</div>
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
