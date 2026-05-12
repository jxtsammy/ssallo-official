import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const socials = [
    { name: 'Email', icon: 'fa-solid fa-at', url: 'https://dribbble.com' },
    { name: 'Github', icon: 'fa-brands fa-github', url: 'https://github.com/jxtsammy' },
    { name: 'Linkedin', icon: 'fa-brands fa-linkedin-in', url: 'www.linkedin.com/in/sammy-sallo' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/thegr8kidofficial/' },
    { name: 'Twitter', icon: 'fa-brands fa-twitter', url: 'https://x.com/thegr8kid_' },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-cta">
          <h1 className="fade-in">Enough Talk! Let’s Work Together.</h1>
          <p>Do you fancy saying hi to me or do you want to get started with your project and you need my help? Feel free to contact me.</p>
          <button className="contact-btn pulse-hover">
            Contact With Me <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="footer-links">
          <h3>Let’s Connect in...</h3>
          <div className="social-grid">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card slide-up"
              >
                <i className={social.icon}></i>
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <h3>My Contact Information</h3>
          <div className="contact-info-card">
            <div className="info-item">
              <i className="far fa-envelope"></i>
              <div>
                <small>Email Address</small>
                <p>ssallo1012@gmail.com</p>
              </div>
            </div>
            <div className="info-divider"></div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <small>Phone Number</small>
                <p>(233) 200-878524</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="logo-spin">S</div>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/works" className="nav-link">Works</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <p className="copyright">© 2026 Samuel Sallo.</p>
      </div>
    </footer>
  );
};

export default Footer;