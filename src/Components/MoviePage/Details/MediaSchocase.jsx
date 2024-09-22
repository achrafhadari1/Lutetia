import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import classNames from "classnames";

export const MediaShowcase = ({ id }) => {
  const [backdrops, setBackdrops] = useState([]);
  const [videos, setVideos] = useState([]);
  const [posters, setPosters] = useState([]);
  const [activeTab, setActiveTab] = useState("Backdrops");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoKey, setVideoKey] = useState("");
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "716d704f44b5a3eff07788f36a04aed0";

        const imagesResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/images`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );

        const videosResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );

        setBackdrops(imagesResponse.data.backdrops.slice(0, 4));
        setPosters(imagesResponse.data.posters.slice(0, 4));
        setVideos(videosResponse.data.results.slice(0, 4));
        setSelectedItem(imagesResponse.data.backdrops[0]);
      } catch (error) {
        console.error("Error fetching data from TMDB:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleMouseDown = (e) => {
    const container = carouselRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeft = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    const container = carouselRef.current;
    container.isDown = false;
  };

  const handleMouseUp = () => {
    const container = carouselRef.current;
    container.isDown = false;
  };

  const handleMouseMove = (e) => {
    const container = carouselRef.current;
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 0.3;
    container.scrollLeft = container.scrollLeft - walk;
  };

  const openModal = (key) => {
    setVideoKey(key);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoKey("");
  };

  const renderCarouselItems = (items, type) => {
    return items.map((item, index) => (
      <div
        key={index}
        className="relative w-56 h-40 object-cover flex-shrink-0 m-2 cursor-pointer"
        onClick={() => {
          if (type === "video") {
            openModal(item.key);
          } else {
            setSelectedItem(item);
          }
        }}
      >
        {type === "backdrop" || type === "poster" ? (
          <img
            src={`https://image.tmdb.org/t/p/original${item.file_path}`}
            alt={
              type === "backdrop"
                ? `Backdrop ${index + 1}`
                : `Poster ${index + 1}`
            }
            className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
          />
        ) : (
          <img
            src={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
          />
        )}
      </div>
    ));
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${
          selectedItem?.file_path || ""
        })`,
      }}
    >
      <div className="absolute top-10 flex justify-around w-full text-white text-4xl font-bold">
        <div
          className={classNames("cursor-pointer", {
            "text-red-500": activeTab === "Backdrops",
          })}
          onClick={() => setActiveTab("Backdrops")}
        >
          Backdrops
        </div>
        <div
          className={classNames("cursor-pointer", {
            "text-red-500": activeTab === "Videos",
          })}
          onClick={() => setActiveTab("Videos")}
        >
          Videos
        </div>
        <div
          className={classNames("cursor-pointer", {
            "text-red-500": activeTab === "Posters",
          })}
          onClick={() => setActiveTab("Posters")}
        >
          Posters
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-full mt-20">
        <div className="flex flex-col items-center">
          {activeTab === "Backdrops" && (
            <div className="flex flex-col items-center">
              <div
                ref={carouselRef}
                className="flex w-full "
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {renderCarouselItems(backdrops, "backdrop")}
              </div>
            </div>
          )}

          {activeTab === "Videos" && (
            <div className="flex flex-col items-center">
              <div
                ref={carouselRef}
                className="flex w-full "
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {renderCarouselItems(videos, "video")}
              </div>
            </div>
          )}

          {activeTab === "Posters" && (
            <div className="flex flex-col items-center">
              <div
                ref={carouselRef}
                className="flex w-full h-96"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {renderCarouselItems(posters, "poster")}
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-0 right-0 m-4 text-2xl text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoKey}`}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
