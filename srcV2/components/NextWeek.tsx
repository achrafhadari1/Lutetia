import React, { useState, useEffect } from "react";
import { MovieCompV2 } from "./MovieCompV2";

export const NextWeek = () => {
  // Sample upcoming movies data (static to avoid additional API calls)
  const upcomingMovies = [
    {
      id: 940551,
      title: "Dune: Part Two",
      poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
      runtime: 166,
      genres: [
        { id: 878, name: "Science Fiction" },
        { id: 12, name: "Adventure" },
        { id: 18, name: "Drama" }
      ],
      director: "Denis Villeneuve",
      logo: "https://image.tmdb.org/t/p/original/tFAltx3EHn6DvYunwGbVuQXnHYj.png"
    },
    {
      id: 792307,
      title: "Poor Things",
      poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      overview: "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
      runtime: 141,
      genres: [
        { id: 18, name: "Drama" },
        { id: 14, name: "Fantasy" },
        { id: 35, name: "Comedy" }
      ],
      director: "Yorgos Lanthimos",
      logo: null
    }
  ];

  return (
    <div className="brutalist-next-week py-20 relative bg-black/90">
      <div className="brutalist-container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 mb-12">
            <div className="flex items-center">
              <div className="h-[1px] flex-grow bg-white"></div>
              <h2 className="text-5xl px-8 font-heading tracking-widest">COMING SOON</h2>
              <div className="h-[1px] flex-grow bg-white"></div>
            </div>
          </div>
          
          {upcomingMovies.map((movie, index) => (
            <div key={index} className={`col-span-6 ${index % 2 === 0 ? 'col-start-1' : 'col-start-7'}`}>
              <MovieCompV2 movie={movie} />
            </div>
          ))}
          
          <div className="col-span-12 mt-16 text-center">
            <div className="brutalist-button inline-block">
              <span className="brutalist-button-inner">VIEW FULL PROGRAM</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute left-0 top-0 h-full w-1 bg-white/20"></div>
      <div className="absolute right-0 top-0 h-full w-1 bg-white/20"></div>
    </div>
  );
};
