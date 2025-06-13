import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import './index.css'
import './brutalist.css'
import './components/movie/movie.css'
import { MoviePoster } from './components/MoviePoster';
import { TopWeek } from './components/TopWeek';
import { NextWeek } from './components/NextWeek';
import { CollectionImages } from './components/CollectionImages';
import { History } from './components/History';
import { Blog } from './components/Blog';
import { Merch } from './components/Merch';
import Footer from './components/Footer';
import { X } from 'lucide-react';
import { MoviePage } from './components/movie/MoviePage';

export function App() {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Load fonts
    import('@fontsource/playfair-display');
    import('@fontsource/dm-sans');
    import('@fontsource/space-mono');
    
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
    <Router>
      <div className="brutalist-app">
        {/* Architectural Grid Overlay */}
        <div className="grid-overlay"></div>
        
        {/* Navigation */}
        <nav className="brutalist-nav">
          <div className="nav-container">
            <div className="logo">LUTETIA</div>
            <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? <X size={24} /> : <div className="menu-icon">MENU</div>}
            </div>
          </div>
        </nav>
        
        {/* Full-screen Menu */}
        {showMenu && (
          <div className="brutalist-menu">
            <div className="menu-content">
              <div className="menu-items">
                <Link to="/" className="menu-item">NOW SHOWING</Link>
                <div className="menu-item">COMING SOON</div>
                <Link to="/blog" className="menu-item">BLOG</Link>
                <Link to="/merch" className="menu-item">MERCHANDISE</Link>
                <Link to="/history" className="menu-item">HISTORY</Link>
                <div className="menu-item">VISIT</div>
              </div>
              <div className="menu-footer">
                <div className="menu-address">35 BOULEVARD DES CAPUCINES, PARIS</div>
                <div className="menu-hours">DAILY 10AM — LATE</div>
              </div>
            </div>
          </div>
        )}
        
        <Routes>
          <Route path="/" element={
            <main className="brutalist-main">
              <MoviePoster />
              <div className="concrete-divider"></div>
              <TopWeek />
              <div className="concrete-divider right"></div>
              <NextWeek />
              <div className="concrete-divider"></div>
              <CollectionImages />
              <Footer />
            </main>
          } />
          <Route path="/history" element={<History />} />
          <Route path="/movie/:id" element={<React.Suspense fallback={<div>Loading...</div>}>
            <MoviePage />
          </React.Suspense>} />
          <Route path="/blog" element={<React.Suspense fallback={<div>Loading...</div>}>
            <Blog />
          </React.Suspense>} />
          <Route path="/merch" element={<React.Suspense fallback={<div>Loading...</div>}>
            <Merch />
          </React.Suspense>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
