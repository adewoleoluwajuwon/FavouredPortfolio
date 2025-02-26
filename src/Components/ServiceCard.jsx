const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[350px] sm:min-w-[350px]
      w-full rounded-[20px] shadow-[0_20px_30px_rgba(0,0,0,0.25)] px-10 py-16"
    >
      <div className="flex justify-center items-center w-11 h-11 bg-[#FF4040] rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-[palanquin] text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p
        className="mt-3 break-words font-[montserrat] text-lg 
        leading-normal text-[#708090]"
      >
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
