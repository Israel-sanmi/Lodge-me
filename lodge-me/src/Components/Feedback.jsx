import React from "react";
import Heading from "../Elements/Heading";
import line2 from "../assets/line.png";
import Slide from "../Elements/Slide";


const Feedback = () => {
    
  return (
    <div className="bg-[#F6FBF8] rounded-md md:mx-2 mx-0 mt-10 mb-16 pb-16">
      <div>
        <Heading
          title="What they say"
          summary="What people who use our manual services say about us are our testimonies and our pride"
          line={line2}
        />
      </div>
        <Slide />
    </div>
  );
};

export default Feedback;
