import { useState } from "react";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { shoes, statistics } from "../constants";
import arrowRight from "/assets/icons/arrow-right.svg";
import bigShoe1 from "/assets/images/big-shoe1.png";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="Home"
      className="w-full flex justify-center 
      xl:flex-row flex-col min-h-screen gap-10 sm:px-16 px-8 max-w-[1440px] m-auto pt-20"
    >
      <div
        className="relative xl:w-2/5 flex flex-col
       justify-center items-start w-full max-xl:sm:px-16 px-8"
      >
        <p className="text-xl font-[Monteserrate] text-[#f73d3e]">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-[Palanquin] text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival{" "}
          </span>{" "}
          <br />
          <span className="text-[#f73d3e] inline-block mt-7">Nike</span>
          Shoes
        </h1>
        <p className="text-lg font-[Montserrat] text-[#708090] leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="shop now..." iconURL={arrowRight} />

        <div
          className="flex justify-start items-start 
        flex-wrap w-full mt-20 ga-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-[Palanquin] font-bold ">
                {stat.value}
              </p>
              <p className="leading-7 font-[Montserrat] text-[#708090]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex 
        flex-1 justify-center items-center
        xl:min-h-screen  max-xl:py-40 bg-[#fff]
        bg-hero bg-cover bg-center bg-gradient-to-r from-blue-50 to-blue-100"
      >
        <img src={bigShoeImg} alt="shoe-colection" width={600} height={500} />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[7%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imageURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
