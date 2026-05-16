import './Bio.css';

const ProfessionalBio = () => {
  return (
    <section className="bio-section">
      <div className="bio-container">
        {/* Left Side: Clean Image */}
        <div className="bio-image-wrapper">
          <img
            src="/your-workspace-image.jpg"
            alt="Professional Workspace"
            className="bio-main-img"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="bio-text-content">
          <h2 className="bio-title">
            I’m a Frontend & Mobile Developer, I work with big
            organizations like Enactus and NextMakers.
          </h2>
          <p className="bio-description">
            I specialize in bridging the gap between high-fidelity design and
            functional code. With a deep focus on React ecosystems and minimalist
            UI, I build digital products that are both cinematic and performant.
          </p>

          <a href="/Julia_Sallo_CV.pdf" download className="download-cv-btn">
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBio;