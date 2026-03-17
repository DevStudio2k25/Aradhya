import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  { id: 1, name: 'Royal Ivory Silk', price: '$299', image: '/images/prod-1.png' },
  { id: 2, name: 'Golden Glow Handloom', price: '$245', image: '/images/prod-2.png' },
  { id: 3, name: 'Vintage Lace Chiffon', price: '$180', image: '/images/prod-3.png' },
  { id: 4, name: 'Classic Cream Zari', price: '$320', image: '/images/prod-4.png' },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals" id="new-arrivals">
      <div className="container">
        <div className="section-title">
          <h2>New Arrivals</h2>
          <p>Hand-picked masterpieces recently added to our collection.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button className="add-to-cart">
                  <ShoppingBag size={18} /> Add to Cart
                </button>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 40px;
        }

        .product-card {
          text-align: left;
        }

        .product-image {
          position: relative;
          height: 380px;
          border-radius: 12px;
          overflow: hidden;
          background: var(--white);
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .add-to-cart {
          position: absolute;
          bottom: -50px;
          left: 0;
          width: 100%;
          background: var(--primary-gold);
          color: var(--white);
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .product-card:hover .add-to-cart {
          bottom: 0;
        }

        .product-details h3 {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 5px;
          color: var(--text-dark);
        }

        .price {
          color: var(--accent-gold);
          font-weight: 600;
          font-size: 16px;
        }
        @media (max-width: 600px) {
          .product-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .product-image {
            height: 450px;
          }
        }
      `}</style>
    </section>
  );
};

export default NewArrivals;
