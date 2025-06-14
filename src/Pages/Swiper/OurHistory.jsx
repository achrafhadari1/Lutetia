import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./history.css";
import Footer from "../../Components/Footer";
import { ArrowDown } from "lucide-react";

export const OurHistory = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className="brutalist-history">
      {/* Architectural Grid Overlay */}
      <div className="grid-overlay"></div>

      <div className="history-container">
        <Swiper
          onSlideChange={handleSlideChange}
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {/* First Slide - Our Beginning */}
          <SwiperSlide key={activeSlide === 0 ? "slide1-active" : "slide1"}>
            <div className="brutalist-history-slide">
              <div className="brutalist-history-content">
                <div className="brutalist-history-year">
                  <div
                    className={`${activeSlide === 0 ? "slide-leftMore" : ""}`}
                  >
                    <span className="font-heading">1955</span>
                  </div>
                </div>

                <div className="brutalist-history-text-container">
                  <div className="brutalist-divider-vertical"></div>
                  <div className="brutalist-history-text">
                    <h2
                      className={`brutalist-history-title ${
                        activeSlide === 0
                          ? "slide-down delay-0-5s opacity-0"
                          : ""
                      }`}
                    >
                      OUR BEGINNING: CINÉ-THÉÂTRE LUTETIA
                    </h2>
                    <p
                      className={`brutalist-history-paragraph ${
                        activeSlide === 0
                          ? "slide-left opacity-0 delay-1-5s"
                          : ""
                      }`}
                    >
                      We opened the doors to Ciné-théâtre Lutetia during a
                      pivotal moment in Casablanca's history. The 1950s marked a
                      construction boom that transformed our city into a hub of
                      modernist architecture. Among the many developments of
                      this era, Lutetia became a jewel in the city's crown, and
                      we spared no expense in ensuring its place as a cultural
                      landmark.
                    </p>
                  </div>
                </div>

                <div className="brutalist-history-image-container">
                  <div
                    className={`brutalist-history-image ${
                      activeSlide === 0 ? "slide-down" : ""
                    }`}
                  >
                    <img
                      src="https://evergreene.com/wp-content/uploads/2019/01/Kings-Final-7.2-2048x1452.jpg"
                      alt="Cinema in 1955"
                    />
                    <div className="brutalist-image-border"></div>
                  </div>
                </div>
              </div>

              {activeSlide === 0 && (
                <div className="brutalist-scroll-indicator">
                  <ArrowDown size={32} />
                  <span>SCROLL</span>
                </div>
              )}
            </div>
          </SwiperSlide>

          {/* Second Slide - Family Legacy */}
          <SwiperSlide key={activeSlide === 1 ? "slide2-active" : "slide2"}>
            <div className="brutalist-history-slide">
              <div className="brutalist-history-content reverse">
                <div className="brutalist-history-image-container">
                  <div
                    className={`brutalist-history-image ${
                      activeSlide === 1 ? "slide-down" : ""
                    }`}
                  >
                    <img src="/history/2.jpg" alt="Family Legacy" />
                    <div className="brutalist-image-border"></div>
                  </div>
                </div>

                <div className="brutalist-history-text-container">
                  <h2
                    className={`brutalist-history-title large ${
                      activeSlide === 1 ? "slide-down delay-0-5s opacity-0" : ""
                    }`}
                  >
                    A FAMILY LEGACY
                  </h2>
                  <div className="brutalist-divider-horizontal"></div>
                  <p
                    className={`brutalist-history-paragraph ${
                      activeSlide === 1
                        ? "slide-right opacity-0 delay-1-5s"
                        : ""
                    }`}
                  >
                    For over 70 years, our family has proudly owned and cared
                    for Ciné-théâtre Lutetia. Since the 1950s, it has stood at
                    the heart of Casablanca's cultural and cinematic life. At a
                    time when Morocco embraced cinema, there were once 240
                    theatres across the country. We've been part of that
                    history, weathering many changes and challenges along the
                    way.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Third Slide - Preserving Legacy */}
          <SwiperSlide key={activeSlide === 2 ? "slide3-active" : "slide3"}>
            <div className="brutalist-history-slide">
              <div className="brutalist-history-content column">
                <h2
                  className={`brutalist-history-title extra-large centered ${
                    activeSlide === 2 ? "slide-down" : ""
                  }`}
                >
                  PRESERVING THE LUTETIA LEGACY
                </h2>

                <div className="brutalist-history-final">
                  <div className="brutalist-history-image-container large">
                    <div
                      className={`brutalist-history-image ${
                        activeSlide === 2 ? "slide-right" : ""
                      }`}
                    >
                      <img src="/history/4.jpg" alt="Modern Lutetia" />
                      <div className="brutalist-image-border"></div>
                    </div>
                  </div>

                  <div className="brutalist-history-text-container">
                    <p
                      className={`brutalist-history-paragraph ${
                        activeSlide === 2
                          ? "opacity-0 slide-down delay-0-5s"
                          : ""
                      }`}
                    >
                      Today, Ciné-théâtre Lutetia stands as a testament to our
                      family's passion and commitment. Thanks to the
                      renovations, we've reclaimed our place as one of
                      Casablanca's most popular entertainment venues. While the
                      number of cinemas in Morocco has declined, we take pride
                      in our efforts to preserve this piece of history for
                      future generations. Ciné-théâtre Lutetia is more than just
                      a cinema—it's a symbol of resilience, art, and family
                      legacy.
                    </p>
                    <div
                      className={`brutalist-divider-horizontal full ${
                        activeSlide === 2
                          ? "opacity-0 slide-down delay-1-5s"
                          : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurHistory;
