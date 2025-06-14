import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Director } from "../Components/MoviePage/Director";
import { Details } from "../Components/MoviePage/Details/Details";
import "../Components/MoviePage/movie.css";

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiKey = "716d704f44b5a3eff07788f36a04aed0";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: apiKey,
              language: "en-US",
            },
          }
        );

        // Fetch backdrop images and logos
        const imagesResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/images`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );

        // Get logo (prefer English, fallback to any available)
        const englishLogo = imagesResponse.data.logos.find(
          (logo) => logo.iso_639_1 === "en"
        );

        const logo = englishLogo
          ? `https://image.tmdb.org/t/p/original${englishLogo.file_path}`
          : imagesResponse.data.logos.length > 0
          ? `https://image.tmdb.org/t/p/original${imagesResponse.data.logos[0].file_path}`
          : null;

        // Get trailer
        const videosResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );

        const trailer = videosResponse.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        setMovie({
          ...response.data,
          backdrop: imagesResponse.data.backdrops[0]?.file_path,
          trailer: trailer ? trailer.key : null,
          logo: logo,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
        <div className="brutalist-container">
          <div className="brutalist-grid">
            <div className="brutalist-title">LOADING</div>
            <div className="loading-line"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="brutalist-movie-page">
      {/* Hero Section */}
      <div className="brutalist-movie-hero relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop})`,
            filter: "grayscale(100%) contrast(120%)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 min-h-screen pt-32 pb-16 px-16 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-5 col-start-2">
            <div className="uppercase tracking-widest text-sm font-mono border-l-2 border-white pl-4 mb-6">
              LUTETIA PRESENTS
            </div>

            {movie.logo ? (
              <img
                src={movie.logo}
                alt={movie.title}
                className="h-24 mb-8 object-contain object-left"
              />
            ) : (
              <h1 className="font-heading text-7xl tracking-wider mb-8">
                {movie.title}
              </h1>
            )}

            <div className="text-lg font-light mb-6 font-mono uppercase tracking-wider">
              {movie.genres.map((g) => g.name).join(", ")} |{" "}
              {movie.adult ? "R" : "PG-13"}
            </div>

            <div className="border-t border-b border-white py-4 mb-8 uppercase tracking-widest text-center font-mono">
              NOW SHOWING
            </div>

            <p className="brutalist-movie-description">{movie.overview}</p>

            <div className="brutalist-button">
              <span className="brutalist-button-inner">GET TICKETS</span>
            </div>
          </div>

          <div className="col-span-4 col-start-8 flex items-end">
            <div className="brutalist-frame">
              <div className="text-right font-mono uppercase tracking-widest text-sm mb-2">
                Today's Screenings
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono">
                {["14:30", "17:15", "20:00", "22:45"].map((time, i) => (
                  <div key={i} className="brutalist-time">
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <Details id={id} />

      {/* Director Section */}
      <Director id={id} />

      {/* Trailer Section */}
      {movie.trailer && (
        <div className="brutalist-trailer bg-black py-20">
          <div className="brutalist-container">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-10 col-start-2">
                <h2 className="font-heading text-5xl tracking-wider mb-12">
                  OFFICIAL TRAILER
                </h2>
                <div className="brutalist-frame p-0">
                  <iframe
                    width="100%"
                    height="600"
                    src={`https://www.youtube.com/embed/${movie.trailer}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
