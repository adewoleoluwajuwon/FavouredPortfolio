import offer from "/assets/images/offer.svg";
import Button from "../Components/Button";
// import arrowRight from "/assets/icons/arrow-right.svg";
const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-w-[1440px] mx-auto"
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-containe
        w-full"
        />
      </div>
      <div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-[Palanquin] text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-[#f73d3e]">Special</span> Offer
          </h2>
          <p className="text-lg font-[Montserrat] text-[#708090] leading-7 mt-4 lg:max-w-lg">
            From premium quality to innovative design, we have it all. Get your
            hands on the latest collection of Nike shoes. We offer unbeatable
            values that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg font-[Montserrat] text-[#708090] leading-7">
            Navigate and explore our latest collection of Nike shoes, designed
            to fulfill your active lifestyle. Providing quality, innovation and
            a touch. Your journey to a healthy lifestyle starts here.
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="View details" />
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              borderColor="border-[#708090]"
              textColor="text-[#708090]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
