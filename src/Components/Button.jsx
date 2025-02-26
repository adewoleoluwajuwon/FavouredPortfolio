const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-[#f73d3e]",
  textColor = "text-[#fff]",
  borderColor = "border-[#f73d3e]",
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center 
        gap-2 px-7 py-4 border text-lg leading-none rounded-full 
        ${fullWidth && `w-full`}
      ${backgroundColor} ${textColor} ${borderColor}`}
    >
      {label}
      {iconURL && (
        <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="icon" />
      )}
    </button>
  );
};

export default Button;
