const TextInput = ({ type, placeholder, icon }) => {
  return (
    <div className="flex items-center justify-between gap-3 bg-white px-2 w-full rounded-md">
      <input
        className="w-full px-[5px] py-1 outline-none"
        type={type}
        placeholder={placeholder}
      />
      <span className="text-lg">{icon}</span>
    </div>
  );
};

export default TextInput;
