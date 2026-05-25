import { useState } from 'react';
import './Organizations.css';

// Leave placeholders for your actual background images
import EnactusBg from '../../../assets/organizations/Enactus.jpg';
import AgriCycleBg from '../../../assets/organizations/Agricycle.jpg';
import SunawashBg from '../../../assets/organizations/IMG_0233.jpg';
import NextMakers from '../../../assets/organizations/NextMakers.jpg';

const Organizations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileFading, setIsMobileFading] = useState(false);

  // If you add a 4th or 5th card to this array, the desktop carousel will slide smoothly!
  const cards = [
    {
      id: 1,
      name: "Enactus KNUST",
      title: "A student organization that uses entrepreneurial action to solve societal problems to create a better world. Empowering communities through entrepreneurial action and sustainable innovation.",
      link: "https://enactus.org",
      bgImage: EnactusBg // Replace with EnactusBg
    },
    {
      id: 2,
      name: "AgriCycle",
      title: "Agricycle transforms food and plantain waste into valuable resources, including organic fertilizers and biodegradable paper packaging. Through sustainable innovation, we reduce agricultural waste while creating eco-friendly alternatives.",
      link: "https://agricycle.org",
      bgImage: AgriCycleBg // Replace with AgriCycleBg
    },
    {
      id: 3,
      name: "Sunawash",
      title: "Turning waste into opportunity by producing high-quality multipurpose soaps for skincare and laundry. Creating cleaner communities through sustainable innovation and climate-conscious solutions.",
      link: "https://www.linkedin.com/company/sunawash-africa-ltd/",
      bgImage: SunawashBg // Replace with SunawashBg
    },
    {
      id: 4,
      name: "NextMakers Foundation",
      title: "A foundation committed to raising problem solvers equipped to tackle real-world challenges. We nurture creativity, leadership, and innovation to shape the next generation of changemakers.",
      link: "https://www.linkedin.com/company/nextmakers-foundation/",
      bgImage: NextMakers // Replace with SunawashBg
    }
  ];

  // Maximum index calculation ensures navigation controls only slide if extra cards exist
  const maxDesktopIndex = Math.max(0, cards.length - 3);

  const handleNext = () => {
    if (window.innerWidth <= 768) {
      setIsMobileFading(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
        setIsMobileFading(false);
      }, 300);
    } else if (maxDesktopIndex > 0) {
      setActiveIndex((prev) => (prev + 1) % (maxDesktopIndex + 1));
    }
  };

  const handlePrev = () => {
    if (window.innerWidth <= 768) {
      setIsMobileFading(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
        setIsMobileFading(false);
      }, 300);
    } else if (maxDesktopIndex > 0) {
      setActiveIndex((prev) => (prev - 1 + (maxDesktopIndex + 1)) % (maxDesktopIndex + 1));
    }
  };

  return (
    <section className="orgs-section">
      <div className="orgs-container">

        <div className="orgs-header-wrapper">
          <div className="orgs-header">
            <div className="orgs-subtitle-wrapper">
              <span className="orgs-line-decorator"></span>
              <span className="orgs-subtitle">ORGANIZATIONS I'VE WORKED WITH</span>
            </div>
            <h2 className="orgs-main-title">
            Collaborating with organizaions that deliver excellence
            </h2>
          </div>

          {/* Nav buttons using Font Awesome <i> tags */}
          <div className="orgs-nav-buttons">
            <button className="nav-btn" onClick={handlePrev} aria-label="Previous slide">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-btn" onClick={handleNext} aria-label="Next slide">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="orgs-carousel-window">
          {/* PC View Track: Calculates layout shifting by groups perfectly */}
          <div
            className="orgs-pc-track"
            style={{ transform: `translateX(-${activeIndex * (100 / cards.length)}%)`, width: `${(cards.length / 3) * 100}%` }}
          >
            {cards.map((card) => (
              <div
                key={`pc-${card.id}`}
                className="org-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.98) 50%. rgba(0, 0, 0, 1) 100%), url(${card.bgImage})`,
                  flex: `0 0 calc(${100 / cards.length}% - 28px)` // Uniformly structures square aspects
                }}
              >
                <div className="org-card-content">
                  <span className="org-card-tagline">{card.name}</span>
                  <p className="org-card-text">{card.title}</p>
                  <a href={card.link} target="_blank" rel="noopener noreferrer" className="org-connect-btn">
                    Connect
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View: Clean Fade variant */}
          <div
            className={`org-card mobile-only-card ${isMobileFading ? 'fade-out' : 'fade-in'}`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%), url(${cards[activeIndex].bgImage})`
            }}
          >
            <div className="org-card-content">
              <span className="org-card-tagline">{cards[activeIndex].name}</span>
              <p className="org-card-text">{cards[activeIndex].title}</p>
              <a href={cards[activeIndex].link} target="_blank" rel="noopener noreferrer" className="org-connect-btn">
                Connect on LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Mobile controls positioned below container */}
        <div className="orgs-mobile-nav">
          <button className="nav-btn" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="nav-btn" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Organizations;