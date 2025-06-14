import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Movie } from "./Pages/Movie";
import { OurHistory } from "./Pages/Swiper/OurHistory";
import { Blog } from "./Pages/Blog/Blog";
import Shop from "./Pages/Shop";
import "./index.css";
import "./brutalist.css";
import { X, ArrowLeft } from "lucide-react";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Check if we're on a movie page
  const isMoviePage = location.pathname.startsWith("/movie/");

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
        <div className="brutalist-container">
          <div className="brutalist-grid">
            <div className="brutalist-title">LUTETIA</div>
            <div className="loading-line"></div>
            <div className="brutalist-subtitle text-right">CINEMA HOUSE</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="brutalist-app">
      {/* Architectural Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Navigation */}
      <nav className="brutalist-nav">
        <div className="nav-container">
          {isMoviePage ? (
            <Link to="/" className="logo-back flex items-center gap-3">
              <ArrowLeft size={24} className="text-white" />
              <div className="logo">LUTETIA</div>
            </Link>
          ) : (
            <Link to="/" className="logo">
              LUTETIA
            </Link>
          )}
          <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <X size={24} className="text-white" />
            ) : (
              <div className="menu-icon">MENU</div>
            )}
          </div>
        </div>
      </nav>

      {/* Full-screen Menu */}
      {showMenu && (
        <div className="brutalist-menu" onClick={() => setShowMenu(false)}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="menu-items">
              <Link
                to="/"
                className="menu-item"
                onClick={() => setShowMenu(false)}
              >
                <span className="menu-number">01</span>
                <span className="menu-text">NOW SHOWING</span>
              </Link>
              <div className="menu-item" onClick={() => setShowMenu(false)}>
                <span className="menu-number">02</span>
                <span className="menu-text">COMING SOON</span>
              </div>
              <Link
                to="/blog"
                className="menu-item"
                onClick={() => setShowMenu(false)}
              >
                <span className="menu-number">03</span>
                <span className="menu-text">BLOG</span>
              </Link>
              <Link
                to="/shop"
                className="menu-item"
                onClick={() => setShowMenu(false)}
              >
                <span className="menu-number">04</span>
                <span className="menu-text">MERCHANDISE</span>
              </Link>
              <Link
                to="/history"
                className="menu-item"
                onClick={() => setShowMenu(false)}
              >
                <span className="menu-number">05</span>
                <span className="menu-text">HISTORY</span>
              </Link>
              <div className="menu-item" onClick={() => setShowMenu(false)}>
                <span className="menu-number">06</span>
                <span className="menu-text">VISIT</span>
              </div>
            </div>
            <div className="menu-footer">
              <div className="menu-info">
                <div className="menu-address">
                  35 BOULEVARD DES CAPUCINES, PARIS
                </div>
                <div className="menu-hours">DAILY 10AM — LATE</div>
              </div>
              <div className="menu-contact">
                <div className="menu-phone">+33 1 47 42 93 05</div>
                <div className="menu-email">HELLO@LUTETIA.PARIS</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/history" element={<OurHistory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};
