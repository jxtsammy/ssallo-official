import './Statistics.css';

const StatsSection = () => {
  const stats = [
    { icon: "fas fa-layer-group", value: "4+", label: "Years of experience" },
    { icon: "fas fa-briefcase", value: "100+", label: "Completed Projects" },
    { icon: "far fa-smile", value: "100+", label: "Happy Clients" },
    { icon: "fas fa-coffee", value: "2000+", label: "Hours of Work" }
  ];

  return (
    <section className="stats-container">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">
              <i className={stat.icon}></i>
            </div>
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-label">{stat.label}</p>
            {index !== stats.length - 1 && <div className="stat-divider"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;