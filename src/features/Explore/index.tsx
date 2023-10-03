import React from 'react';
import gif from './homer-simpson-dancing.gif';

const Explore: React.FC = () => {
  return (
    <div className='explore-container'>
      <img src={gif} alt="" />
    </div>
  );
};

export default Explore;
