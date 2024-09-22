import React, { useState } from "react";
import "./Menu.css";
import { RiCloseLargeLine } from "react-icons/ri";
export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 500); // Adjust the delay to match the duration of slideIn animation (500ms)
    }
  };

  return (
    <div>
      <div className="menuColumn absolute top-0 left-0">
        <img
          className="menuImage pt-2 cursor-pointer"
          src="src/assets/menu.svg"
          alt=""
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`curtain-menu ${isMenuOpen ? "opening" : "closing"}`}
        onClick={toggleMenu}
      >
        <div className="closeButton w-full">
          <RiCloseLargeLine className="float-right m-5 text-3xl" />
        </div>
        <div className="w-full h-full flex">
          <div className="title">Menu</div>

          <div className="list ">
            <ul className="text-6xl ul-list font-normal flex flex-col gap-10">
              <li>HOME</li>
              <li>About Us</li>
              <li>Merch</li>
              <li>Archive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
