import React from 'react';
// import '../styles/Button.css';

const Button = (props) => {
  return (
    <button className="custom-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
