import { useState, useEffect, useCallback } from 'react';
import './Quote.css';

const techQuotes = [
  {
    quote: "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
    author: "STEVE JOBS",
    title: "Co-founder of Apple Inc."
  },
  {
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "STEVE JOBS",
    title: "Co-founder of Apple Inc."
  },
  {
    quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    author: "MARK ZUCKERBERG",
    title: "Founder of Meta"
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "BILL GATES",
    title: "Co-founder of Microsoft"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "STEVE JOBS",
    title: "Co-founder of Apple Inc."
  }
];

const QuoteSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const triggerFade = useCallback(() => {
    setIsFading(true);
    setTimeout(() => setIsFading(false), 500);
  }, []);

  const handleNext = useCallback(() => {
    triggerFade();
    setActiveIndex((prev) => (prev + 1) % techQuotes.length);
  }, [triggerFade]);

  const handlePrev = useCallback(() => {
    triggerFade();
    setActiveIndex((prev) => (prev - 1 + techQuotes.length) % techQuotes.length);
  }, [triggerFade]);

  // Automatic transition every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [handleNext]);

  const { quote, author, title } = techQuotes[activeIndex];

  return (
    <section className="quote-container">
      <div className="quote-icon">
        <i className="fas fa-quote-right"></i>
      </div>

      <div className={`quote-content ${isFading ? 'fade-out' : 'fade-in'}`}>
        <p className="main-quote">“{quote}”</p>

        <div className="quote-author">
          <span className="author-name">{author}</span>
          <span className="author-title">{title}</span>
        </div>
      </div>

      <div className="quote-controls">
        <button className="nav-arrow-btn" onClick={handlePrev} aria-label="Previous quote">
          <i className="fas fa-arrow-left"></i>
        </button>

        <div className="quote-dots">
          {techQuotes.map((_, index) => (
            <span
              key={index}
              className={`quote-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                if(index !== activeIndex) {
                  triggerFade();
                  setActiveIndex(index);
                }
              }}
            ></span>
          ))}
        </div>

        <button className="nav-arrow-btn" onClick={handleNext} aria-label="Next quote">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default QuoteSection;