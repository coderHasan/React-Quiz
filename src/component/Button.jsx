import React from "react";

const Button = ({ children, className, className2 }) => {
  return <div className={`${className} ${className2}`}>{children}</div>;
};

export default Button;
