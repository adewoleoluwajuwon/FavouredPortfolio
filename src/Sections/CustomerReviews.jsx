import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section
      className="max-w-[1440px] m-auto 
  "
    >
      <h3 className="font-[palanquin] text-center text-4xl font-bold">
        What Our
        <span className="text-[#FF4040] ">Customers</span>
        Say?
      </h3>
      <p
        className="font-[montserrat] text-[#708090] 
      text-center text-lg leading-7"
      >
        Hear genuine stories from our customers around the world about their
        experiences with us.
      </p>
      <div
        className="flex flex-1 justify-evenly mt-24 items-center
      max-lg:flex-col gap-14"
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
