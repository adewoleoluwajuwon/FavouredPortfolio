import offer from "/assets/images/offer.jpg";
import Button from "../Components/Button";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-w-[1440px] mx-auto"
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full rounded-2xl"
          alt="Special Educational Offer"
        />
      </div>
      <div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-[Palanquin] text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-[#1D4ED8]">Exclusive</span> Learning Offer
          </h2>
          <p className="text-lg font-[Montserrat] text-[#4B5563] leading-7 mt-4 lg:max-w-lg">
            Give your pupils a head start with my personalized early learning programs! Sign up today for a free trial session and explore engaging, structured lessons designed for young minds.
          </p>
          <p className="mt-6 lg:max-w-lg font-[Montserrat] text-[#4B5563] leading-7">
            Whether at home, in the classroom or online, my innovative approach ensures every child learns at their own pace, fostering curiosity and confidence.
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Enroll Now" />
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              borderColor="border-[#1D4ED8]"
              textColor="text-[#1D4ED8]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
