import React from "react";
import "./totest.css";
import { Link } from "react-router-dom";

export const MoviePoster = () => {
  return (
    <div className="vh-95 relative">
      <div>
        <video
          className="absolute mask-image"
          autoPlay
          loop
          style={{
            width: "100%",
            height: "120vh",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src="videoplayback.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="z-10 relative h-full flex flex-col justify-center items-center text-center text-white">
        <div className="text-lg font-light">Drama, Biography | R</div>
        <div className="flex items-center mt-2 gap-4">
          <div className="flex items-center">
            <img
              src="rotten.png"
              alt="Rotten Tomatoes"
              className="w-4 h-4 mr-1"
            />
            <span>89% </span>
          </div>
          <div className="flex items-center">
            <img src="imdb.png" alt="IMDB" className="w-10 h-4 mr-1" />
            <span>8.6/10</span>
          </div>
        </div>
        <img
          className="text-6xl font-bold mt-4 w-2/4"
          src="https://image.tmdb.org/t/p/original/vsnVZCWKGnaVqln5erH0uHxHZeC.png"
        />
        <div className="text-lg font-semibold mt-2">NOW SHOWING</div>
        <p className="text-lg font-normal pt-regular mt-4 max-w-2xl ">
          The story of J. Robert Oppenheimer's role in the development of the
          atomic bomb during World War II.
        </p>
        <div className="button-4 mt-6">
          <div className="eff-4"></div>
          <Link to={`/movie/${872585}`}>Get Tickets</Link>
        </div>
      </div>
    </div>
  );
};
