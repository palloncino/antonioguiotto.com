import React from 'react';
import './Button.css';

const Button: React.FC<any> = ({ label, onClick, style }) => {
  return (
    <button className="button" onClick={onClick} style={{...style}}>
      {label}
    </button>
  );
};

export default Button;
