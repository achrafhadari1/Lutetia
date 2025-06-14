import React from "react";
import { CollectionImages } from "../Components/HomePage/CollectionImages";
import Footer from "../Components/Footer";
import "../Components/HomePage/home.css";
import { MoviePoster } from "../Components/HomePage/MoviePoster";
import { NextWeek } from "../Components/HomePage/NextWeek";
import { TopWeek } from "../Components/HomePage/TopWeek";

export const Home = () => {
  return (
    <main className="brutalist-main">
      <MoviePoster />
      <div className="concrete-divider"></div>
      <TopWeek />
      <div className="concrete-divider right"></div>
      <NextWeek />
      <div className="concrete-divider"></div>
      <CollectionImages />
      <Footer />
    </main>
  );
};
