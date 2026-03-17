import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const collection = [
  { id: 1, name: 'Heritage Silk', price: '$599', image: '/images/cat-silk.png' },
  { id: 2, name: 'Zari Weave', price: '$450', image: '/images/cat-festive.png' },
  { id: 3, name: 'Luxe Chiffon', price: '$350', image: '/images/prod-1.png' },
  { id: 4, name: 'Royal Ivory', price: '$620', image: '/images/prod-2.png' },
  { id: 5, name: 'Vintage Lace', price: '$280', image: '/images/prod-3.png' },
  { id: 6, name: 'Gold Handloom', price: '$400', image: '/images/prod-4.png' },
  { id: 7, name: 'Crimson Rose Silk', price: '$520', image: '/images/cat-festive.png' },
  { id: 8, name: 'Midnight Zari', price: '$480', image: '/images/cat-silk.png' },
  { id: 9, name: 'Soft Peach Chiffon', price: '$310', image: '/images/prod-1.png' },
  { id: 10, name: 'Antique Gold Silk', price: '$680', image: '/images/prod-2.png' },
];

const Collection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div className="collection-page">
      <section className="collection-hero">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Masterpieces
        </motion.h1>
        <p>A journey through time and craftsmanship</p>
      </section>

      <section className="material-focus">
        <div className="container-wide">
          <div className="material-grid">
            <div className="material-image-large">
               <img src="/images/silk-detail.png" alt="Silk Detail" />
               <div className="material-tag">Grade A Mulberry Silk</div>
            </div>
            <div className="material-content-premium">
              <span className="subtitle">The Essence</span>
              <h2>Mastery of Fabric</h2>
              <p className="lead-text">We work exclusively with the highest grade mulberry silk and natural dyes. Our fabrics are tested for durability and sheen, ensuring they last for generations.</p>
              
              <div className="fabric-cards">
                {[
                  { title: 'Katan Silk', desc: 'Pure silk with no mix, known for its sturdiness and luxury.' },
                  { title: 'Organza', desc: 'Lightweight and sheer, perfect for contemporary elegance.' },
                  { title: 'Chiffon', desc: 'A fluid drape that defines modern minimal fashion.' }
                ].map((f, i) => (
                  <motion.div 
                    key={i} 
                    className="fabric-card-item"
                    whileHover={{ x: 10 }}
                  >
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="draping-section">
        <div className="container">
          <div className="draping-hero">
            <div className="draping-text-center">
              <span>The Experience</span>
              <h2>The Perfect Fall</h2>
            </div>
            <div className="draping-visual-main">
               <img src="/images/draping.png" alt="Draping" />
               <div className="draping-specs">
                 <div className="spec"><span>01</span> Balanced Weight</div>
                 <div className="spec"><span>02</span> Reinforced Borders</div>
                 <div className="spec"><span>03</span> Soft-on-Skin</div>
               </div>
            </div>
            <div className="draping-description-bottom">
              <p>Every Aradhya piece is designed with the 'fall' in mind. The weight of the zari and the texture of the silk are balanced to ensure the pleats sit perfectly and the drape stays elegant throughout the day.</p>
              <button className="btn-secondary">Explore The Engineering</button>
            </div>
          </div>
        </div>
      </section>

      <div ref={targetRef} className="horizontal-container">
        <div className="sticky-wrapper">
          <motion.div style={{ x }} className="scroll-content">
            {collection.map((item, index) => (
              <div key={item.id} className="scroll-item">
                <span className="chapter-label">Series: 0{index + 1}</span>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  <div className="item-overlay">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button className="btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="collection-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>The Full Catalog</h2>
          </div>
          <div className="grid-layout">
            {/* Reusing existing product cards or similar */}
            {collection.map((item) => (
              <motion.div 
                key={item.id} 
                className="catalog-card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img src={item.image} alt={item.name} />
                <div className="catalog-info">
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .collection-page {
          background: var(--bg-cream);
          padding-top: 100px;
        }
        .collection-hero {
          text-align: center;
          padding: 80px 24px;
        }
        .collection-hero h1 {
          font-size: clamp(42px, 10vw, 72px);
          margin-bottom: 20px;
          line-height: 1.1;
        }
        @media (max-width: 600px) {
          .collection-hero {
            padding: 60px 20px;
          }
          .collection-hero h1 {
            font-size: 38px;
          }
        }
        .horizontal-container {
          position: relative;
          height: 300vh;
          background: var(--bg-beige);
        }
        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .scroll-content {
          display: flex;
          gap: 40px;
          padding: 0 5%;
        }
        .scroll-item {
          flex: 0 0 450px;
          height: 600px;
        }
        @media (max-width: 768px) {
          .scroll-item {
            flex: 0 0 300px;
            height: 450px;
          }
        }
        .item-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
        }
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .item-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        @media (max-width: 768px) {
          .item-overlay {
            opacity: 1;
            padding: 20px;
            background: linear-gradient(transparent, rgba(0,0,0,0.7));
          }
        }
        .scroll-item:hover .item-overlay {
          opacity: 1;
        }
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          padding-bottom: 100px;
        }
        .catalog-card {
           border-radius: 12px;
           overflow: hidden;
           background: white;
        }
        .catalog-card img {
          width: 100%;
          height: 350px;
          object-fit: cover;
        }
        .catalog-info {
           padding: 20px;
        }
        .container-wide {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 5%;
        }
        .material-focus {
          padding: 150px 0;
          background: var(--white);
        }
        .material-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }
        .material-image-large {
          position: relative;
          height: 800px;
          border-radius: 40px;
          overflow: hidden;
        }
        .material-image-large img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .material-tag {
          position: absolute;
          top: 40px;
          right: 40px;
          background: var(--white);
          padding: 15px 30px;
          border-radius: 50px;
          font-family: var(--font-serif);
          font-size: 18px;
          box-shadow: var(--shadow-soft);
        }
        .material-content-premium {
          padding-right: 50px;
        }
        .lead-text {
          font-size: 24px;
          line-height: 1.6;
          margin: 30px 0 60px;
          color: var(--text-muted);
        }
        .fabric-cards {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .fabric-card-item {
          padding: 30px;
          background: var(--bg-cream);
          border-radius: 20px;
          border-left: 5px solid var(--primary-gold);
        }
        .fabric-card-item h4 {
          font-size: 22px;
          margin-bottom: 10px;
        }
        
        .draping-section {
          padding: 150px 0;
          background: #F1EDE4;
        }
        .draping-text-center {
          text-align: center;
          margin-bottom: 80px;
        }
        .draping-text-center h2 {
          font-size: 64px;
        }
        @media (max-width: 768px) {
          .draping-text-center h2 {
            font-size: 38px;
          }
          .material-focus, .draping-section {
            padding: 80px 0;
          }
           .lead-text {
            font-size: 18px;
            margin: 20px 0 40px;
          }
          .material-content-premium {
            padding-right: 0;
          }
        }
        .draping-visual-main {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        .draping-visual-main img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
        }
        .draping-specs {
          position: absolute;
          top: 50%;
          left: -100px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .spec {
          background: var(--white);
          padding: 20px 40px;
          border-radius: 50px;
          box-shadow: var(--shadow-soft);
          display: flex;
          align-items: center;
          gap: 15px;
          font-weight: 600;
        }
        .spec span {
          color: var(--primary-gold);
          font-family: var(--font-serif);
          font-size: 20px;
        }
        .draping-description-bottom {
          max-width: 700px;
          margin: 80px auto 0;
          text-align: center;
        }
        .draping-description-bottom p {
          font-size: 20px;
          color: var(--text-muted);
          margin-bottom: 40px;
        }
        @media (max-width: 768px) {
           .draping-description-bottom p {
            font-size: 16px;
          }
          .material-tag {
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            font-size: 14px;
          }
        }

        @media (max-width: 1200px) {
          .draping-specs {
            position: relative;
            left: 0;
            top: 0;
            transform: none;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 40px;
            gap: 15px;
          }
          .spec {
            padding: 12px 25px;
            font-size: 14px;
          }
          .material-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .material-image-large {
            height: 500px;
          }
        }
        .chapter-label {
          display: block;
          font-family: var(--font-serif);
          font-size: 14px;
          color: var(--primary-gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Collection;
