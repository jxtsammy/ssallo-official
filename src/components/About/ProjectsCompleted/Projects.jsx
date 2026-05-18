import { useState, useEffect } from 'react';
import './Projects.css';

// Background Assets
import mobileAsset from '../../../assets/mobileApp.jpg';
import webAsset from '../../../assets/webDev.jpg';

const RecentProjects = () => {
  const projects = [
    {
      title: "NextMakers Foundation Official Website",
      category: "Website",
      description:
        "A modern foundation website built to showcase programs, innovation, and community impact.",
      repoLink: "https://github.com/jxtsammy/Next-Makers-Official.git",
      buttonText: "View Repository"
    },
    {
      title: "Academic Network (Acanet)",
      category: "Mobile App",
      description:
        "A mobile-based platform that enhances student-lecturer communication by enabling seamless global connectivity and academic networking.",
      repoLink: "https://github.com/jxtsammy/Acanet-App.git",
      buttonText: "View Repository"
    },
    {
      title: "Enactus KNUST Official Website",
      category: "Website",
      description:
        "Official website for Enactus KNUST showcasing initiatives, projects, and organizational activities.",
      repoLink: "https://www.enactusknust.org",
      buttonText: "Visit Website"
    },
    {
      title: "Land Secure Real Estate App",
      category: "Mobile App",
      description:
        "A secure real estate platform connecting verified land sellers with buyers through a transparent and map-integrated system.",
      repoLink: "https://github.com/jxtsammy/Landsecure-Real-Estate-App.git",
      buttonText: "View Repository"
    },
    {
      title: "Daily Spark Motivational App",
      category: "Mobile App",
      description:
        "A mobile-based platform that gives daily motivation to start your day and encourage you at every step.",
      repoLink: "https://github.com/jxtsammy/Daily-Spark-App.git",
      buttonText: "View Repository"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide Every 5 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  // Navigation Logic
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  // Dynamic Backgrounds
  const getProjectBackground = (category) => {
    if (category === "Mobile App") {
      return mobileAsset;
    } else if (category === "Website") {
      return webAsset;
    }

    return '';
  };

  return (
    <section className="projects-section">
      <div className="projects-header">
        <div className="header-left">
          <div className="accent-group">
            <div className="accent-line"></div>

            <span className="accent-text">
              PROJECTS COMPLETED
            </span>
          </div>

          <h2 className="projects-headline">
            Selected Projects <br />
            Recently Completed
          </h2>
        </div>

        <div className="projects-nav">
          <button onClick={prevSlide} className="nav-btn">
            <i className="fas fa-chevron-left"></i>
          </button>

          <button onClick={nextSlide} className="nav-btn">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="projects-viewport">
        <div
          className="projects-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.6s ease-in-out'
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card-wrapper"
            >
              <div
                className="project-card"
                style={{
                  backgroundImage: `url(${getProjectBackground(
                    project.category
                  )})`
                }}
              >
                <div className="project-overlay"></div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-desc">
                    {project.description}
                  </p>

                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn-more-btn"
                  >
                    {project.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;