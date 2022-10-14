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
    <div id="Info" className="py-10">
      <div>
        <Heading
          title="What we do"
          summary="Connecting you with your dream homes and lodges with professional real estate service."
          line={line2}
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center">
        <img src={smile} alt="" className="md:w-auto hidden md:block md:h-auto h-40 w-auto" />
        <div className="mt-4 mx-4 md:mx-0 md:mt-0 grid gap-5  grid-cols-1 md:grid-cols-2">
          <div>
            <div className=" bg-[#FCFCFC] w-auto h-auto md:h-72 border-2 border-[#3F3D3D1F] p-4 rounded-xl">
              <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
                <img src={neural} alt="" />
              </div>
              <div>
                <p className="font-semibold md:text-xl text-md pt-2 md:pt-0">
                  Connect you
                </p>
                <p className="md:text-sm text-xs ">
                  <span className="font-semibold">
                    Want to go for your vacation and feel as though you are
                    already welcome?
                  </span>{" "}
                  Cozzy will connect connect you with locals in your travel
                  destination. <br />
                  <p className="mt-2">
                    Not only that, you’ll be able to read about your
                    destination. <br /> Consider it inside information.
                  </p>
                </p>
              </div>
            </div>
            <div className=" bg-[#FFFBF9] mt-2 w-auto h-auto md:h-64 border-2 border-[#3F3D3D1F] p-4 rounded-xl">
              <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
                <img src={legal} alt="" />
              </div>
              <div>
                <p className="font-semibold md:text-xl text-md pt-2 md:pt-0">
                  Agent Business
                </p>
                <p className="md:text-sm text-xs ">
                  Make yourself stand out among other agents in the real estate
                  business. <br />{" "}
                  <p className="mt-2">
                    We help faciliitate your businness by enhancing your reach
                    and engagement with customers as you list with us.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-5 mt-0">
            <div className=" bg-[#FFFBF9] w-auto h-aut md:h-64 border-2 border-[#3F3D3D1F] p-4 rounded-xl">
              <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
                <img src={secure} alt="" />
              </div>
              <div>
                <p className="font-semibold md:text-xl text-md pt-2 md:pt-0">
                  Find your Dream Home
                </p>
                <p className="md:text-sm text-xs ">
                  With just few clicks, you can get your perfect home with
                  luxury and comfort all rolled in one on our properties
                  listing. <br />{" "}
                  <p className="mt-2">
                    Be a property owner faster and easier than you can say
                    Cozzy!
                  </p>
                </p>
              </div>
            </div>
            <div className=" bg-[#FCFCFC] mt-2 w-auto h-auto md:h-64 border-2 border-[#3F3D3D1F] p-4 rounded-xl">
              <div className="bg-[#FAA73287] p-2 h-14 w-14 rounded-full">
                <img src={happy} alt="" />
              </div>
              <div>
                <p className="font-semibold md:text-xl text-md pt-2 md:pt-0">
                  Perfect Travel experience
                </p>
                <p className="md:text-sm text-xs ">
                  As a traveller, you can plan your vacation right from the
                  comfort of your home by going through the vast options of
                  lodgings on our platform. <br />
                  {/* <span className="font-semibold">We can!</span> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
