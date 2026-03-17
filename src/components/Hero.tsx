import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img src="/images/hero.png" alt="Elegance in Every Thread" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elegance in <br /> <span>Every Thread</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover timeless sarees crafted with grace and heritage.
          </motion.p>
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/collection" className="btn-primary">Shop Now</Link>
            <Link to="/collection" className="btn-secondary">Explore Collection</Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 0;
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .hero-image-wrapper {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(248, 245, 240, 0.8) 0%, rgba(248, 245, 240, 0.4) 50%, transparent 100%);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 5%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-content h1 {
          font-size: clamp(48px, 8vw, 84px);
          line-height: 1.1;
          color: var(--text-dark);
          margin-bottom: 20px;
        }

        .hero-content h1 span {
          color: var(--primary-gold);
          font-style: italic;
        }

        .hero-content p {
          font-size: 20px;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 40px;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .hero-overlay {
            background: rgba(248, 245, 240, 0.6);
          }
          
          .hero-content {
            align-items: center;
            text-align: center;
          }

          .hero-btns {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
