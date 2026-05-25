import './ServiceHero.css';
import MyImage from '../../../assets/meImg.png'
import CV from '../../../CV/SAMUEL SALLO OFFICAL CV TEMPLATE.pdf'

const ServiceHero = () => {
  return (
    <section className="service-hero-container">
      <div className="service-hero-content">
        <h1 className="s-hero-title">
        On-time delivery, styled execution, with polished perfection.
        </h1>

        <p className="hero-description">
          I provide end-to-end digital and creative solutions designed to meet goals with precision, speed, and consistency.
          Every project I take on is carefully planned and executed to ensure deadlines are met without compromising quality, clarity, or performance.
        </p>

        <p className="hero-subtext">
        Beyond just delivery, I focus on crafting visually refined and user-centered outcomes that align with your vision.
        My work is driven by a commitment to excellence and customer satisfaction—ensuring every solution not only works as intended, but also looks and feels exceptional.
        </p>

        <a href={CV} download className='link-btn'><button className="s-learn-more-btn">Download CV</button></a>
      </div>

      <div className="service-hero-visual">
        <div className="video-thumbnail">
          <img
            src={MyImage}
            alt="Sallo Samuel"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;