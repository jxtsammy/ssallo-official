import './ServiceHero.css';
import MyImage from '../../../assets/camp.jpeg'
import { Link } from 'react-router-dom';

const ServiceHero = () => {
  return (
    <section className="service-hero-container">
      <div className="service-hero-content">
        <h1 className="s-hero-title">
          Designing & crafting seamless digital experiences that just feel right
        </h1>

        <p className="hero-description">
          My skills specializes in bridging the gap between complex technology and
          seamless user experiences and designs.
        </p>

        <p className="hero-subtext">
        As a Frontend Developer and UI/UX Designer, I specialize in creating design-centered
          projects that prioritize Human-Computer Interaction. I don't just build interfaces;
          I engineer experiences.
        </p>

        <Link to='/contact' className='link-btn'><button className="learn-more-btn">Learn more</button></Link>
      </div>

      <div className="service-hero-visual">
        <div className="video-thumbnail">
          <img
            src={MyImage}
            alt="Design collaboration"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;