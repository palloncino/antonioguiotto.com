import React, { useEffect, useState } from "react";
import Marquee from "react-double-marquee";
import { useNavigate } from "react-router-dom";

const ButtonCard = ({
  id,
  route,
  title,
  description,
  media,
  handleSetSelectedItem,
  selectedIndex
}: any) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const getClasses = (selected: boolean, hover: boolean) => {
    let classesStr = ''
    if (selected) {
      classesStr += " selected";
    }
    if (!hover) {
      classesStr += " not-hovered";
    }
    return classesStr;
  }

  return (
    <div
      onClick={() => {
        selectedIndex === id ? handleSetSelectedItem(undefined) : handleSetSelectedItem(id);
        navigate(route);
      }}
      className={`explore-page-card ${getClasses(selectedIndex === id, isHover)}`}
      onMouseEnter={() => {
        setIsHover(true);
        // handleSetSelectedItem(id);
      }}
      onMouseLeave={() => {
        setIsHover(false);
        // handleSetSelectedItem(undefined);
      }}
    >
      <div
        className="explore-card-media-container"
        style={{ backgroundImage: `url(${media}`, backgroundSize: "cover" }}
      />
      <div className="explore-card-text-container">
        <div className="explore-card-title">{title}</div>
        <div className="explore-card-description">
          {isHover ? (
            <Marquee
              delay={300}
              direction={"left"}
              scrollWhen={"overflow"}
              speed={0.1}
            >
              {description}
            </Marquee>
          ) : (
            <span>{description}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
