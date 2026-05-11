import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonialData = [
  {
    quote: "Great Designer, does great work and is very flexible with change. if you’re a programmer and are looking for UI/UX designer is definitely well qualified for the job.",
    name: "James Quincey",
    role: "CEO of Coca ColA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop"
  },
  {
    quote: "The attention to detail in the UI layout was exceptional. Communication was smooth throughout the entire development cycle.",
    name: "Eleanor Scott",
    role: "Product Manager at TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop"
  }
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
              <span className="author-name">{name}</span>
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