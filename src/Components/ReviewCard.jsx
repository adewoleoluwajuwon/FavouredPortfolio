import star from "/assets/icons/star.svg";

const ReviewCard = ({ imgURL, customerName, rating, feedback, category }) => {
  return (
    <div
      className="flex justify-center items-center
  flex-col "
    >
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p
        className="mt-6 max-w-sm text-center 
      font-[montserrat] text-[#708090s] text-lg leading-7"
      >
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-[#708090s]">{rating}</p>
      </div>
      <h3 className="mt-1 font-[palanquin] text-3xl text-center font-bold">
        {customerName}
        {category && <span className="text-[#1D4ED8]"> ({category})</span>}
      </h3>
    </div>
  );
};

export default ReviewCard;
