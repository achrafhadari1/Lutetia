import React, { useState } from "react";
import "./VerticalNavbar.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";

export const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="vertical-navbar-container">
      <div className="vertical-navbar z-50 border-r-2 border-white">
        {isOpen ? (
          <FaMinus
            className="text-3xl text-white menu-icon"
            onClick={toggleMenu}
          />
        ) : (
          <HiMenuAlt1
            className="text-3xl text-white menu-icon"
            onClick={toggleMenu}
          />
        )}
        <div className="navbar-logo">LUTETIA</div>
        <div className="social-links">
          <a href="#">
            <FaInstagram className="fab fa-instagram" />
          </a>
          <a href="#">
            <img
              className="fab fa-youtube object-contain w-6 h-6"
              src="/Letterboxd_24.png"
              alt=""
            />
          </a>
          <a href="#">
            <FaXTwitter className="fab fa-twitter" />
          </a>
        </div>
      </div>
      <div
        className={`navbar-links-container z-50  flex items-center ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="navbar-links">
          <a href="#">HOME</a>
          <a href="#">HISTORY</a>
          <a href="#">BLOG</a>
          <a href="#">SHOP</a>
          <a href="#">PRICES</a>
        </div>
      </div>
    </div>
  );
};
