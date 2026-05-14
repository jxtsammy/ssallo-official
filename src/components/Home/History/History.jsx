import { useEffect, useRef, useState } from 'react';
import './History.css';
import Profile from '../../../assets/profileImg.png';
import CV from '../../../CV/SAMUEL SALLO OFFICAL CV TEMPLATE.pdf'

const HistorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const education = [
    {
      date: "2022 - Present • Kwame Nkrumah University of Science & Technology",
      title: "Bachelor of Science (B.Sc.) in Computer Science",
      desc: "Studied Computer Science at KNUST, where I developed a strong passion for technology, innovation, and building impactful digital solutions through problem-solving and practical development experience."
    },
  ];

  const workHistory = [
    {
      date: "2025 • VRA Academy",
      title: "Intern",
      desc: "Supported technology operations and provision of technical support"
    },
    {
      date: "2025 - Present • Enactus KNUST",
      title: "Technology Division Lead",
      desc: "Supported technology operations and digital solutions development."
    },
    {
      date: "2026 - Present • NextMakers Foundation",
      title: "Chief Technology Officer",
      desc: "Technology innovation, digital strategy, and the development of impactful solutions that empower young changemakers."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`history-container ${isVisible ? 'is-active' : ''}`}>
      <div className="profile-header-card">
        <div className="header-info">
          <div className="avatar-circle">
            <img src={Profile} alt="Julia" />
          </div>
          <div className="header-text">
            <h2>Visual Designer & Webflow Developer.</h2>
            <p>I specialize in UI/UX & Graphic Design and my passion is all about building elegant and professional user interfaces and websites.</p>
          </div>
        </div>
        <div className="header-actions">
          <a href={CV} download className="resume-link">
            <button className="btn-resume">
              <i className="fas fa-download"></i> Download Resume
            </button>
          </a>
        </div>
      </div>

      <div className="history-grid">
        {/* Education Column */}
        <div className="history-col">
          <h3 className="col-label edu-label">EDUCATION</h3>
          {education.map((item, index) => (
            <div key={index} className="history-item">
              <span className="item-date">{item.date}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Work History Column */}
        <div className="history-col">
          <h3 className="col-label work-label">WORK HISTORY</h3>
          {workHistory.map((item, index) => (
            <div key={index} className="history-item">
              <span className="item-date">{item.date}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bio Column */}
        <div className="history-col">
          <h3 className="col-label bio-label">BIO</h3>
          <div className="bio-content">
            <p>
              I am a passionate Visual Designer and Webflow Developer with over 5 years of experience
              creating digital experiences that are as functional as they are beautiful.
            </p>
            <p>
              My approach blends technical precision with creative storytelling. Whether I'm
              prototyping in Figma or building complex logic in Webflow, my goal is always to
              empower brands and delight users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;