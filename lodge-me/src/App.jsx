import Activities from "./Components/Activities";
import Complaint from "./Components/Complaint";
import Feedback from "./Components/Feedback";
import Hero from "./Components/Hero";
import InfoBar from "./Components/InfoBar";
import MobileNav from "./Components/MobileNav";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Footer from "./Elements/Footer";
import { useEffect } from "react";
import { useState } from "react";
import RegModal from "./Modal/RegModal";
import Copyright from "./Elements/Copyright";

function App() {
  // useEffect(() => {
  //   const timer = setTimeout(() => Hero(), 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsShown(true);
    }, 15000);
  }, []);

  const [close, setClose] = useState(true);
  const handleClose = () => {
    setClose((prev) => !prev);
  };

  return (
    <div className="bg-[#EAEAEA]">
      <div className="md:px-10 px-0">
        <Navbar />
        {isShown && (
          <>{close && <RegModal close={close} handleClose={handleClose} />}</>
        )}
        <Hero handleClose={handleClose} />
        <InfoBar />
        <Activities />
        <Products handleClose={handleClose} />
        <Feedback />
        <Complaint />
      </div>
      <Footer handleClose={handleClose} />
      <Copyright />
    </div>
  );
}

export default App;
