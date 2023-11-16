import EyeIcon from '../media/images/eye.svg';
import { useState } from "react";

const ButtonCard = ({
  id,
  type,
  // route,
  title,
  media,
  handleSetSelectedItem,
  selectedIndex,
}: any) => {
  const [isHover, setIsHover] = useState(false);

  const getClasses = (selected: boolean, hover: boolean) => {
    let classesStr = "";
    if (selected) {
      classesStr += " selected";
    }
    if (!hover) {
      classesStr += " not-hovered";
    }
    return classesStr;
  };

  return (
    <div
      onClick={() => {
        selectedIndex === id
          ? handleSetSelectedItem(2100001)
          : handleSetSelectedItem(id);

      }}
      className={`explore-page-card ${getClasses(
        selectedIndex === id,
        isHover
      )}`}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className="pin-feature-image">
        <img src={EyeIcon} alt="pin feature" />
      </div>
      <div className="type-feature-text-container">
        <span className={`type-feature-text ${type}`}>{type}</span>
      </div>
      <div
        className="explore-card-media-container"
        style={{ backgroundImage: `url(${media}`, backgroundSize: "cover" }}
      />
      <div className="explore-card-text-container">
        <div className="explore-card-title">{title}</div>
      </div>
    </div>
  );
};

export default ButtonCard;
