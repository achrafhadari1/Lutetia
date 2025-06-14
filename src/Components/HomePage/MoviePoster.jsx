import React from "react";
import "./totest.css";
import { Link } from "react-router-dom";

export const MoviePoster = () => {
  return (
    <div className="vh-95 relative overflow-hidden">
      <div>
        <video
          className="absolute"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "120vh",
            objectFit: "cover",
            zIndex: "0",
            filter: "grayscale(100%) contrast(120%)",
            top: 0,
            left: 0,
          }}
          onError={(e) => console.error("Video error:", e)}
          onLoadStart={() => console.log("Video loading started")}
          onCanPlay={() => console.log("Video can play")}
        >
          <source src="/videoplayback.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="z-10 relative h-full pt-32 pb-16 px-16 grid grid-cols-12 gap-4">
        <div className="col-span-4 col-start-2">
          <div className="uppercase tracking-widest text-sm font-mono border-l-2 border-white pl-4 mb-6">
            LUTETIA PRESENTS
          </div>
          <div className="text-lg font-light mb-6 font-mono uppercase tracking-wider">
            Drama, Biography | R
          </div>
          <div className="flex items-center mt-2 gap-8 mb-8">
            <div className="flex items-center">
              <img
                src="rotten.png"
                alt="Rotten Tomatoes"
                className="w-4 h-4 mr-2"
              />
              <span className="font-mono">89% </span>
            </div>
            <div className="flex items-center">
              <img src="imdb.png" alt="IMDB" className="w-10 h-4 mr-2" />
              <span className="font-mono">8.6/10</span>
            </div>
          </div>

          <img
            className="w-full mb-8"
            src="https://image.tmdb.org/t/p/original/vsnVZCWKGnaVqln5erH0uHxHZeC.png"
            alt="Oppenheimer"
          />

          <div className="border-t border-b border-white py-4 mb-8 uppercase tracking-widest text-center font-mono">
            NOW SHOWING
          </div>

          <p className="font-serif text-xl mb-12">
            The story of J. Robert Oppenheimer's role in the development of the
            atomic bomb during World War II.
          </p>

          <Link to={`/movie/${872585}`} className="brutalist-button">
            <span className="brutalist-button-inner">GET TICKETS</span>
          </Link>
        </div>

        <div className="col-span-5 col-start-7 flex items-end">
          <div className="brutalist-frame">
            <div className="text-right font-mono uppercase tracking-widest text-sm mb-2">
              Daily Screenings
            </div>
            <div className="grid grid-cols-3 gap-2 font-mono">
              {["11:30", "14:15", "17:00", "19:45", "22:30"].map((time, i) => (
                <div key={i} className="brutalist-time">
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
