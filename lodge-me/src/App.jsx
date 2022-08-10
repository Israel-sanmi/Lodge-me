import Activities from "./Components/Activities";
import Complaint from "./Components/Complaint";
import Feedback from "./Components/Feedback";
import Hero from "./Components/Hero";
import InfoBar from "./Components/InfoBar";
import MobileNav from "./Components/MobileNav";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Footer from "./Elements/Footer";

function App() {
  return (
    <div className="bg-[#EAEAEA]">
      <div className="md:px-10 px-0">
        <Navbar />
        <Hero />
        <InfoBar />
        <Activities/>
        <Products />
        <Feedback />
        <Complaint />
      </div>
      <Footer />
    </div>
  );
}

export default App;
