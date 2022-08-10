import React from "react";

const Complaint = () => {
  return (
    <div>
      <form className="flex flex-col justify-center items-center">
        <input
          type="text"
          name="Complaint"
          placeholder="Need Support or have a complaint, type it here"
          className="border-2 md:w-[1000px] w-80 text-xs md:text-sm py-3 text-center border-[#544036] rounded-3xl"
        />
        <button className="bg-[#A66300] my-3 cursor-pointer text-white font-bold rounded-3xl md:w-80 w-48 text-sm md:text-md py-3">Send Now</button>
      </form>
    </div>
  );
};

export default Complaint;
