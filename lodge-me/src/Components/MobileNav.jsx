import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import logo from "../assets/mainlogo.png";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const HomeScroll = () => {
    const element = document.getElementById("Home");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const Activities = () => {
    const element = document.getElementById("Info");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const Review = () => {
    const element = document.getElementById("Review");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const Contact = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="md:hidden block">
      <div className="w-full p-5 z-10 bg-gray-200 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" className=" w-20 h-auto" />
          {open ? (
            <XIcon
              className="w-6 h-6 transition-all text-[#f7931e]"
              onClick={handleClick}
            />
          ) : (
            <MenuIcon
              className="w-7 h-7 transition-all text-[#f7931e]"
              onClick={handleClick}
            />
          )}
        </div>
        {open && (
          <div>
            <ul className=" flex flex-col items-center gap-5 font-light">
              <li onClick={HomeScroll} className="">
                Home
              </li>
              <li onClick={Activities} className="">
                What we do
              </li>
              <li className="">Our Products</li>
              <li onClick={Review} className="">
                What they say
              </li>
              <li onClick={Contact} className="">
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
