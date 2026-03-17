import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/about.png" alt="Craftsmanship" />
          <div className="experience-badge">
            <span className="years">25+</span>
            <span className="text">Years of <br /> Excellence</span>
          </div>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="subtitle">Our Heritage</span>
          <h2>Crafted with Passion, <br /> Woven with Tradition</h2>
          <p>
            At Aradhya, we believe that a saree is more than just six yards of fabric; it's a canvas of culture and a legacy of craftsmanship. Each piece in our collection is meticulously hand-woven by master artisans who have perfected their craft over generations.
          </p>
          <p>
            Our commitment to quality ensures that every thread tells a story of elegance and grace. We use only the finest silk, cotton, and zari to create sarees that are not just garments, but timeless heirlooms.
          </p>
          <button className="btn-secondary">Learn Our Story</button>
        </motion.div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-beige);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-image {
          position: relative;
        }

        .about-image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: var(--shadow-soft);
        }

        .experience-badge {
          position: absolute;
          bottom: -30px;
          right: -30px;
          background: var(--primary-gold);
          color: var(--white);
          padding: 30px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: var(--shadow-hover);
        }

        .years {
          font-family: var(--font-serif);
          font-size: 36px;
          font-weight: 700;
          line-height: 1;
        }

        .text {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 5px;
        }

        .about-content {
          text-align: left;
        }

        .subtitle {
          color: var(--primary-gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 15px;
          display: block;
        }

        .about-content h2 {
          font-size: 48px;
          margin-bottom: 25px;
        }

        .about-content p {
          color: var(--text-muted);
          margin-bottom: 20px;
          font-size: 18px;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-image {
            order: 2;
            max-width: 500px;
            margin: 0 auto;
          }
          .about-content {
            order: 1;
            text-align: center;
          }
          .about-content h2 {
            font-size: 32px;
          }
          .about-content p {
            font-size: 16px;
          }
          .experience-badge {
            bottom: 10px;
            right: 10px;
            padding: 15px;
          }
          .years { font-size: 24px; }
        }
      `}</style>
    </section>
  );
};

export default About;
