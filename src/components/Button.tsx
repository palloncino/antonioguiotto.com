import React from 'react';
import './Button.css';

const Button: React.FC<any> = ({ label, onClick, style, link }) => {
  return (
    <button className={link ? "button link" : "button"} onClick={onClick} style={{...style}}>
      {label}
    </button>
  );
};

export default Button;
