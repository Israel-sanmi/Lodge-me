import React from "react";
import neural from "../assets/neural.png";
import line from "../assets/line.png";
import Heading from "../Elements/Heading";
import productImg from "../assets/productImg.png";

const Products = ({ handleClose }) => {
  return (
    <div>
      <div>
        <Heading
          title="We want to serve you"
          line={line}
          summary="Our products have been tailored to bring you satisfaction and cozzy-ness"
        />
      </div>
      <div className="">
        <div>
          <div className=" bg-back h-screen text-white bg-no-repeat bg-cover w-full">
            <div className="flex flex-col pt-20 pl-10 ">
              <div className="">
                <img src={neural} alt="" className="w-10 h-10" />
                <p className="md:text-lg text-md font-semibold">
                  We’re going App soon; <br /> It’s a work in Progress
                </p>
                {/* <p className="md:text-sm text-xs font-light py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem{" "}
                  <br />
                  ipsum dolor sit amet, consectetur adipiscing.
                </p> */}
                <button
                  onClick={handleClose}
                  className="bg-[#FBAE39] mt-20 font-bold text-sm md:text-md rounded-2xl py-2 cursor-pointer px-3"
                >
                  Join our waiting List
                </button>
              </div>
              <div className="mt-20">
                <p className="md:text-sm text-xs">
                  Till then, use our human services
                </p>

                <a target="_blank" href="https://api.whatsapp.com/send?phone=2348166366418&text=">
                  <button className="bg-none border md:text-md text-sm mt-2 border-[#FBAE39] rounded-2xl py-1 px-9 cursor-pointer">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
