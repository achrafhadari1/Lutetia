import React from "react";

const Footer = () => {
  return (
    <footer className="brutalist-footer py-16 bg-black">
      <div className="brutalist-container">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-4">
            <h2 className="brutalist-footer-logo font-heading text-6xl tracking-widest mb-8">LUTETIA</h2>
            <div className="brutalist-footer-tagline font-serif text-lg">
              An architectural cinema house for the modern aesthete
            </div>
          </div>
          
          <div className="col-span-4">
            <div className="brutalist-footer-title font-mono uppercase tracking-widest mb-4">Visit Us</div>
            <div className="brutalist-footer-address font-serif text-lg mb-4">
              35 Boulevard des Capucines<br />
              75002 Paris, France
            </div>
            <div className="brutalist-footer-hours font-mono">
              Mon-Fri: 10:00 - 23:00<br />
              Sat-Sun: 09:00 - 00:00
            </div>
          </div>
          
          <div className="col-span-4">
            <div className="brutalist-footer-title font-mono uppercase tracking-widest mb-4">Connect</div>
            <div className="brutalist-footer-socials">
              <a
                href="https://twitter.com/Lutetia"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-social-link"
              >
                <span>Letterboxd</span>
              </a>
              <a
                href="https://twitter.com/Lutetia"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-social-link"
              >
                <span>Instagram</span>
              </a>
              <a
                href="https://twitter.com/Lutetia"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-social-link"
              >
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="brutalist-footer-bottom pt-8 border-t border-white/30">
          <div className="flex justify-between items-center">
            <div className="brutalist-copyright font-mono text-sm">
              © {new Date().getFullYear()} Lutetia Cinema. All rights reserved.
            </div>
            <div className="brutalist-footer-links font-mono text-sm flex gap-8">
              <a href="#privacy-policy" className="hover:underline">Privacy Policy</a>
              <a href="#cookie-policy" className="hover:underline">Cookie Policy</a>
              <a href="#terms" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
