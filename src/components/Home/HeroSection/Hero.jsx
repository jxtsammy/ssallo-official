import { motion } from 'framer-motion';
import './Hero.css';
import ProfileImg from '../../../assets/Me.png';

export default function Hero() {
  // Animation variants for the container (staggered children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Animation for individual items (fade and slide up)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Left: Image Section with a floating effect */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="blur-circle"></div>
          <img
            src={ProfileImg}
            alt="Samuel Sallo"
            className="hero-img"
          />
        </motion.div>

        {/* Right: Content Section */}
        <div className="hero-content">
          <motion.div className="role-tag" variants={itemVariants}>
            <span className="line"></span>
            <div className="role-text">
              <p>GRAPHIC DESIGNER & UX/UI DESIGNER</p>
              <p>WEB & MOBILE DEVELOPER</p>
            </div>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hello, I’m <br /> Samuel Sallo.
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Hello, I’m a passionate frontend web and mobile developer, graphic designer,
            ui/ux designer and part-time project manager with a keen eye for design & details.
          </motion.p>

          <motion.div className="hero-btns" variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Say Hello
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View Portfolio <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </motion.button>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}