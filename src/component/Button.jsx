import React from "react";

const Button = ({ className, className2, children }) => {
  return <button className={`${className} ${className2}`}>{children}</button>;
};

export default Button;
