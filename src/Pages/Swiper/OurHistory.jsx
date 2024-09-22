import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./history.css";
import { motion } from "framer-motion";
export const OurHistory = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex); // Update the active slide index
  };

  return (
    <>
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
          <SwiperSlide key={activeSlide === 0 ? "slide1-active" : "slide1"}>
            <div className="hs-res-1 flex w-3/5 gap-16 relative">
              <img
                src="/history/1.jpg"
                className={`w-64 ${activeSlide === 0 ? "slide-down" : ""}`}
                alt=""
              />
              <div className="flex flex-col gap-12">
                <div
                  className={`years hs-res-2 date ${
                    activeSlide === 0 ? "slide-leftMore" : ""
                  }`}
                >
                  Since 1955
                </div>
                <div className="flex hs-res-3 ">
                  <div className="real-line sm-line-1-new"></div>
                  <div>
                    <div
                      className={`title text-left text-2xl ${
                        activeSlide === 0
                          ? "slide-down delay-0-5s opacity-0"
                          : ""
                      }`}
                    >
                      Our Beginning: Ciné-théâtre Lutetia
                    </div>
                    <div
                      className={`text-base text-left ${
                        activeSlide === 0
                          ? "slide-left opacity-0 delay-1-5s"
                          : ""
                      }`}
                    >
                      We opened the doors to Ciné-théâtre Lutetia during a
                      pivotal moment in Casablanca’s history. The 1950s marked a
                      construction boom that transformed our city into a hub of
                      modernist architecture. Among the many developments of
                      this era, Lutetia became a jewel in the city’s crown, and
                      we spared no expense in ensuring its place as a cultural
                      landmark.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={activeSlide === 1 ? "slide2-active" : "slide2"}>
            <div className="flex hs-res-4 flex-row-reverse w-3/5 gap-16 relative">
              <img
                src="/history/2.jpg"
                className={`${activeSlide === 1 ? "slide-down" : ""}`}
                alt=""
              />
              <div
                className={`title-s2 ${
                  activeSlide === 1 ? "slide-down delay-0-5s opacity-0" : ""
                }`}
              >
                A Family Legacy
              </div>

              <div>
                <div
                  className={`text-base text-left ${
                    activeSlide === 1 ? "slide-right opacity-0 delay-1-5s" : ""
                  }`}
                >
                  For over 70 years, our family has proudly owned and cared for
                  Ciné-théâtre Lutetia. Since the 1950s, it has stood at the
                  heart of Casablanca’s cultural and cinematic life. At a time
                  when Morocco embraced cinema, there were once 240 theatres
                  across the country. We’ve been part of that history,
                  weathering many changes and challenges along the way.
                </div>
                <div className="bottom-line flex ">
                  <div className="dummy-line"></div>
                  <div
                    className={`real-line sm-line-2 ${
                      activeSlide === 1 ? "slide-down opacity-0" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            key={activeSlide === 2 ? "slide3-active" : "slide3"}
            className="relative"
          >
            <div className="flex w-full flex-col items-center h-full">
              <div
                className={` title-3 content-center text-8xl ${
                  activeSlide === 2 ? "slide-down" : ""
                }`}
              >
                Preserving the Lutetia Legacy
              </div>
              <div className="w-full hs-res-5 items-center flex gap-12  ">
                <img
                  src="/history/4.jpg"
                  className={` img-3 ${activeSlide === 2 ? "slide-right" : ""}`}
                  alt=""
                />
                <div className=" w-3/4 text-white  hs-res-6">
                  <p
                    className={` text-black text-3  ${
                      activeSlide === 2
                        ? " opacity-0 slide-down delay-0-5s  "
                        : ""
                    }`}
                  >
                    Today, Ciné-théâtre Lutetia stands as a testament to our
                    family’s passion and commitment. Thanks to the renovations,
                    we’ve reclaimed our place as one of Casablanca’s most
                    popular entertainment venues. While the number of cinemas in
                    Morocco has declined, we take pride in our efforts to
                    preserve this piece of history for future generations.
                    Ciné-théâtre Lutetia is more than just a cinema—it’s a
                    symbol of resilience, art, and family legacy.
                  </p>
                  <div
                    className={` line-3sm ${
                      activeSlide === 2 ? "opacity-0 slide-down delay-1-5s" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
