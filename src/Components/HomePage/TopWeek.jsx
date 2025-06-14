import React, { useState, useEffect } from "react";
import axios from "axios";
import { MovieCompV2 } from "./MovieCompV2";

const API_KEY = "716d704f44b5a3eff07788f36a04aed0";
const movieIds = [402431, 1010639];

export const TopWeek = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviePromises = movieIds.map(async (movieId) => {
          const movieDetailsResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
              params: {
                api_key: API_KEY,
                language: "en-US",
              },
            }
          );

          const creditsResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits`,
            {
              params: {
                api_key: API_KEY,
              },
            }
          );

          const imagesResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/images`,
            {
              params: {
                api_key: API_KEY,
              },
            }
          );
          const videoResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            {
              params: {
                api_key: API_KEY,
              },
            }
          );

          const director = creditsResponse.data.crew.find(
            (person) => person.job === "Director"
          );

          const englishLogo = imagesResponse.data.logos.find(
            (logo) => logo.iso_639_1 === "en"
          );

          const logo = englishLogo
            ? `https://image.tmdb.org/t/p/original${englishLogo.file_path}`
            : imagesResponse.data.logos.length > 0
            ? `https://image.tmdb.org/t/p/original${imagesResponse.data.logos[0].file_path}`
            : null;

          return {
            ...movieDetailsResponse.data,
            director: director ? director.name : "Unknown",
            logo: logo,
            videos: videoResponse,
          };
        });

        const moviesWithDetails = await Promise.all(moviePromises);
        setMovies(moviesWithDetails);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="brutalist-this-week py-20 relative">
      <div className="brutalist-container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 mb-12">
            <div className="flex items-center">
              <div className="h-[1px] flex-grow bg-white"></div>
              <h2 className="text-5xl px-8 font-heading tracking-widest">THIS WEEK</h2>
              <div className="h-[1px] flex-grow bg-white"></div>
            </div>
          </div>
          
          {movies.map((movie, index) => (
            <div key={index} className={`col-span-6 ${index % 2 === 0 ? 'col-start-1' : 'col-start-7'}`}>
              <MovieCompV2 movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
