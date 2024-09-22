import React, { useState } from "react";
import "./CollectionImages.css";

export const CollectionImages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-40-cus relative flex items-end justify-center bg-white">
      <div className="big-text">#LUTETIA_COLLECTION</div>
      {[
        "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7991240/pexels-photo-7991240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7991146/pexels-photo-7991146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/7991380/pexels-photo-7991380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5220092/pexels-photo-5220092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://cinemagoer.co/wp-content/uploads/2024/01/AOxCinemagoer-4324.jpg",
        "https://images.pexels.com/photos/7991269/pexels-photo-7991269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ].map((src, index) => (
        <img
          key={index}
          className={`absolute img-collection img${index + 1}`}
          src={src}
          alt=""
          onClick={() => handleImageClick(src)}
        />
      ))}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="" className="modal-image" />
        </div>
      )}
    </div>
  );
};
