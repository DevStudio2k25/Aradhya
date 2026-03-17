import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Lookbook = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section className="lookbook-section" ref={containerRef}>
      <div className="container">
        <div className="section-title">
          <span>The Vision</span>
          <h2>Lookbook 2026</h2>
        </div>

        <div className="lookbook-display">
          <motion.div className="lookbook-main" style={{ y: y1 }}>
             <img src="/images/lookbook-1.png" alt="Lookbook Main" />
             <div className="text-float">The Palace Series</div>
          </motion.div>
          
          <div className="lookbook-side">
            <motion.div className="lookbook-small" style={{ y: y2 }}>
               <img src="/images/festive-vibe.png" alt="Lookbook Small" />
            </motion.div>
            <div className="lookbook-description">
              <h3>Timeless Palettes</h3>
              <p>Inspired by the serene mornings of Varanasi, our latest collection features hand-woven silks that transition from daylight to starlight with effortless grace.</p>
              <button className="btn-secondary">View Series</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .lookbook-section {
          padding: 150px 0;
          overflow: hidden;
          background: var(--white);
        }
        .lookbook-display {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 60px;
          margin-top: 50px;
          align-items: center;
        }
        .lookbook-main {
          position: relative;
          height: 800px;
          border-radius: 30px;
          overflow: hidden;
        }
        .lookbook-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .text-float {
          position: absolute;
          top: 40px;
          left: -40px;
          font-family: var(--font-serif);
          font-size: 84px;
          color: var(--white);
          opacity: 0.1;
          transform: rotate(-90deg);
          white-space: nowrap;
        }
        .lookbook-side {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .lookbook-small {
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-hover);
        }
        .lookbook-small img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .lookbook-description {
          padding-left: 20px;
          border-left: 1px solid var(--primary-gold);
        }
        .lookbook-description h3 {
          font-size: 32px;
          margin-bottom: 20px;
        }
        .lookbook-description p {
          color: var(--text-muted);
          margin-bottom: 30px;
          font-size: 18px;
        }
        @media (max-width: 992px) {
          .lookbook-display {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .lookbook-main {
            height: 450px;
            border-radius: 20px;
          }
          .text-float {
            display: none;
          }
          .lookbook-description h3 {
            font-size: 28px;
          }
          .lookbook-description p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Lookbook;
