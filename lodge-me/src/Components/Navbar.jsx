import logo from "../assets/mainlogo.png";
import MobileNav from "./MobileNav";

const Navbar = () => {
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
    <div className=" md:px-24 px-0">
      <div className="md:flex justify-between items-center hidden pt-10">
        <div className="flex gap-2 items-center">
          <a href="/">
            <img src={logo} alt="" className="w-32 h-auto" />
          </a>
          {/* <img src={logoText} alt="" /> */}
        </div>
        <div className="">
          <ul className="flex gap-16 font-semibold">
            <a
              href="/"
              // onClick={HomeScroll}
              className="cursor-pointer hover:text-[#FAA530]"
            >
              Home
            </a>
            <li
              onClick={Activities}
              className="cursor-pointer hover:text-[#FAA530]"
            >
              What we do
            </li>
            <li className="cursor-pointer hover:text-[#FAA530]">
              Our Products
            </li>
            <li
              onClick={Review}
              className="cursor-pointer hover:text-[#FAA530]"
            >
              What they say
            </li>
            <li
              onClick={Contact}
              className="cursor-pointer hover:text-[#FAA530]"
            >
              Contact Us
            </li>
          </ul>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
