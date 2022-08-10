import React from "react";
import support from "../assets/support.png";
import review from "../assets/review.png";
import trophy from "../assets/trophy.png";

const InfoBar = () => {
  return (
    <div className="bg-[#F6FBF8] drop-shadow-md rounded-md flex flex-wrap justify-around py-6 mx-4 md:mx-0">
      <div className="flex flex-wrap items-center">
        <img src={review} alt="" className="w-auto h-auto" />
        <div>
          <p className="font-sembold text-sm py-1">1000+ of reviews</p>
          <p className="font-light text-xs">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center py-4 md:px-0">
        <img src={support} alt="" />
        <div>
          <p className="font-sembold text-sm">24/7 Support</p>
          <p className="font-light text-xs">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <img src={trophy} alt="" />
        <div>
          <p className="font-sembold text-sm">And more!</p>
          <p className="font-light text-xs">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
