import React from "react";

const Button = ({ children, className }) => {
  return (
    <div className={className}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
