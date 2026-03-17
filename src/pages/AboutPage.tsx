import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span>Est. 1998</span>
          <h1>A Legacy of Silk</h1>
        </motion.div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            {[
              { icon: '🌿', title: 'Purity', desc: '100% natural fibers sourced ethically.' },
              { icon: '✨', title: 'Authenticity', desc: 'Every weave is certified handmade.' },
              { icon: '🤝', title: 'Empowerment', desc: 'Supporting 500+ artisan households.' },
              { icon: '🌍', title: 'Sustainability', desc: 'Zero-waste production cycle.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="phi-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="phi-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-content">
              <span className="subtitle">The Visionary</span>
              <h2>"A saree is not just attire, it's a silent poetry of the soul."</h2>
              <p>Founded by Aisha Verma, Aradhya began as a small initiative to bring the hidden treasures of Varanasi weavers to the global stage. Today, it stands as a beacon of luxury and heritage.</p>
              <div className="signature">Aisha Verma</div>
            </div>
            <motion.div 
              className="founder-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <img src="/images/founder.png" alt="Founder" />
              <div className="founder-label">Aisha Verma, Founder</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container story-grid">
          <motion.div 
            className="story-image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/about.png" alt="Heritage" />
          </motion.div>
          <div className="story-content">
            <h2>The Art of Weaving</h2>
            <p>Every saree we create is a tribute to the ancient art of hand-weaving. Our artisans spend weeks meticulously crafting each thread to ensure a level of detail that only true passion can produce.</p>
            <div className="stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Artisans</p>
              </div>
              <div className="stat-item">
                <h3>25+</h3>
                <p>Years</p>
              </div>
              <div className="stat-item">
                <h3>10k+</h3>
                <p>Happy Souls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="centered-title">Our Process</h2>
          <div className="process-timeline">
            {[
              { step: '01', title: 'Silk Sourcing', desc: 'We source the finest mulberry silk from traditional farms.' },
              { step: '02', title: 'Natural Dyeing', desc: 'Threads are dyed using eco-friendly natural colors.' },
              { step: '03', title: 'Hand-weaving', desc: 'Master weavers bring the design to life on wooden looms.' },
              { step: '04', title: 'Fine Finishing', desc: 'Each piece is hand-inspected and finished with grace.' }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                className="process-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="step-num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          background: var(--bg-cream);
        }
        .about-hero {
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/hero.png');
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
        }
        .hero-text h1 {
          font-size: 84px;
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 100px 0;
          align-items: center;
        }
        .stats {
          display: flex;
          gap: 40px;
          margin-top: 40px;
        }
        .stat-item h3 {
          font-size: 32px;
          color: var(--primary-gold);
        }
        .centered-title {
          text-align: center;
          font-size: 48px;
          margin-bottom: 60px;
        }
        .process-timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          padding-bottom: 100px;
        }
        .process-card {
           background: white;
           padding: 40px;
           border-radius: 20px;
           box-shadow: var(--shadow-soft);
           position: relative;
        }
        .step-num {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 48px;
          opacity: 0.1;
          font-family: var(--font-serif);
        }
        .philosophy-section {
          padding: 80px 0;
          background: white;
        }
        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }
        .phi-card {
           text-align: center;
           padding: 40px;
           border-radius: 20px;
           background: var(--bg-cream);
        }
        .phi-icon {
          font-size: 40px;
          display: block;
          margin-bottom: 20px;
        }
        .founder-section {
          padding: 120px 0;
          background: var(--bg-cream);
        }
        .founder-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }
        .signature {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-style: italic;
          color: var(--primary-gold);
          margin-top: 40px;
        }
        .founder-image {
          position: relative;
        }
        .founder-image img {
          width: 100%;
          border-radius: 30px;
        }
        .founder-label {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 10px 30px;
          border-radius: 50px;
          box-shadow: var(--shadow-soft);
          white-space: nowrap;
        }
        @media (max-width: 992px) {
          .founder-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
