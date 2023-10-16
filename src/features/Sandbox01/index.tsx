import React, { useState } from 'react';
import './Sandbox01.css';

const Sandbox01: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sandbox" style={{ height: `${window.innerHeight}px` }}>
      <div className="header" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        Wild Animals
        {isHovered && <div className="ripple"></div>}
      </div>
      <div className="animal-card">
        <div className="image">
          <img src="https://source.unsplash.com/featured/?lion" alt="Lion" />
        </div>
        <div className="info">
          <div className="name">Lion</div>
          <div className="description">
            Known as the King of the Jungle, lions are fearsome predators.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sandbox01;
