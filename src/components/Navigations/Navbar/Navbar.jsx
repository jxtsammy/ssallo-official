import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import LogoImg from '../../../assets/myLogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const email = "ssallo1012@gmail.com";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <img src={LogoImg} alt="Logo" className="logo-icon" />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links + Email Section */}
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