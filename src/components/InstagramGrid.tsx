import { motion } from 'framer-motion';

const InstagramGrid = () => {
  const socialImages = [
    '/images/prod-1.png', '/images/prod-2.png', '/images/prod-3.png', 
    '/images/prod-4.png', '/images/hero.png', '/images/about.png'
  ];

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="section-title">
          <span>Follow Our Journey</span>
          <h2>@AradhyaOfficial</h2>
        </div>
        
        <div className="insta-grid">
          {socialImages.map((img, i) => (
            <motion.div 
              key={i}
              className="insta-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
            >
              <img src={img} alt="Insta Post" />
              <div className="insta-overlay">
                <span>View on Instagram</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .instagram-section {
          padding: 100px 0;
          background: var(--bg-cream);
        }
        .insta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .insta-item {
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        .insta-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .insta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(212, 175, 55, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.3s;
          color: white;
          font-weight: 600;
          font-size: 14px;
        }
        .insta-item:hover .insta-overlay {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .insta-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramGrid;
