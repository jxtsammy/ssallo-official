import './ServiceExtra.css';
import { Link } from 'react-router-dom';
import Christy from '../../../assets/testimonials/Christy.jpg'
import Justina from '../../../assets/testimonials/Justina.jpeg'
import Richard from '../../../assets/testimonials/rich.jpeg'
import Success from '../../../assets/testimonials/Success.JPG'

export default function Hero() {
  return (
    <section className="service-extra-hero-container">
      <div className="service-extra-hero-content">
        {/* Main Heading */}
        <h1 className="service-extra-hero-title">
          Designing & Building <span className="service-extra-highlight-pill">Catchy</span> visual and digital user centered products
        </h1>

        {/* Subtext */}
        <p className="service-extra-hero-subtitle">
          I specialize in creating design-centered
          projects that prioritize Human-Computer Interaction & Creativity. I don't just build interfaces ans make designs;
          I engineer experiences.
        </p>

        {/* Interactive Row */}
        <div className="service-extra-hero-cta-group">
        <Link
          to="/contact"
          className="service-extra-link-wrapper"
        >
          <button className="service-extra-btn-primary">Hire Me</button>
        </Link>

          <div className="service-extra-social-proof">
            <div className="service-extra-avatar-group">
              <img src={Success} alt="Client 1" className="service-extra-avatar" />
              <img src={Christy} alt="Client 2" className="service-extra-avatar" />
              <img src={Richard} alt="Client 3" className="service-extra-avatar" />
              <img src={Justina} alt="Client 4" className="service-extra-avatar" />
            </div>
            <span className="service-extra-proof-text">50+ Regular Client Worldwide</span>
          </div>
        </div>
      </div>

      {/* Floating Circular Badge */}
      <div className="service-extra-badge-circle">
        <div className="service-extra-badge-arrow">↗</div>
        <svg viewBox="0 0 100 100" className="service-extra-badge-text-svg">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
          <text>
            <textPath href="#circlePath" spacing="auto">
              SAMUEL SALLO • ABEG BRING WORK •
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
}