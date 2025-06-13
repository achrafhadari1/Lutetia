import React, { useState } from "react";

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
  
  const images = [
    "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7991240/pexels-photo-7991240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7991146/pexels-photo-7991146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7991380/pexels-photo-7991380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5220092/pexels-photo-5220092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://cinemagoer.co/wp-content/uploads/2024/01/AOxCinemagoer-4324.jpg",
    "https://images.pexels.com/photos/7991269/pexels-photo-7991269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="brutalist-gallery py-20 bg-black relative">
      <div className="brutalist-container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 mb-16">
            <h2 className="brutalist-gallery-title font-heading text-8xl text-center tracking-widest">#LUTETIA</h2>
          </div>
          
          {images.map((src, index) => (
            <div 
              key={index} 
              className={`brutalist-gallery-item ${index % 3 === 0 ? 'col-span-6' : 'col-span-3'} ${index % 4 === 0 ? 'row-span-2' : ''}`}
              onClick={() => handleImageClick(src)}
            >
              <div className="brutalist-image-frame">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(100%) contrast(120%)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isModalOpen && (
        <div className="brutalist-modal" onClick={closeModal}>
          <div className="brutalist-modal-content">
            <img src={modalImage} alt="" className="brutalist-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};
