import { XIcon } from "@heroicons/react/solid";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const RegModal = ({ handleClose, close }) => {
  const form = useRef();

  const [popResult, setpopResult] = useState(false);
  const [name, setName] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_3dhx4j9",
        "template_xdezh0i",
        form.current,
        "sUJvKhFHf6-BrMqSQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setpopResult(true);
          setName(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  // const onSubmit = (data) => console.log(data);

  return (
    <div className="fixed w-full h-screen z-10 bg-black/50 inset-0 flex justify-center items-center">
      <div className="">
        <div className="inset-0 md:mt-20 mt-10 lg:ml-96 ml-0 fixed h-[500px] lg:w-1/3 w-full rounded-3xl flex justify-center items-center p-10 backdrop-blur-md bg-white z-10">
          <div>
            <div>
              <div className="">
                <div className="flex justify-end">
                  <XIcon
                    className="h-5 w-5 text-red-500 cursor-pointer"
                    onClick={handleClose}
                  />
                </div>
                <div>
                  <h1 className="font-bold text-2xl">Join Our Waiting List</h1>
                  <p className="text-xs leading-tight text-left">
                    Keep an eye on the future, Stay connected <br />
                    Stay Updated!
                  </p>
                  <p className="text-red-500 font-semibold text-sm">{popResult ? "Done!" : ""}</p>
                </div>
              </div>
            </div>
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="py-4">
                  <p className="font-bold text-xs">
                    Name <span className="text-red-500">*</span>
                  </p>
                  <input
                    className="bg-[#F9FAFF] capitalize border border-[#DEE6FF] rounded-md py-1 w-full px-2"
                    // {...register("Name", { required: true })}
                    name="user_name"
                  />
                  {/* <p className="text-sm text-red-500">
                    {errors.Name?.type === "required" && "Name is required"}
                  </p> */}
                </div>

                <div className="py-4">
                  <p className="font-bold text-xs">
                    Email Address <span className="text-red-500">*</span>
                  </p>
                  <input
                    className="bg-[#F9FAFF] border border-[#DEE6FF] rounded-md py-1 w-full px-2"
                    // {...register("mail", {
                    //   required: "Email Address is required",
                    // })}
                    name="user_email"
                  />
                  {/* <p className="text-sm text-red-500">{errors.mail?.message}</p> */}
                </div>

                <div className="py-4">
                  <p className="font-bold text-xs">
                    Phone Number <span className="text-red-500">*</span>
                  </p>
                  <input
                    className="bg-[#F9FAFF] border border-[#DEE6FF] rounded-md py-1 w-full px-2"
                    // {...register("phone number", {
                    //   required: "Phone Number is required",
                    // })}
                    name="user_phone"
                  />
                  {/* <p className="text-sm text-red-500">{Number.mail?.message}</p> */}
                </div>

                {/* <div className="py-4">
                  <p className="font-bold text-xs">
                    Are you a buyer or an agent{" "}
                    <span className="text-red-500">*</span>
                  </p>
                  <input
                    className="bg-[#F9FAFF] border border-[#DEE6FF] rounded-md py-1 w-full px-2"
                    {...register("Title", { required: true })}
                  />
                  <p className="text-sm text-red-500">
                    {errors.Name?.type === "required" && "Title is required"}
                  </p>
                </div> */}

                <input
                  type="submit"
                  // value="Submit"
                  value={popResult ? "Done!" : "Submit"}
                  disabled={popResult}
                  // {res}
                  className="text-white text-xs bg-gradient-to-r from-green-400 to-green-700 py-2 px-10 font-bold cursor-pointer rounded-2xl"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegModal;
