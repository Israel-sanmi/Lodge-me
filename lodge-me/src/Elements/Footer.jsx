import React from "react";
import logo from "../assets/FooterLogo.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";


const Footer = () => {
  return (
    <div className="bg-[#534741] w-full h-[450px] mt-10 p-7">
      <div className="md:flex block justify-between items-center">
        <div className="flex items-center gap-5">
          <img src={logo} alt="" className="w-auto h-auto" />
          <p className="text-white md:text-md md:block hidden text-xs font-semibold">
            Our app is currently under construction <br /> You’ll get it soon
          </p>
          <p className="text-white text-center block md:hidden md:text-md text-xs font-semibold">
            Our app is currently under construction. You’ll get it soon
          </p>
        </div>
        <div>
          <button className="bg-[#A66300] my-1 md:my-0 text-white font-semibold md:text-sm text-xs py-2 px-5 rounded-3xl">
            Join Our Waiting List
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-1 text-white md:text-md text-sm font-thin">
        <div>
          <p>Products</p>
          <p>Foreign Accounts</p>
          <p>Currency Exchange</p>
          <p>Money Transfer</p>
        </div>
        <div>
          <p>Company</p>
          <p>Blog</p>
          <p>Careers ↗</p>
          <p>Support</p>
          <p>Help Center</p>
        </div>
        <div>
          <p>Legal</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Acceptable use Policy</p>
        </div>
        <div className="pt-4 md:pt-0">
          <p>Nigeria</p>
          <p>Contact Us</p>
          <div className="flex flex-wrap gap-4 pt-5">
            <img src={fb} className="w-auto h-auto" alt="" />
            <img src={twitter} className="w-auto h-auto" alt="" />
            <img src={linkedin} className="w-auto h-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
