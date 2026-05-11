import { useEffect, useRef, useState } from 'react';
import './History.css';
import Profile from '../../../assets/profileImg.png'

const HistorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      {/* Top Profile Header */}
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
          <button className="btn-resume"><i className="fas fa-download"></i> Download Resume</button>
        </div>
      </div>

      {/* Main History Grid */}
      <div className="history-grid">
        {/* Education Column */}
        <div className="history-col">
          <h3 className="col-label edu-label">EDUCATION</h3>
          <div className="history-item">
            <span className="item-date">2021 - Present • UK</span>
            <h4>Website Design Course</h4>
            <p>Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri.</p>
          </div>
          <div className="history-item">
            <span className="item-date">2016 - 2019 • Cambridge University</span>
            <h4>Bachelor of Philosophy (B. Phil.)</h4>
            <p>Coursework - Git, WordPress, Javascript, iOS, Android, app leos and macos.</p>
          </div>
        </div>

        {/* Work History Column */}
        <div className="history-col">
          <h3 className="col-label work-label">WORK HISTORY</h3>
          <div className="history-item">
            <span className="item-date">2019 - Present • Google</span>
            <h4>Team Lead of UI/UX Designer</h4>
            <p>Collaborate with creative and development teams on the execution of ideas.</p>
          </div>
          <div className="history-item">
            <span className="item-date">2016 - 2019 • Apple</span>
            <h4>Senior UI/UX Designer</h4>
            <p>Monitored technical aspects of the front-end delivery for projects.</p>
          </div>
        </div>

        {/* Tools Column */}
        <div className="history-col">
          <h3 className="col-label tools-label">Bio</h3>
          <div className="tools-masonry">
            <p className='bio'>
              I’m a Graphic Designer, Web and Mobile Developer,
              and Project Manager passionate about tech, innovation, and creating
              impactful digital experiences. I enjoy blending creativity with technology t
              o build clean designs, functional applications, and solutions that solve real-world
              problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;