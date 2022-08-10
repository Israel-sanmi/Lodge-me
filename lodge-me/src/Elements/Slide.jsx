import React from "react";
import Card from "../Elements/Card";
import feedImg from "../assets/feedImg.png";
import feedImg2 from "../assets/feedImg2.png";
import avatarImg from "../assets/avatarImg.png";
import avatarImg1 from "../assets/avatarImg1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gold" }}
        onClick={onClick}
      />
    );
  }
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
        style={{ ...style, display: "block", background: "gold"}}
        onClick={onClick}
      />
    );
  }
  function MobilePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",}}
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
    <div className="md:mx-10 mx-0">
      <Slider {...settings}>
        <div className="pl-4 md:ml-28 ml-0">
          <Card
            feedImg={feedImg}
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus egestas porttitor amet ac lacus magna sit amet."
            avatarImg={avatarImg}
            avatarName="Kennystore of Lorem Ipseum"
          />
        </div>
        <div className="pl-4">
          <Card
            feedImg={feedImg2}
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus egestas porttitor amet ac lacus magna sit amet."
            avatarImg={avatarImg1}
            avatarName="Kennystore of Lorem Ipseum"
          />
        </div>
        <div className="pl-4 md:ml-28 ml-0">
          <Card
            feedImg={feedImg}
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus egestas porttitor amet ac lacus magna sit amet."
            avatarImg={avatarImg}
            avatarName="Kennystore of Lorem Ipseum"
          />
        </div>
        <div className="pl-4">
          <Card
            feedImg={feedImg2}
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus egestas porttitor amet ac lacus magna sit amet."
            avatarImg={avatarImg1}
            avatarName="Kennystore of Lorem Ipseum"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
