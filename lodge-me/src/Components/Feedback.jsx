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
          summary="Hear from people who have used our manual services"
          line={line2}
        />
      </div>
      <Slide />
    </div>
  );
};

export default Feedback;
