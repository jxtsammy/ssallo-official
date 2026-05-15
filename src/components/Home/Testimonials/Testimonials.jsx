import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import Julien from '../../../assets/testimonials/Julien.jpg'
import McGovern from '../../../assets/testimonials/McGovern.jpeg'
import Christy from '../../../assets/testimonials/Christy.jpg'
import Justina from '../../../assets/testimonials/Justina.jpeg'
import Gifty from '../../../assets/testimonials/Gifty.jpeg'
import Richard from '../../../assets/testimonials/rich.jpeg'

const testimonialData = [
  {
    quote: "Sam is a great guy, both technically and in character. I got to know him through Enactus, and later had the opportunity to serve as his deputy head in the tech division. He has a rare mix of technical brilliance, strong leadership, and relentless focus. I still find myself wondering how he manages to handle everything he’s involved in and still perform at a high level—whether it’s coding, design, project management, or the other responsibilities he takes on.",
    name: "Julien Glory Manana",
    role: "Deputy Technology Lead, Enactus KNUST (2025 - 2026)",
    image: Julien
  },
  {
    quote: "Working with Samuel has been an incredible experience. He consistently strives to brong creativity, professionalism, and strong technical skill to every project he handles. As an all round techie he pays close attention to detail and always delivers work that has both  visually engaging aesthetic while its functional, and impactful, while also being dependable in leadership and teamwork. Samuel is highly instrumental in any role he takes on, and I am confident that any organization or team would greatly benefit from him.",
    name: "McGovern Twumasi Owusu-Bekoe.",
    role: "Publicity Lead, Enactus KNUST (2026)",
    image: McGovern
  },
  {
    quote: "Great work on my  flyers—very creative, professional, and eye-catching. They really helped boost my business. Highly recommended!",
    name: "Justina Glover",
    role: "Client, CEO of Nails by Aura",
    image: Justina
  },
  {
    quote: "Samuel's graphic design and software development works are top-notch. He pays close attention to detail, listens carefully to clients' needs, and delivers exactly what is expected. One thing I truly appreciate about him is his reliability, you never have to call follow-up constantly or chase him around to get work done. He is dependable, professional and someone whose work can be genuinely trusted.",
    name: "Christabel Benewaah",
    role: "Team Member, Enactus KNUST",
    image: Christy
  },
  {
    quote: "Working with Sammy has always been a smooth experience. He is reliable, committed, and incredibly fast with delivering quality work. Beyond just coding or designing, he actively contributes meaningful ideas that improve the overall project. He doesn’t just execute tasks — he thinks through the product and adds real value to the team.",
    name: "Gifty Appiah",
    role: "CEO, NextMakers Foundation",
    image: Gifty
  },
  {
    quote: "Working with Samuel was one of those experiences that reminds you how much great talent elevates a team. He delivered on every task. Not just visually, they felt right.",
    name: "Richard Bobie",
    role: "Technology Team Lead, Enactus KNUST (2025)",
    image: Richard
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