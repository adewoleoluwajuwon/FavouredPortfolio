import { useState } from "react";
import Button from "../Components/Button";
import FavourCard from "../Components/FavourCard";
import { favourImages, statistics } from "../constants";
import arrowRight from "/assets/icons/arrow-right.svg";
import bigfavour1 from "/assets/images/bigfavour1.jpg";

const Hero = () => {
  const [favourImg, setFavourImg] = useState(bigfavour1);
  return (
    <section
      id="Home"
      className="w-full flex justify-center 
      xl:flex-row flex-col min-h-screen gap-10 sm:px-16 px-8 max-w-[1440px] m-auto pt-20"
    >
      {/* Left Content */}
      <div
        className="relative xl:w-2/5 flex flex-col
       justify-center items-start w-full max-xl:sm:px-16 px-8"
      >
        <p className="text-xl font-[Montserrat] text-[#3B82F6]">
          Inspiring Young Minds
        </p>
        <h1 className="mt-10 font-[Palanquin] text-5xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Bright Futures
          </span>{" "}
          <br />
          <span className="text-[#3B82F6] inline-block mt-7">
            with Mrs. Favour
          </span>
        </h1>
        <p className="text-lg font-[Montserrat] text-[#4B5563] leading-8 mt-6 mb-14 sm:max-w-sm">
          Helping children grow through engaging lessons, creativity, and a
          passion for learning.
        </p>

        <Button label="Explore My Teaching Approach" iconURL={arrowRight} link="#about-us" />

        <div className="flex flex-wrap justify-center items-center w-full mt-20 gap-10 lg:flex-row sm:flex-col">
          {statistics.map((stat) => (
            <div
              key={stat.label}
              className="text-center flex flex-col items-center"
            >
              <p className="text-4xl font-[Palanquin] font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-[Montserrat] text-[#4B5563]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="relative flex flex-1 justify-center items-center
        xl:min-h-screen max-xl:py-40 bg-[#fff]
        bg-hero bg-cover bg-center bg-gradient-to-r from-yellow-50 to-blue-100"
      >
        <img
          src={favourImg}
          alt="Teacher in Classroom"
          className="rounded-2xl border-2 border-[#FDCB58] shadow-lg shadow-gray-400 
             w-[600px] h-[500px] object-cover z-9 mb-20
             max-lg:w-[500px] max-lg:h-[450px] 
             max-md:w-[400px] max-md:h-[350px] max-md:ml-10
             max-sm:w-[320px] max-sm:h-[280px] max-sm:ml-4"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[7%] sm:left-[10%] max-sm:px-6">
          {favourImages.map((favour) => (
            <div key={favour}>
              <FavourCard
                imageURL={favour}
                changeBigFavourImage={(favour) => {
                  setFavourImg(favour);
                }}
                favourImg={favourImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
