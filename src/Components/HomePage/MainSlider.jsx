import React, { useState, useEffect } from "react";
import "./home.css";

const slides = [
  {
    imgSrc:
      "https://image.tmdb.org/t/p/original/4CcUgdiGe83MeqJW1NyJVmZqRrF.jpg",
    title: "Challengers (2024)",
    description:
      "Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Grand Slam champion. To jolt him out of his recent losing streak, she signs him up for a 'Challenger' event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi's former boyfriend.",
  },
  {
    imgSrc:
      "https://image.tmdb.org/t/p/original/1sh2S5J7bTPu6LuOgS9gamkGs2J.jpg",
    title: "Another Movie (2023)",
    description:
      "Another movie description goes here. This movie is about something interesting and captivating.",
  },
  {
    imgSrc:
      "https://image.tmdb.org/t/p/original/kMa1TSDj76zTSleXE7xsuZ4s3i0.jpg",
    title: "Yet Another Movie (2022)",
    description:
      "Yet another movie description goes here. This movie is about something even more interesting and captivating.",
  },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setFadeClass("fade-in");
      }, 500); // Match this duration with the CSS animation duration
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCircleClick = (index) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setCurrentSlide(index);
      setFadeClass("fade-in");
    }, 1000); // Match this duration with the CSS animation duration
  };

  return (
    <div className="flex">
      <div className="Border"></div>
      <div className="SliderContainer relative">
        <img
          src={slides[currentSlide].imgSrc}
          alt=""
          className={`absolute sliderBackdrop ${fadeClass}`}
        />
        {/* //the curtain */}
        <img
          src="src/assets/curtain.svg"
          alt=""
          className="absolute clip-curtain"
        />

        {/*  */}
        <div className="circles">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`circle circle${index + 1}`}
              onClick={() => handleCircleClick(index)}
            >
              {index === currentSlide && (
                <div className={`active innerCircle ${fadeClass}`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between w-full z-10 relative h-95">
          <div className="pl-9 SliderLeft relative z-20 flex flex-col pt-16">
            <div className="headline">
              <div
                className={`pb-6 this-week text-3xl font-medium not-italic underline `}
              >
                This Week
              </div>
              <div className={`movieDesc ${fadeClass}`}>
                {slides[currentSlide].description}
              </div>
            </div>

            <div
              className={`movieTitle text-6xl not-italic font-semibold ${fadeClass}`}
            >
              {slides[currentSlide].title}
            </div>
          </div>
          <div className="SliderRight relative z-20 self-end">
            <div className="w-full">
              <img
                src="src/assets/Lutetia-logo-white.png"
                className={`w-1/5 float-right `}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
