import React from "react";
import Card from "../Elements/Card";
import feedImg from "../assets/feedImg.png";
import feedImg2 from "../assets/feedImg2.png";
import feedImg3 from "../assets/feedImg3.jpg";
import feedImg4 from "../assets/feedImg4.jpeg";
import avatarImg from "../assets/avatarImg.png";
import avatarImg1 from "../assets/avatarImg1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {

  function MobileNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "gold" }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "gold" }}
        onClick={onClick}
      />
    );
  }
  function MobilePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    // className: "slider variable-width",
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: "60px",
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <MobileNextArrow />,
          prevArrow: <MobilePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="md:ml-44 ml-10">
      <Slider {...settings}>
      <div className="mb-4 md:mb-0">
        <Card
          feedImg={feedImg}
          summary="I never thought getting a home for my family would be such an easy process but with Cozzy, I was able to get the home I have pictured one too many times"
          avatarImg={avatarImg}
          avatarName="Adebayo Chukwu"
        />
      </div>
      <div className="">
        <Card
          feedImg={feedImg2}
          summary="Planning a family vacation could never be easy. We got the best reservations for the trip, even our paralepgic grandmother was well catered for. It was truly a home away from home experience."
          avatarImg={avatarImg1}
          avatarName="Halima Osaze"
        />
      </div>
      <div className="mt-4 md:mt-0">
        <Card
          feedImg={feedImg3}
          summary="Planning a family vacation could never be easy. We got the best reservations for the trip, even our paralepgic grandmother was well catered for. It was truly a home away from home experience."
          avatarImg={avatarImg1}
          avatarName="Racheal Michaels"
        />
      </div>
      <div className="mt-4 md:mt-0">
        <Card
          feedImg={feedImg4}
          summary="I was able to get fast client for my apartment."
          avatarImg={avatarImg}
          avatarName="Samuel Olawale"
        />
      </div>
      </Slider>
    </div>
  );
};

export default Slide;
