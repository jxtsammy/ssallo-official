import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutHero.css';
import Img from '../../../assets/Aimg.jpg'
import CV from '../../../CV/SAMUEL SALLO OFFICAL CV TEMPLATE.pdf'

const AboutHero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimate(true);
  }, []);

  return (
    <section className={`about-hero ${animate ? 'start-animation' : ''}`}>
      <div className="hero-top">
        <div className="headline-area">
          <h1>
            Frontend Web & Mobile Developer, <br />
            Graphic Designer and UI/UX Designer.
          </h1>
          <div className="social-follow">
            <span>Follow me</span>
            <div className="social-icons">
              <a href="https://www.instagram.com/thegr8kidofficial/"><i className="fab fa-instagram"></i></a>
              <a href="https://x.com/thegr8kid_"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/sammy-sallo/"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/jxtsammy"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>

        <div className="description-area">
          <p>
            I specialize in crafting high-performance user interfaces using React and React Native.
            My design philosophy focuses on minimalist grid systems and high-contrast cinematic aesthetics.
            From mobile architecture to brand identity, I bridge the gap between complex code and intuitive design.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-book">
              Book Me <i className="fas fa-arrow-right"></i>
            </Link>
            {/* Link this to your file in the public folder */}
            <a href={CV} download className="btn-download">
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={Img} alt="Julia's Creative Workspace" className="main-hero-img" />
      </div>
    </section>
  );
};

export default AboutHero;