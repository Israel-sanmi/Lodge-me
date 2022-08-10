import React from "react";
import neural from "../assets/neural.png";
import line from "../assets/line.png";
import Heading from "../Elements/Heading";
import productImg from "../assets/productImg.png";

const Products = () => {
  return (
    <div>
      <div>
        <Heading
          title="Our Products"
          line={line}
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
        />
      </div>
      <div className="">
        <div className="flex flex-wrap items-center justify-center gap-10 pt-10 px-5">
          <div>
            <div>
              <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
                <img src={neural} alt="" className="w-auto h-auto" />
              </div>
              <h2 className="font-bold text-lg py-1">
                We’re going App soon; Work in Progress
              </h2>
              <p className="font-normal text-sm leading-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem{" "}
                <br />
                ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum{" "}
                <br />
                dolor sit.Lorem ipsum dolor sit amet, consectetur adip Lorem
                ipsum <br />
                dolor sit amet, consectetur ad Lorem ipsum dolor sit.
              </p>
              <button className="font-semibold text-md bg-[#FBAE39] text-white py-2 w-48 rounded-md">
                Join Our Waiting List
              </button>
            </div>
            {/* ------- */}
            <div className="pt-16">
              <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
                <img src={neural} alt="" className="w-auto h-auto" />
              </div>
              <h2 className="font-bold text-lg py-1">
                Till then, use our human service
              </h2>
              <p className="font-normal text-sm leading-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem{" "}
                <br />
                ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum{" "}
                <br />
                dolor sit.Lorem ipsum dolor sit amet, consectetur adip Lorem
                ipsum <br />
                dolor sit amet, consectetur ad Lorem ipsum dolor sit.
              </p>
              <button className="font-semibold text-md bg-[#534741] w-48 text-white py-2 rounded-md">
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <img src={productImg} alt="" className="w-auto md:h-[500px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
