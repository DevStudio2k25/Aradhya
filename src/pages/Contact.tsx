import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import CustomDropdown from '../components/CustomDropdown';

const Contact = () => {
  const inquiryOptions = [
    'Bridal Collection',
    'Bespoke Weaving',
    'General Inquiry',
    'Press & Media'
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Get in Touch</span>
          <h1>Aradhya Consultations</h1>
          <p>Book a private viewing or reach out for bespoke bridal inquiries.</p>
        </motion.div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-panel">
              <div className="info-card">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Boutique Flagship</h4>
                  <p>12/A, Heritage Mile, Varanasi, UP - 221001</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <h4>Concierge</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <h4>Inquiries</h4>
                  <p>private@aradhya.com</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon"><Clock size={24} /></div>
                <div>
                  <h4>Visiting Hours</h4>
                  <p>Mon - Sat: 11:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="boutique-preview">
                 <img src="/images/boutique.png" alt="Boutique" />
                 <div className="boutique-label">Varanasi Flagship</div>
              </div>
            </div>

            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <form className="luxury-form">
                <div className="form-row">
                  <div className="custom-input-wrap">
                    <input type="text" required />
                    <label>Full Name</label>
                    <div className="bar"></div>
                  </div>
                  <div className="custom-input-wrap">
                    <input type="email" required />
                    <label>Email Address</label>
                    <div className="bar"></div>
                  </div>
                </div>
                
                <CustomDropdown 
                  options={inquiryOptions} 
                  placeholder="Select Inquiry Type"
                  onSelect={(val) => console.log(val)} 
                />

                <div className="custom-input-wrap text-area-wrap">
                  <textarea rows={6} required></textarea>
                  <label>Your Message</label>
                  <div className="bar"></div>
                </div>
                
                <button type="submit" className="btn-primary full-width">Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="faq-short">
        <div className="container">
          <div className="section-title">
             <h2>Common Queries</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Do you ship internationally?</h4>
              <p>Yes, we ship to over 50 countries with insured premium couriers.</p>
            </div>
            <div className="faq-item">
              <h4>Can I request a custom design?</h4>
              <p>Bespoke weaving requests take 3-6 months based on complexity.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          background: var(--white);
        }
        .contact-hero {
          height: 60vh;
          background: var(--bg-cream);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .contact-hero h1 {
          font-size: 72px;
          margin: 20px 0;
        }
        .contact-main {
          padding: 100px 0;
          margin-top: -100px;
        }
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          background: white;
          padding: 60px;
          border-radius: 40px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.05);
        }
        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .info-card {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .info-icon {
          width: 50px;
          height: 50px;
          background: var(--bg-cream);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-gold);
        }
        .info-card h4 {
          font-size: 18px;
          margin-bottom: 5px;
        }
        .info-card p {
          color: var(--text-muted);
        }
        .boutique-preview {
          margin-top: 20px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          height: 250px;
        }
        .boutique-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .boutique-label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: white;
          padding: 5px 15px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 600;
        }
        .luxury-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        /* Custom Input Styling */
        .custom-input-wrap {
          position: relative;
          margin-bottom: 30px;
        }
        .custom-input-wrap input, .custom-input-wrap textarea {
          width: 100%;
          padding: 10px 0;
          border: none;
          border-bottom: 1px solid #E5E5E5;
          background: transparent;
          font-family: inherit;
          font-size: 16px;
          color: var(--text-dark);
          transition: 0.3s;
        }
        .custom-input-wrap input:focus, .custom-input-wrap textarea:focus {
          outline: none;
        }
        .custom-input-wrap label {
          position: absolute;
          top: 10px;
          left: 0;
          pointer-events: none;
          color: var(--text-muted);
          transition: 0.3s ease all;
        }
        .custom-input-wrap input:focus ~ label,
        .custom-input-wrap input:valid ~ label,
        .custom-input-wrap textarea:focus ~ label,
        .custom-input-wrap textarea:valid ~ label {
          top: -20px;
          font-size: 12px;
          color: var(--primary-gold);
        }
        .custom-input-wrap .bar {
          position: relative;
          display: block;
          width: 100%;
        }
        .custom-input-wrap .bar:before {
          content: '';
          height: 2px;
          width: 0;
          bottom: 1px;
          position: absolute;
          background: var(--primary-gold);
          transition: 0.3s ease all;
          left: 0;
        }
        .custom-input-wrap input:focus ~ .bar:before,
        .custom-input-wrap textarea:focus ~ .bar:before {
          width: 100%;
        }

        /* Custom Select Styling */
        .custom-select-wrap {
          position: relative;
          margin-bottom: 30px;
        }
        .custom-select-wrap select {
          width: 100%;
          padding: 15px 0;
          border: none;
          border-bottom: 1px solid #E5E5E5;
          background: transparent;
          appearance: none;
          font-family: inherit;
          font-size: 16px;
          color: var(--text-dark);
          cursor: pointer;
        }
        .custom-select-wrap select:focus {
          outline: none;
          border-bottom-color: var(--primary-gold);
        }
        .custom-select-wrap select option {
          color: var(--text-dark);
          background: var(--white);
        }
        .custom-select-wrap select option[disabled] {
          color: var(--text-muted);
        }
        .select-arrow {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid var(--text-muted);
          pointer-events: none;
        }

        .full-width {
          width: 100%;
          margin-top: 20px;
        }
        .faq-short {
          padding: 100px 0;
          background: var(--bg-cream);
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 40px;
        }
        @media (max-width: 992px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            padding: 30px;
          }
          .contact-hero h1 {
            font-size: 48px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
