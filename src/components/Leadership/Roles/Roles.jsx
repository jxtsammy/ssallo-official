import { useState, useEffect, useCallback } from 'react';
import './Roles.css';
import DH from '../../../assets/camp.jpeg'
import CG from '../../../assets/IMG_9816.JPG'
import NM from '../../../assets/NextMakers.png'

const LeadershipCarousel = () => {
  const leadershipData = [
    {
      role: "Vice President",
      organization: "Enactus KNUST",
      date: "August 2025",
      description: "Leading strategic initiatives and fostering a culture of social entrepreneurship and innovation within the student body.",
      image: CG
    },
    {
      role: "Technology Division Head",
      organization: "Enactus KNUST",
      date: "August 2025",
      description: "Overseeing the development of digital assets and empowering the team through ICT and sustainable technology infrastructure.",
      image: DH
    },
    {
      role: "Chief Technology Officer",
      organization: "NextMakers Foundation",
      date: "March 2026",
      description: "Driving the technical vision and managing cross-platform application development to support community resource building.",
      image: NM
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === leadershipData.length - 1 ? 0 : prev + 1));
  }, [leadershipData.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? leadershipData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const active = leadershipData[currentIndex];

  return (
    <section className="leadership-carousel">
      <div className="carousel-grid">
        <div className="carousel-text-content">
          <h2 className="carousel-title">Leadership Journey</h2>
          <p className="carousel-subtitle">
            Dedicated to driving impact through technology and student-led social innovation.
          </p>

          <div className="testimonial-box">
            <p className="role-description">{active.description}</p>
          </div>

          <div className="carousel-footer">
            <div className="user-info">
              <div className="user-details">
                <h4>{active.role}</h4>
                <span>{active.organization} | {active.date}</span>
              </div>
            </div>
            <div className="nav-buttons">
              <button onClick={prevSlide} className="nav-btn prev" aria-label="Previous">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button onClick={nextSlide} className="nav-btn next" aria-label="Next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-image-area">
          <div className="image-container">
            <img src={active.image} alt={`${active.role} - ${active.organization}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCarousel;