import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Fashion Blogger",
    content: "The quality of the silk is absolutely unmatched. I wore Aradhya for my sister's wedding and received so many compliments. Truly a premium experience!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Regular Customer",
    content: "I've been buying sarees for years, but the craftsmanship at Aradhya is on another level. The gold zari work is intricate and beautiful. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Meera Reddy",
    role: "Designer",
    content: "Minimalist, elegant, and luxurious. Exactly what I look for in a brand. The customer service was also very helpful and responsive.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-title">
          <h2>Voices of Grace</h2>
          <p>Read what our customers say about their Aradhya experience.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary-gold)" color="var(--primary-gold)" />
                ))}
              </div>
              <p className="content">"{t.content}"</p>
              <div className="user-info">
                <h3>{t.name}</h3>
                <span className="role">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .testimonial-card {
          background: var(--white);
          padding: 40px;
          border-radius: 20px;
          box-shadow: var(--shadow-soft);
          text-align: left;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
        }

        .stars {
          display: flex;
          gap: 5px;
          margin-bottom: 20px;
        }

        .content {
          font-style: italic;
          color: var(--text-dark);
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .user-info h3 {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .role {
          font-size: 14px;
          color: var(--primary-gold);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
