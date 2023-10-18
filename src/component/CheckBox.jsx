const CheckBox = ({ text, ...rest }) => {
  return (
    <label className="w-auto cursor-pointer">
      <input type="checkbox" {...rest} />
      <span className=""> {text}</span>
    </label>
  );
};

export default CheckBox;
