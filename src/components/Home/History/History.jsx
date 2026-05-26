import { useEffect, useRef, useState } from 'react';
import './History.css';

const HistorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
      desc: "An active ambassador for BAPX and Team Lead for the KNUST Chapter working with a team of other ambitious ambassador to create jobs opportunities. Where we help student specifically, to secure jobs by making known to them vacant job applications so that those who qualify can apply and secure the job regardless of the course you studied in school."
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
    <section
      ref={sectionRef}
      className={`history-container ${isVisible ? 'is-active' : ''} ${isExpanded ? 'expanded' : 'collapsed'}`}
    >
      <div className="history-wrapper-inner">
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
              I am a passionate frontend and mobile developer, UI/UX designer, and creative
              technologist focused on building clean, user-centered digital experiences that
              combine functionality with modern design.<br /><br />

              My journey in tech reignited in <strong>2022</strong> when I discovered web
              development through HTML during high school. After graduating, I expanded my
              skills in CSS and JavaScript, which sparked my passion for both development and
               visually engaging design.<br /><br />

              In <strong>2023</strong>, I advanced into React development, strengthening my
              frontend engineering skills while also building a solid foundation in graphic
              design and visual communication. During the same year, I joined <strong>Enactus KNUST</strong>,
               where I contributed to sustainable and community-driven initiatives such as <strong>Project Wellfed</strong>
               and became part of the organization’s Tech Division.<br /><br />

              In <strong>2024</strong>, I expanded into mobile application development using React Native,
              Expo, and JavaScript, while also exploring video editing and digital creative workflows.
              By <strong>2025</strong>, I further developed my expertise in project management, Human-Computer
              Interaction, and UI/UX design using tools like Figma, which deepened my understanding of creating
              intuitive and impactful user experiences.<br /><br />

              Later in <strong>2025</strong>, I was appointed <strong>Vice President and Head of Technology for
              Enactus KNUST</strong>, where I contributed to leadership, mentorship, and the growth of
              technology-driven initiatives within the organization. In <strong>2026</strong>, I was appointed <strong>
              Chief Technology Officer of the Nextmakers Foundation</strong>, continuing my mission of using technology,
              leadership, and innovation to empower others and create meaningful impact within communities.<br /><br />

              My journey has been shaped by continuous learning, creativity, leadership, and a strong commitment to building solutions that make a difference.
            </p>
            </div>
          </div>
        </div>

        {/* The Fade Out Overlay Mask */}
        <div className="history-fade-overlay"></div>
      </div>

      {/* Expand / Collapse Action Trigger */}
      <div className="history-action-container">
        <button
          className="history-toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
};

export default HistorySection;