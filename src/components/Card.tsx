// Card.jsx
import React, { useState } from 'react';
import Marquee from 'react-double-marquee';
import { useNavigate } from 'react-router-dom';

const Card = ({ route, title, description }: any) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="explore-page-card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="explore-card-title">
        {title}
      </div>
      <div className="explore-card-description">
        {isHover ? (
          <Marquee delay={300} direction={'left'} scrollWhen={'overflow'} speed={0.05}>
            {description}
          </Marquee>
        ) : (
          <span>{description}</span>
        )}
      </div>
    </div>
  );
};

export default Card;