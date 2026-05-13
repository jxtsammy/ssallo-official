import { useEffect, useState } from 'react';
import './Hero.css';
import ProfileImg from '../../../assets/Me.png';

const MainHero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnimate(true);
  }, []);

  return (
    <section className={`main-hero ${animate ? 'is-visible' : ''}`}>
      <div className="hero-container">
        {/* Large Background Name */}
        <div className="hero-name-wrapper">
          <h1 className="hero-name-bg">Samuel <br/>Sallo</h1>
        </div>

        {/* Foreground Content */}
        <div className="hero-content-grid">
          <div className="hero-portrait-column">
            <img
              src={ProfileImg}
              alt="Samuel Sallo"
              className="portrait-img"
            />
          </div>

          <div className="hero-details-column">
            <h2 className="hero-heading">
              Frontend & Mobile Developer <br />
              + Graphics & UX/UI Designer.
            </h2>

            <p className="s-hero-description">
            Based in Ghana, I design visually striking interfaces, compelling graphics,
            and high-performance mobile solutions that connect design with technology.
            </p>

            <div className="hero-contact-list">
              <div className="contact-item">
                <span className="label">Email</span>
                <span className="value">ssallo1012@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="label">Location</span>
                <span className="value">Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;