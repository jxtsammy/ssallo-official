import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null); // Ref for the form data

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
    setIsSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Message Sent! We will get back to you shortly.");
      formRef.current.reset();
    })
    .catch((error) => {
      alert("Something went wrong. Please try again.");
      console.error("EmailJS Error:", error.text);
    })
    .finally(() => {
      setIsSending(false);
    });
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

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group" style={{ transitionDelay: '0.3s' }}>
            <label>Your Name</label>
            <input
              type="text"
              name="name" // Matches EmailJS {{name}}
              placeholder="Enter your name"
              required
            />
            <div className="focus-line"></div>
          </div>

          <div className="input-group" style={{ transitionDelay: '0.4s' }}>
            <label>Email Address</label>
            <input
              type="email"
              name="email" // Matches EmailJS {{email}}
              placeholder="Enter your email"
              required
            />
            <div className="focus-line"></div>
          </div>

          <div className="input-group" style={{ transitionDelay: '0.5s' }}>
            <label>Phone Number (optional)</label>
            <input
              type="tel"
              name="phone" // Matches EmailJS {{phone}}
              placeholder="Enter phone number"
            />
            <div className="focus-line"></div>
          </div>
        </div>

        <div className="input-group full-width" style={{ transitionDelay: '0.4s' }}>
          <label>Message</label>
          <textarea
            name="message" // Matches EmailJS {{message}}
            rows="1"
            placeholder="Write your message here..."
            required
          ></textarea>
          <div className="focus-line"></div>
        </div>

        <div className="form-footer">
          <button type="submit" className="submit-btn" disabled={isSending}>
            {isSending ? "Sending..." : "Leave us a Message"}
            {!isSending && <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;