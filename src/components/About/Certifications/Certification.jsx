import { useState, useEffect } from 'react';
import './Certification.css';
import certBackground from '../../../assets/cert.jpg';

const Certifications = () => {
  const certs = [
    {
      name: "Cybersecurity Fundamentals",
      company: "IBM",
      date: "August,2025",
      description:
        "Certified in Cybersecurity Fundamentals, with foundational knowledge in digital security, threat awareness, network protection, and cybersecurity best practices."
    },
    {
      name: "Techprenure’s Bootcamp",
      company: "Techstripped Africa",
      date: "June 2025",
      description:
        "Completed the Techpreneur’s Bootcamp, gaining practical experience in entrepreneurship, innovation, problem-solving, and technology-driven business development."
    },
    {
      name: "Introduction to Artificial Intelligence",
      company: "IBM",
      date: "January, 2026",
      description:
        "Completed an Introduction to Artificial Intelligence program, gaining foundational knowledge in AI concepts, intelligent systems, machine learning principles, and real-world AI applications."
    },
    {
      name: "Fiber Optics Training (Splicing and Repair of Fiber Optics)",
      company: "Johvic Fiber Optics Ltd",
      date: "February, 2026",
      description:
        "Completed Fiber Optics Training focused on the splicing, installation, and repair of fiber optic cables, gaining hands-on experience in network connectivity, fault detection, and maintenance of fiber optic communication systems."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certs.length - 1 : prev - 1));
  };

  // ✅ AUTO SLIDE EVERY 5 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === certs.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [certs.length]);

  return (
    <section className="certs-section">
      <div className="certs-header">
        <div className="accent-line-group">
          <div className="accent-line"></div>
          <span className="accent-text">Certifications</span>
        </div>

        <h2 className="certs-title">
          Certified expertise in <br />
          fields of skills development
        </h2>
      </div>

      <div className="certs-carousel">
        <div
          className="certs-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certs.map((cert, index) => (
            <div key={index} className="cert-slide">
              <div
                className="cert-card"
                style={{ backgroundImage: `url(${certBackground})` }}
              >
                <div className="cert-content">
                  <h3 className="cert-name">{cert.name}</h3>

                  <div className="cert-meta">
                    <span className="cert-company">{cert.company}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>

                  <p className="cert-description">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="certs-controls-wrapper">
        <button onClick={prevSlide} className="control-btn" aria-label="Previous">
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="pagination-dots">
          {certs.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="control-btn" aria-label="Next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Certifications;