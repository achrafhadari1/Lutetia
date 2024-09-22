import React from "react";
import { FaPlayCircle } from "react-icons/fa";

export const MovieComponent = ({ movie }) => {
  return (
    <div className="movieComponentContainer relative">
      <img
        className="movieComponentPoster h-full"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="absolute moviePosterGradient w-full h-full"></div>
      <div className="h-full flex flex-col items-center justify-end text-center gap-4 moviehover">
        <div className="homePosterTitle font-semibold">{movie.title}</div>
        <div className="director">dir. {movie.director}</div>
      </div>
      <div className="hidden moviedetails absolute top-0 w-full h-full  flex-col items-center justify-center gap-8">
        <div className="absolute moviePosterGradient2 w-full h-full"></div>
        {movie.logo && (
          <div>
            <img src={movie.logo} className="logo" alt="logo" />
          </div>
        )}
        <div className="flex flex-col gap-4 text-center">
          <div className="text-xl font-semibold underline">
            dir. {movie.director}
          </div>
          <div>{movie.release_date}</div>
          <div className="flex p-2 border border-solid border-white bg-black m-auto">
            <div className="px-2">Play Trailer</div>
            <div className="text-3xl px-2">
              <FaPlayCircle />
            </div>
          </div>
          <div className="text-2xl underline font-semibold">Find out more</div>
        </div>
      </div>
    </div>
  );
};
