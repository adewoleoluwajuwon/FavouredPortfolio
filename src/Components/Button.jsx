const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-[#1DA1F2]",
  textColor = "text-[#fff]",
  borderColor = "border-[#1DA1F2]",
  fullWidth,
  link = "#", // Default to "#" if no link is provided
}) => {
  return (
    <a
      href={link}
      className={`flex justify-center items-center 
        gap-2 px-7 py-4 border text-lg leading-none rounded-full 
        ${fullWidth && `w-full`}
      ${backgroundColor} ${textColor} ${borderColor}`}
    >
      {label}
      {iconURL && (
        <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="icon" />
      )}
    </a>
  );
};

export default Button;
