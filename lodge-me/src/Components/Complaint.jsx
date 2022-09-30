import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Complaint = () => {
  const form = useRef();

  const [send, setSend] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3dhx4j9",
        "template_cm99iwl",
        form.current,
        "sUJvKhFHf6-BrMqSQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center"
      >
        <input
          type="text"
          name="user_message"
          // name="Complaint"
          placeholder="Need Support or have a complaint, type it here"
          className="border-2 md:w-[1000px] w-80 text-xs md:text-sm md:py-3 py-2 text-center border-[#544036] rounded-3xl"
        />
        <button
          type="submit"
          className="bg-[#A66300] my-3 cursor-pointer text-white font-bold rounded-3xl md:w-80 w-48 text-xs md:text-md py-3"
        >
          {send ? "Sent!" : "Send Now"}
        </button>
      </form>
    </div>
  );
};

export default Complaint;
