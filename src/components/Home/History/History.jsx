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
                Driven and detail-oriented developer and designer with a strong passion for building clean,
                user-centered digital experiences. Skilled in frontend web and mobile development, UI/UX design,
                and graphic design, with a growing interest in creating impactful technology solutions that combine
                functionality with modern design. Adept at collaborating within teams, managing creative projects,
                and continuously learning emerging technologies to improve productivity, usability, and overall user
                experience. Passionate about using technology to solve real-world problems and create meaningful digital interactions.<br /><br />

                I’ve always had a strong interest in technology, but everything truly reignited when I discovered
                web development through HTML in high school in 2022. After completing high school, I advanced my skills by learning
                CSS and JavaScript, which allowed me to build more refined and functional websites and sparked my passion for good, intentional design. <br /><br />

                In early 2023, I stepped up my web development journey by adding the React stack to my skill set, which guided me
                toward becoming a full frontend developer. During this same period, I developed a strong foundation in graphic design,
                learning the principles of effective visual communication and the importance of creating visually engaging designs.<br /><br />

                In February 2023, I joined Enactus KNUST, a student organization that develops entrepreneurial leaders who build sustainable
                projects that benefit communities, the environment, and the world at large. During my time there, I joined Project Wellfed,
                an initiative focused on reducing post-harvest losses in the tomato market. I also became part of the Tech Division, where I
                applied my technical skills to support impactful, technology-driven solutions.<br /><br />

                In 2024, I expanded into mobile development. Although the timeframe was short and fast-paced, I leveraged AI tools to quickly
                learn React Native, Expo, and JavaScript for mobile application development. During this period, I also gained foundational
                experience in video editing and became familiar with various tools used in the creative workflow.<br /><br />

                In 2025, I further broadened my expertise by learning project management and Human-Computer Interaction. I developed a deeper
                understanding of how to effectively lead teams, manage projects, and apply best practices in coordination and execution. I also
                explored the principles behind human-computer interaction, emphasizing the importance of designing intuitive and user-centered interfaces.<br /><br />

                Later in mid-2025, I transitioned into UI/UX design, where I learned to craft clean, engaging, and user-friendly interfaces
                using tools like Figma. Around this time, I was honored as “Enactor of the Week” in recognition of my dedication and contributions
                within the Enactus KNUST Tech Division, a moment that reflected my commitment and consistency.<br /><br />

                In August, I was appointed Vice President and Head of Technology for Enactus KNUST, continuing the legacy of my predecessors.
                In this role, I have led initiatives that strengthen the organization’s technical capacity while mentoring and collaborating with
                other young tech enthusiasts across different organizations to grow the local tech ecosystem.<br /><br />

                In February 2026, I was appointed Chief Technology Officer of the Nextmakers Foundation after working closely with the Founder & CEO on multiple
                occasions, where my skills, resilience, teamwork, and dedication were consistently demonstrated and recognized. In this role, I remain deeply
                committed to advancing the organization’s mission of providing mentorship and support to individuals, helping shape the leaders and changemakers of tomorrow.<br /><br />

                My journey has been defined by continuous learning, growth, and a drive to turn ideas into impactful solutions. I am committed to using technology,
                design, and leadership not just as skills, but as tools to empower others, build meaningful systems, and create lasting impact in communities around me.
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