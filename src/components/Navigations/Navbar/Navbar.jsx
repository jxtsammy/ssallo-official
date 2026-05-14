import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import LogoImg from '../../../assets/myLogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const email = "ssallo1012@gmail.com";

  useEffect(() => {
    // 1. Automatically scroll to top
    window.scrollTo(0, 0);

    // 2. Set Tab Name
    if (pathname === "/") {
      document.title = "Samuel Sallo"; // Your default name for the home page
    } else {
      // Capitalize the path for other pages (e.g., /about -> About)
      const pageName = pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2);
      document.title = `${pageName} | Samuel Sallo`;
    }
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={LogoImg} alt="Logo" className="logo-icon" />
        </div>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <NavLink to="/" className="nav-item" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className="nav-item" onClick={closeMenu}>About</NavLink>
            <NavLink to="/leadership" className="nav-item" onClick={closeMenu}>Leadership</NavLink>
            <NavLink to="/service" className="nav-item" onClick={closeMenu}>Service</NavLink>
            <NavLink to="/contact" className="nav-item" onClick={closeMenu}>Contact</NavLink>
          </div>

          <a href={`mailto:${email}`} className="nav-email-btn" onClick={closeMenu}>
            {email}
          </a>
        </div>
      </div>
    </nav>
  );
}