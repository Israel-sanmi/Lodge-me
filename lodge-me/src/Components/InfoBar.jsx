import React from "react";
import support from "../assets/support.png";
import review from "../assets/review.png";
import trophy from "../assets/trophy.png";

const InfoBar = () => {
  return (
    
    <div className="bg-[#F6FBF8] md:my-10 my-0 drop-shadow-md rounded-md grid md:grid-cols-3 grid-cols-1 place-items-center py-6 mx-3 md:mx-0">
      <div className="flex flex-wrap items-center">
        <img src={review} alt="" className="w-auto h-auto" />
        <div>
        
          <p className="font-sembold text-sm font-bold py-1">1000+ of reviews</p>
          <p className="font-light text-xs w-40">
            Stellar reviews from previous users that have found their perfect
            homes and luxurious lodgings on Cozzy
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center py-4 md:px-0">
        <img src={support} alt="" />
        <div>
          <p className="font-sembold text-sm font-bold">24/7 Support</p>
          <p className="font-light text-xs w-40">
            Get help from our contact support throughout the day and week. We
            are always here to help!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        <img src={trophy} alt="" />
        <div>
          <p className="font-sembold text-sm font-bold">And more!</p>
          <p className="font-light text-xs w-40">
            A barrage of services we offer besides properties and lodgings that
            will make you happy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
