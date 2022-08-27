import React from "react";
import logo from "../assets/FooterLogo.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = ({handleClose}) => {
  return (
    <div className="bg-[#534741] w-full h-[400px] mt-10 p-5 text-xs text-white">
      <div className="grid gap-2 md:grid-cols-4 grid-cols-2 md:mt-20 mt-5 md:mx-28 mx-5 place-items-center">
        <div>
          <img src={logo} alt="" />
          <p className="font-light text-xs md:mt-5 mt-2 md:leading-5 leading-snug">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex mt-2 items-center gap-4">
            <FaFacebookF className="md:w-5 h-3 w-3 cursor-pointer md:h-5 " />
            <FaInstagramSquare className="md:w-5 h-3 w-3 cursor-pointer md:h-5 " />
            <FaTwitter className="md:w-5 h-3 w-3 cursor-pointer md:h-5 " />
            <FaLinkedinIn className="md:w-5 h-3 w-3 cursor-pointer md:h-5 " />
          </div>
        </div>
        <div>
          <h1 className="md:text-lg text-[16px]">Resources</h1>
          <ul className="font-light md:mt-5 mt-2">
            <li className="md:py-1 py-0.5">Contact Us</li>
            <li className="md:py-1 py-0.5">About Us</li>
            <li className="md:py-1 py-0.5">Terms and Conditions</li>
            <li className="md:py-1 py-0.5">Privacy Policy</li>
            <li className="md:py-1 py-0.5">FAQ</li>
          </ul>
        </div>
        <div>
          <h1 className="md:text-lg text-[16px]">Community</h1>
          <ul className="font-light md:mt-5 mt-2">
            <li className="md:py-1 py-0.5">Become a agent</li>
            <li className="md:py-1 py-0.5">Buy from us</li>
            <li className="md:py-1 py-0.5">Advertise with us</li>
            <li className="md:py-1 py-0.5">Community standards</li>
          </ul>
        </div>
        <div>
          <h1 className="md:text-lg text-[14px]">Join Our waiting List</h1>
          <button
            onClick={handleClose}
            className="bg-gradient-to-r from-[#FAA530] to-[#534741] text-white text-xs rounded-sm py-2 px-4"
          >
            Join Our Waiting List
          </button>
          <p className="font-light md:mt-5 mt-2">
            Be the first to know of our platform release.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
