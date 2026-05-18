import { useEffect, useRef, useState } from 'react';
import './History.css';

const HistorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const education = [
    {
      date: "2023 - Present • Kwame Nkrumah University of Science & Technology",
      title: "Bachelor of Science (B.Sc.) in Computer Science",
      desc: "Studied Computer Science at KNUST, where I developed a strong passion for technology, innovation, and building impactful digital solutions through problem-solving and practical development experience."
    },
  ];

  const workHistory = [
    {
      date: "2017 - Present • Amenuveve Ventures",
      title: "Sales Agent",
      desc: "Contributed to daily operations, enhanced customer service skills, and supported sales goals through effective communication and product knowledge."
    },
    {
      date: "2024 – 2025 • BAPX",
      title: "Brand Ambassador",
      desc: "An active ambassador for BAPX and Team Lead for the KNUST Chapter working with a team of other ambitious ambassador to create jobs opportunities. •	Where we help student specifically, to secure jobs by making known to them vacant job applications so that those who qualify can apply and secure the job regardless of the course you studied in school."
    },
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
            Driven and detail-oriented developer and designer with a strong passion for building clean,
            user-centered digital experiences. Skilled in frontend web and mobile development, UI/UX design,
            and graphic design, with a growing interest in creating impactful technology solutions that combine
            functionality with modern design. Adept at collaborating within teams, managing creative projects,
            and continuously learning emerging technologies to improve productivity, usability, and overall user
            experience. Passionate about using technology to solve real-world problems and create meaningful digital interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;