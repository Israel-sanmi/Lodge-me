import React from "react";
import neural from "../assets/neural.png";
import line from "../assets/line.png";
import Heading from "../Elements/Heading";
import productImg from "../assets/productImg.png";

const Products = ({handleClose}) => {
  return (
    <div>
      <div>
        <Heading
          title="We want to serve you"
          line={line}
          summary="Our products have been tailored to bring you satisfaction and coziness"
        />
      </div>
      <div className="">
        <div className="flex flex-wrap items-center justify-center gap-10 pt-10 px-5">
          <div className="md:hidden block">
            <img
              src={productImg}
              alt=""
              className="w-auto md:h-[500px] h-auto"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div>
              <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
                <img src={neural} alt="" className="w-auto h-auto" />
              </div>
              <h2 className="font-bold md:text-lg text-md py-1">
                App in Progress
              </h2>
              <p className="font-normal md:text-sm text-xs leading-4 pb-2">
                Centered on the goal to make real estate life easier, our
                application is in the development stage. This will be a reliable
                platform that allows users who are agents to deal in real estate
                and facilitate their agent experience. Additionally, it will
                also deliver the luxurious yet comfortable living and lodging
                experiences just with your finger tap
              </p>
              <button
                onClick={handleClose}
                className="font-semibold md:text-md text-sm bg-[#FBAE39] text-white py-2 w-48 rounded-md"
              >
                Join Our Waiting List
              </button>
            </div>
            {/* ------- */}
            <div className="pt-16">
              <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
                <img src={neural} alt="" className="w-auto h-auto" />
              </div>
              <h2 className="font-bold md:text-lg text-md py-1">
                Till then, use our human service
              </h2>
              <p className="font-normal md:text-sm text-xs leading-4 pb-2">
                But, in the meantime, you can make use of our human service in
                contacting us
              </p>
              <button className="font-semibold md:text-md text-sm bg-[#534741] w-48 text-white py-2 rounded-md">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:block hidden">
            <img
              src={productImg}
              alt=""
              className="w-auto md:h-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
