import './ServicesProvided.css';

const ServicesGrid = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Building responsive, high-performance web applications using modern frameworks like React and Vite.",
      icon: "fas fa-laptop-code"
    },
    {
      title: "Mobile App Development",
      desc: "Creating cross-platform mobile experiences with React Native for seamless iOS and Android performance.",
      icon: "fas fa-mobile-alt"
    },
    {
      title: "Graphic Design",
      desc: "Crafting visual identities, logos, and digital assets that communicate your brand's story effectively.",
      icon: "fas fa-bezier-curve"
    },
    {
      title: "UI/UX Design",
      desc: "Designing intuitive user interfaces and experiences grounded in Human-Computer Interaction principles.",
      icon: "fas fa-swatchbook"
    },
    {
      title: "Project Management",
      desc: "Coordinating technical and creative workflows to ensure on-time delivery and design-centered results.",
      icon: "fas fa-tasks"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Crafting Digital Experiences That Deliver Impact Through Our Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;