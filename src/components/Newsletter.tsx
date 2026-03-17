import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <motion.div 
          className="newsletter-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Join the Circle of Elegance</h2>
          <p>Get updates on new arrivals, artisanal stories, and exclusive offers.</p>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
          
          <p className="small-text">By subscribing, you agree to our Terms & Privacy Policy.</p>
        </motion.div>
      </div>

      <style>{`
        .newsletter-section {
          padding-top: 0;
        }

        .newsletter-box {
          background: #332D29;
          padding: 80px 40px;
          border-radius: 30px;
          text-align: center;
          color: var(--white);
          box-shadow: var(--shadow-hover);
        }

        .newsletter-box h2 {
          font-size: 42px;
          margin-bottom: 20px;
        }

        .newsletter-box p {
          font-size: 18px;
          opacity: 0.8;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
          gap: 10px;
          background: var(--white);
          padding: 8px;
          border-radius: 50px;
        }

        .newsletter-form input {
          flex: 1;
          border: none;
          padding: 0 25px;
          font-size: 16px;
          background: transparent;
          outline: none;
          color: var(--text-dark);
        }

        .newsletter-form button {
          white-space: nowrap;
        }

        .small-text {
          margin-top: 20px;
          font-size: 12px !important;
          opacity: 0.5 !important;
        }

        @media (max-width: 600px) {
          .newsletter-form {
            flex-direction: column;
            background: transparent;
            padding: 0;
            gap: 15px;
          }

          .newsletter-form input {
            background: var(--white);
            height: 55px;
            border-radius: 50px;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
