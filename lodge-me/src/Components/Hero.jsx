import React from "react";
import globe from "../assets/globe.png";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-around pt-10 md:pt-0">
      <div className="h-40 bg-yellow-200 rounded-full filter blur-3xl absolute md:left-60 left-0 md:-mt-40 -mt-0 w-40"></div>

      <div className="relative">
        <h1 className="font-bold text-4xl text-center hidden md:block md:text-left">
          Connecting you to your <br /> dream properties
        </h1>
        <h1 className="font-bold text-4xl text-center block md:hidden">
          Connecting you to your dream properties
        </h1>
        <p className="font-normal py-4 text-lg text-center md:text-left">
          Connecting you to your dream <br /> properties, connecting you to{" "}
          <br /> your dream properties
        </p>
        <div className="md:mx-0 mx-4">
          <button className="w-full md:w-auto bg-gradient-to-r from-[#FAA530] to-[#534741] text-white text-md rounded-sm py-2 px-6">
            Join Our Waiting List
          </button>
        </div>
      </div>
      <div className="mb-0">
        <img
          src={globe}
          alt=""
          className="w-auto h-[500px] object-contain relative"
        />
      </div>
      <div className="h-40 bg-blue-200 rounded-full filter blur-3xl absolute md:mt-56 mt-0 w-40"></div>
      <div className="h-40 bg-yellow-100 rounded-full filter blur-3xl absolute md:ml-96 ml-0 w-40"></div>
    </div>
  );
};

export default Hero;
