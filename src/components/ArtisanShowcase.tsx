import { motion } from 'framer-motion';

const ArtisanShowcase = () => {
  return (
    <section className="artisan-showcase">
      <div className="container">
        <div className="artisan-wrapper">
          <motion.div 
            className="artisan-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="artisan-header">
              <span>Humanity & Heart</span>
              <h2>The Soul Behind the Silk</h2>
            </div>
            
            <div className="artisan-features">
              <div className="feature">
                <h3>Varanasi Heritage</h3>
                <p>Preserving a 500-year-old weaving tradition with local master artisans.</p>
              </div>
              <div className="feature">
                <h3>Natural Alchemy</h3>
                <p>Threads dyed with organic indigo, turmeric, and dried hibiscus petals.</p>
              </div>
              <div className="feature">
                <h3>Zero Carbon Weave</h3>
                <p>Sustainably powered handlooms that consume zero electricity.</p>
              </div>
            </div>
          </motion.div>

          <div className="artisan-visual">
            <img src="/images/weaver-detail.png" alt="Artisan Weaving" className="weaver-img" />
            <div className="overlay-circle"></div>
          </div>
        </div>
      </div>

      <style>{`
        .artisan-showcase {
          background: #2D2926;
          color: white;
          padding: 120px 0;
          overflow: hidden;
          position: relative;
        }
        .artisan-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }
        .artisan-header span {
          color: var(--primary-gold);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 14px;
        }
        .artisan-header h2 {
          font-size: 56px;
          margin: 20px 0 50px;
          color: white;
        }
        .artisan-features {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .feature h3 {
          font-family: var(--font-sans);
          font-size: 20px;
          margin-bottom: 10px;
          color: var(--primary-gold);
        }
        .feature p {
          opacity: 0.7;
          font-size: 16px;
          line-height: 1.6;
        }
        .artisan-visual {
          position: relative;
        }
        .weaver-img {
          width: 100%;
          border-radius: 50% 50% 0 0;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        .overlay-circle {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          border: 1px solid var(--primary-gold);
          border-radius: 50%;
          opacity: 0.3;
        }
        @media (max-width: 992px) {
          .artisan-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .artisan-header h2 {
            font-size: 36px;
            margin-bottom: 30px;
          }
          .weaver-img {
            max-width: 500px;
            margin: 0 auto;
          }
          .overlay-circle {
            width: 150px;
            height: 150px;
            top: -20px;
            right: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ArtisanShowcase;
