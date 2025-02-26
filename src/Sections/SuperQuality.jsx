import Button from "../Components/Button";
import shoe8 from "/assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full 
      max-w-[1440px] mx-auto mt-20 lg:mt-32 pl-10 pr-10 lg:pl-0 lg:pr-0"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-[Palanquin] text-4xl capitalize font-bold lg:max-w-lg">
          We Provide your
          <span className="text-[#f73d3e]">Super Quality</span>
          <span className="text-[#f73d3e]">Quality</span> Shoes
          <br />
          <span className="text-[#f73d3e] inline-block mt-7">Nike</span>
          Shoes
        </h2>
        <p className="text-lg font-[Montserrat] text-[#708090] leading-7 mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our Nike collection is designed
          for your active lifestyle. Providing quality, innovation and a touch
          of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg font-[Montserrat] text-[#708090] leading-7">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
