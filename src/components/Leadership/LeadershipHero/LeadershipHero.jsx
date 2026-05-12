import { useEffect, useState } from 'react';
import './LeadershipHero.css';

const LeadershipHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  return (
    <section className={`leadership-hero ${isLoaded ? 'animate-in' : ''}`}>
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Driving innovation through</span> <br />
          <span className="accent-text">visionary leadership.</span>
        </h1>
      </div>
      <div className="hero-bg-accent"></div>
    </section>
  );
};

export default LeadershipHero;