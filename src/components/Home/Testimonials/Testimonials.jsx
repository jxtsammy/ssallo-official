import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import Julien from '../../../assets/testimonials/Julien.jpg'
import McGovern from '../../../assets/testimonials/McGovern.jpeg'
import Christy from '../../../assets/testimonials/Christy.jpg'
import Justina from '../../../assets/testimonials/Justina.jpeg'
import Gifty from '../../../assets/testimonials/Gifty.jpeg'

const testimonialData = [
  {
    quote: "Sam is a great guy, both technically and in character. I got to know him through Enactus, and later had the opportunity to serve as his deputy head in the tech division. He has a rare mix of technical brilliance, strong leadership, and relentless focus. I still find myself wondering how he manages to handle everything he’s involved in and still perform at a high level—whether it’s coding, design, project management, or the other responsibilities he takes on.",
    name: "Julien Glory Manana",
    role: "Deputy Technology Lead, Enactus KNUST (2025 - 2026)",
    image: Julien
  },
  {
    quote: "The attention to detail in the UI layout was exceptional. Communication was smooth throughout the entire development cycle.",
    name: "McGovern Twumasi Owusu-Bekoe.",
    role: "Publicity Lead, Enactus KNUST (2025 - 2026)",
    image: McGovern
  },
  {
    quote: "Great work on my  flyers—very creative, professional, and eye-catching. They really helped boost my business. Highly recommended!",
    name: "Justina Glover",
    role: "Client, CEO of Nails by Aura",
    image: Justina
  },
  {
    quote: "The attention to detail in the UI layout was exceptional. Communication was smooth throughout the entire development cycle.",
    name: "Christabel Benewaah",
    role: "Team Member, Enactus KNUST",
    image: Christy
  },
  {
    quote: "The attention to detail in the UI layout was exceptional. Communication was smooth throughout the entire development cycle.",
    name: "Gifty Appiah",
    role: "CEO, NextMakers Foundation",
    image: Gifty
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    triggerAnimation();
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    triggerAnimation();
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Matches CSS animation duration
  };

  const { quote, name, role, image } = testimonialData[currentIndex];

  return (
    <section
      ref={sectionRef}
      className={`testimonials-container ${isVisible ? 'active-section' : ''}`}
    >
      <div className="testimonials-grid">
        {/* Left Side: Content */}
        <div className="testimonials-text-side">
          <h2 className="section-title">What my clients <br /> say about my work!</h2>

          <div className={`testimonial-card ${isAnimating ? 'fade-blur' : ''}`}>
            <p className="quote-text">“{quote}”</p>
            <div className="author-meta">
              <span className="t-author-name">{name}</span>
              <span className="author-role">{role}</span>
            </div>
          </div>

          <div className="navigation-controls">
            <button onClick={handlePrev} className="nav-arrow">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="dot-indicators">
              {testimonialData.map((_, i) => (
                <div key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} />
              ))}
            </div>
            <button onClick={handleNext} className="nav-arrow active-arrow">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className={`testimonials-image-side ${isAnimating ? 'fade-blur' : ''}`}>
          <div className="image-wrapper">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;