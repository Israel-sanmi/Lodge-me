import React from "react";
import feedImg from "../assets/feedImg.png";
import avatarImg from "../assets/avatarImg.png";
import { StarIcon } from "@heroicons/react/solid";


const Card = ({feedImg, avatarImg, summary, avatarName}) => {
  return (
    <div className=" md:w-96 w-80">
      <div className="bg-[#F9F9F9] drop-shadow-xl border border-[#F9A32E] rounded-md">
        <div>
          <img src={feedImg} alt="" className="w-auto h-62" />
        </div>
        <div className="pl-3">
          <div>
            <p className="md:text-md text-xs leading-5 pt-2">
              {summary}
            </p>
            <div className="flex flex-wrap gap-1 py-2">
              <StarIcon className="w-5 h-5 text-[#FFA500]" />
              <StarIcon className="w-5 h-5 text-[#FFA500]" />
              <StarIcon className="w-5 h-5 text-[#FFA500]" />
              <StarIcon className="w-5 h-5 text-[#FFA500]" />
              <StarIcon className="w-5 h-5 text-[#FFA500]" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <img src={avatarImg} alt="" className="w-auto h-14" />
            <p className="md:text-md text-sm font-semibold mt-2">
              {avatarName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
