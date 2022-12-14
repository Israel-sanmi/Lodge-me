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
    <div
      id="Contact"
      className="bg-[#534741] w-full h-[400px] mt-10 p-5 text-xs text-white"
    >
      <div className="grid gap-2 md:grid-cols-4 grid-cols-2 md:mt-20 mt-5 md:mx-28 mx-2 place-items-center">
        <div>
          <img src={logo} alt="" className="w-auto h-20" />
          <div className="font-light text-xs md:mt-5 mt-2 md:leading-5 leading-snug">
            <p>
              Facebook{" "}
              <a href="https://web.facebook.com/profile.php?id=100085385627074">
                Cozzy_app
              </a>
            </p>
            <p>
              Twitter <a href="https:/twitter.com/cozzy_app">Cozzy_app</a>
            </p>
            <p>
              Instagram{" "}
              <a href="https://www.instagram.com/cozzy_app/">Cozzy_app</a>
            </p>
          </div>
          <div className="flex mt-2 items-center gap-4">
            <a href="https://web.facebook.com/profile.php?id=100085385627074">
              <FaFacebookF className="md:w-5 h-3 w-3 cursor-pointer md:h-5 " />
            </a>
            <a href="https://www.instagram.com/cozzy_app/">
              <FaInstagramSquare className="md:w-5 h-3 w-3 cursor-pointer md:h-5 " />
            </a>
            <a href="https:/twitter.com/cozzy_app">
              <FaTwitter className="md:w-5 h-3 w-3 cursor-pointer md:h-5 " />
            </a>
            {/* <FaLinkedinIn className="md:w-5 h-3 w-3 cursor-pointer md:h-5 " /> */}
          </div>
        </div>
        <div>
          <h1 className="md:text-lg font-semibold text-[16px]">Resources</h1>
          <ul className="font-light md:mt-5 mt-2">
            <li className="md:py-1 py-0.5">Contact Us</li>
            <li className="md:py-1 py-0.5">About Us</li>
            <li className="md:py-1 py-0.5">Terms and Conditions</li>
            <li className="md:py-1 py-0.5">Privacy Policy</li>
            <li className="md:py-1 py-0.5">FAQ</li>
          </ul>
        </div>
        <div>
          <h1 className="md:text-lg font-semibold text-[16px]">Community</h1>
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
            className="bg-gradient-to-r from-[#FAA530] to-[#534741] text-white text-[10px] md:text-sm rounded-sm py-2 px-4"
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
