import React from 'react';
import './Button.css';

const Button: React.FC<any> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
