import React from "react";
import globe from "../assets/globe.png";
import { useEffect } from "react";
const Hero = ({ handleClose }) => {
  return (
    <div className="flex flex-wrap items-center justify-around pt-10 md:pt-0">
      <div className="h-40 bg-yellow-200 rounded-full filter blur-3xl absolute md:left-60 left-0 md:-mt-40 -mt-0 w-40"></div>

      <div className="relative md:w-1/2 w-full">
        <h1 className="font-bold text-4xl text-center hidden md:block md:text-left">
          Looking for <span className="text-[#534741]">Luxury</span> and{" "}
          <span className="text-[#FAA530]">Comfort?</span> <br /> Cozzy’s got
          you!
        </h1>
        <h1 className=" font-bold leading-5 text-xl uppercase text-center block md:hidden">
          Looking for <span className="text-[#534741]">Luxury</span> and{" "}
          <span className="text-[#FAA530]">Comfort?</span> Cozzy’s got you!
        </h1>
        <p className="font-normal py-4 md:text-lg hidden md:block text-sm text-center md:text-left">
          Connecting you to your dream properties. You can get the perfect and
          comfortable homes, either for residency or as a vast traveler looking
          for a home away from home experience.
        </p>
        <p className="font-normal text-[#534741] py-4 md:text-lg leading-4 text-sm block md:hidden text-center md:text-left">
          Connecting you to your dream properties. You can get the perfect and
          comfortable homes, either for residency or as a vast traveler looking
          for a home away from home experience.
        </p>
        <div className="md:mx-0 mx-4">
          <button
            onClick={handleClose}
            className="w-full md:w-auto md:text-md text-sm bg-gradient-to-r from-[#895711] to-[#5c3a29] text-white text-md rounded-2xl py-2 px-6"
          >
            Join Our Waiting List
          </button>
        </div>
      </div>
      <div className="mb-0">
        <img
          src={globe}
          alt=""
          className="w-auto h-[500px] object-contain relative animate-pulse"
        />
      </div>
      <div className="h-40 bg-blue-200 rounded-full filter blur-3xl absolute md:mt-56 mt-0 w-40"></div>
      <div className="h-40 bg-yellow-100 rounded-full filter blur-3xl absolute md:ml-96 ml-0 w-40"></div>
    </div>
  );
};

export default Hero;
