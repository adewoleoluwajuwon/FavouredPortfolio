import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-w-[1440px] m-auto">
      <h3 className="font-[Palanquin] text-center text-4xl font-bold">
        What my 
        <span className="text-[#1D4ED8]"> Community</span> Says!
      </h3>
      <p className="font-[Montserrat] text-[#4B5563] text-center text-lg leading-7">
        Discover how my learning approach impacts students, parents, and schools.
      </p>
      
      <div className="flex flex-1 justify-evenly mt-16 items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.reviewerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            category={review.category} // Parent, School, or Student
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
