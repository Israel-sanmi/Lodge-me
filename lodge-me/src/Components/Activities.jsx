import React from "react";
import line2 from "../assets/line.png";
import smile from "../assets/smile.png";
import neural from "../assets/neural.png";
import legal from "../assets/legal.png";
import secure from "../assets/secure.png";
import happy from "../assets/happy.png";
import Heading from "../Elements/Heading";
const Activities = () => {
  return (
    <div className="py-10">
      <div>
        <Heading
          title="What we do"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
          line={line2}
        />
      </div>
      <div className="flex flex-wrap justify-around items-center">
        <img src={smile} alt="" className="w-auto h-auto" />
        <div className="mt-4 md:mt-0 grid md:grid-cols-2 gap-5 grid-cols-1">
          <div>
            <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
              <img src={neural} alt="" />
            </div>
            <div>
              <p className="font-semibold text-xl">Connect you</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                Lorem ipsum dolor sit <br /> amet, consectetur adipiscing elit{" "}
                <br /> Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
              <img src={legal} alt="" />
            </div>
            <div>
              <p className="font-semibold text-xl">Legal Documents</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                Lorem ipsum dolor sit <br /> amet, consectetur adipiscing elit{" "}
                <br /> Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
              <img src={secure} alt="" />
            </div>
            <div>
              <p className="font-semibold text-xl">Secure your payment</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                Lorem ipsum dolor sit <br /> amet, consectetur adipiscing elit{" "}
                <br /> Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
              <img src={happy} alt="" />
            </div>
            <div>
              <p className="font-semibold text-xl">Make you happy</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                Lorem ipsum dolor sit <br /> amet, consectetur adipiscing elit{" "}
                <br /> Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
