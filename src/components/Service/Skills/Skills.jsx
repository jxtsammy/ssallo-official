import './Skills.css';
import Web from '../../../assets/webDev.jpg'
import Mobile from '../../../assets/mobileApp.jpg'
import Graphics from '../../../assets/graphics.jpg'

const SkillsSection = () => {
  const mainSkills = [
    {
      title: "Web Development",
      description: "Building responsive, high-performance web platforms using React.js and modern backend integrations.",
      link: "https://github.com/jxtsammy",
      bgImage: Web
    },
    {
      title: "Mobile Development",
      description: "Specializing in cross-platform React Native applications with smooth animations and integrated cloud services.",
      link: "https://github.com/jxtsammy",
      bgImage: Mobile
    },
    {
      title: "Graphic Design",
      description: "Creating high-fidelity cinematic aesthetics and visual identities with a focus on UI/UX principles.",
      link: "https://photos.app.goo.gl/w9yEtHNm5n9JGFc46",
      bgImage: Graphics
    }
  ];

  const secondarySkills = [
    "React Native", "React.js", "Firebase", "Supabase", "Sanity CMS",
    "Github", "Figma", "Canva", "VS Code", "AI Tools", "Snack", "Expo", "Snack", "Notion", "Others"
  ];

  return (
    <section className="skills-container">
      {/* Header from image_0b5881.jpg */}
      <div className="skills-intro">
        <div className="sub-header">
          <div className="line"></div>
          <span>MY EXPERTISE</span>
        </div>
        <h2 className="main-headline">
          Crafting digital experiences <br />
          through code and creative design
        </h2>
      </div>

      {/* Main Skill Cards */}
      <div className="skills-grid">
        {mainSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${skill.bgImage})` }}
          >
            <div className="card-content">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <a href={skill.link} target="_blank" rel="noreferrer" className="visit-btn">
                Visit Projects
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* New Text-Based Skills Section */}
      <div className="additional-skills">
        <h3 className="tech-stack-title">Core Technologies & Tools</h3>
        <div className="skills-list">
          {secondarySkills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;