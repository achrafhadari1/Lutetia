import React, { useState, useEffect } from "react";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { Movie } from "./Pages/Movie";
import { VerticalNavbar } from "./Components/VerticalNavbar/VerticalNavbar";
import { OurHistory } from "./Pages/Swiper/OurHistory";
import { Blog } from "./Pages/Blog/Blog";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldHideLoader, setShouldHideLoader] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShouldHideLoader(true);
      }, 3000); // Duration of fade-out animation

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Simulate the loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`loader ${!isLoading ? "fade-out" : ""} ${
          shouldHideLoader ? "hidden" : ""
        }`}
      >
        <video
          className="w-full h-auto"
          src="loading.mp4"
          autoPlay
          muted
        ></video>
      </div>

      <VerticalNavbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/history" element={<OurHistory />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
};
