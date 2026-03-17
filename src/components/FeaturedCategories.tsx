import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Silk Sarees', image: '/images/cat-silk.png', count: '120+ Items' },
  { id: 2, name: 'Festive Wear', image: '/images/cat-festive.png', count: '80+ Items' },
  { id: 3, name: 'Ethnic Collection', image: '/images/cat-silk.png', count: '95+ Items' },
  { id: 4, name: 'Daily Wear', image: '/images/cat-festive.png', count: '60+ Items' },
];

const FeaturedCategories = () => {
  return (
    <section className="categories-section" id="collection">
      <div className="container">
        <div className="section-title">
          <h2>Featured Collections</h2>
          <p>Explore our curated selections of premium sarees for every occasion.</p>
        </div>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <Link to="/collection" key={cat.id}>
              <motion.div 
                className="category-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="category-image">
                  <img src={cat.image} alt={cat.name} />
                  <div className="category-info">
                    <h3>{cat.name}</h3>
                    <p>{cat.count}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .categories-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: 400px 400px;
          gap: 20px;
        }

        .category-card:nth-child(1) {
          grid-row: span 2;
        }
        
        .category-card:nth-child(4) {
          grid-column: span 1;
        }

        .category-card {
          cursor: pointer;
          height: 100%;
        }

        .category-image {
          position: relative;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          transition: box-shadow 0.3s ease;
        }

        .category-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .category-card:hover img {
          transform: scale(1.1);
        }

        .category-card:hover .category-image {
          box-shadow: var(--shadow-hover);
        }

        .category-info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 30px;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          color: var(--white);
          text-align: left;
        }

        .category-info h3 {
          font-family: var(--font-serif);
          font-size: 24px;
          margin-bottom: 5px;
        }

        .category-info p {
          font-size: 14px;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCategories;
