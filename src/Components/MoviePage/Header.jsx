import React, { useState, useEffect } from "react";
import axios from "axios";

export const Header = ({ id }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieResponse, creditsResponse, videosResponse, imagesResponse] =
          await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
              params: {
                api_key: "716d704f44b5a3eff07788f36a04aed0",
                language: "en-US",
              },
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
              params: {
                api_key: "716d704f44b5a3eff07788f36a04aed0",
              },
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
              params: {
                api_key: "716d704f44b5a3eff07788f36a04aed0",
              },
            }),
            axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, {
              params: {
                api_key: "716d704f44b5a3eff07788f36a04aed0",
              },
            }),
          ]);

        const movie = movieResponse.data;
        const director = creditsResponse.data.crew.find(
          (person) => person.job === "Director"
        );
        const writer = creditsResponse.data.crew.find(
          (person) => person.job === "Writer"
        );

        const englishLogo = imagesResponse.data.logos.find(
          (logo) => logo.iso_639_1 === "en"
        );
        const logo = englishLogo
          ? `https://image.tmdb.org/t/p/original${englishLogo.file_path}`
          : null;

        const movieDetails = {
          imageUrl: `https://image.tmdb.org/t/p/original${imagesResponse.data.backdrops[0].file_path}`,
          imageUrlVideo:
            imagesResponse.data.backdrops.length > 1
              ? `https://image.tmdb.org/t/p/original${imagesResponse.data.backdrops[1].file_path}`
              : `https://image.tmdb.org/t/p/original${imagesResponse.data.backdrops[0].file_path}`,
          logoSrc: logo,
          originalTitle: movie.original_title,
          description: movie.overview,
          director: director ? director.name : "Unknown Director",
          writer: writer ? writer.name : "Unknown Writer",
        };

        setMovieDetails(movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-95-mv w-full relative">
      <img
        src={movieDetails.imageUrl}
        className="backdrop absolute z-0 w-full h-full object-cover"
        alt=""
      />
      <div className="flex flex-col w-5/6 m-auto gap-10 z-10 h-full relative justify-center">
        <div className="font-semibold text-8xl">
          {movieDetails.logoSrc ? (
            <img src={movieDetails.logoSrc} alt="logo" className="w-1/2" />
          ) : (
            movieDetails.originalTitle
          )}
        </div>
        <div className="authors flex gap-7">
          <div className="text-center">
            <div>{movieDetails.director}</div>
            <div>DIRECTOR</div>
          </div>
          <div className="text-center">
            <div>{movieDetails.writer}</div>
            <div>WRITER</div>
          </div>
        </div>
        <div className="desc-max">{movieDetails.description}</div>
        <div className="button-4 mt-6">
          <div className="eff-4"></div>
          <a href="#">Get Tickets</a>
        </div>
      </div>
    </div>
  );
};
