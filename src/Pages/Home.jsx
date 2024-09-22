import React from "react";
import { CollectionImages } from "../Components/HomePage/CollectionImages";
import Footer from "../Components/Footer";
import "../Components/HomePage/home.css";
import { Merch } from "../Components/HomePage/Merch/Merch";
import { MoviePoster } from "../Components/HomePage/MoviePoster";
import Newsletter from "../Components/HomePage/Newsletter";
import { NextWeek } from "../Components/HomePage/NextWeek";
import { TopWeek } from "../Components/HomePage/TopWeek";
export const Home = () => {
  return (
    <>
      <MoviePoster />
      <TopWeek />
      <NextWeek />
      <CollectionImages />
      <Merch />
      <Newsletter />
      <Footer />
    </>
  );
};
