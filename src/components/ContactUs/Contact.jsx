import { useEffect, useRef, useState } from 'react';
import './Contact.css';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent!");
  };

  return (
    <section
      ref={sectionRef}
      className={`contact-container ${isVisible ? 'reveal' : ''}`}
    >
      <div className="contact-header">
        <div className="header-left">
          <span className="get-started">Get Started</span>
          <h2 className="contact-title">
            Get in touch with us.<br />
            We're here to assist you.
          </h2>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group" style={{ transitionDelay: '0.3s' }}>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />
            <div className="focus-line"></div>
          </div>

          <div className="input-group" style={{ transitionDelay: '0.4s' }}>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
            <div className="focus-line"></div>
          </div>

          <div className="input-group" style={{ transitionDelay: '0.5s' }}>
            <label>Phone Number (optional)</label>
            <input type="tel" placeholder="Enter phone number" />
            <div className="focus-line"></div>
          </div>
        </div>

        <div className="input-group full-width" style={{ transitionDelay: '0.4s' }}>
          <label>Message</label>
          <textarea rows="1" placeholder="Write your message here..." required></textarea>
          <div className="focus-line"></div>
        </div>

        <div className="form-footer">
          <button type="submit" className="submit-btn">
            Leave us a Message <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;