const CheckBox = ({ className, text, ...rest }) => {
  return (
    <label className={`w-auto cursor-pointer ${className} `}>
      <input type="checkbox" {...rest} />
      <span className=""> {text}</span>
    </label>
  );
};

export default CheckBox;
