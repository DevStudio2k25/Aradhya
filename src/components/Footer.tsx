import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 className="brand-name">ARADHYA</h2>
          <p className="brand-desc">
            Crafting timeless stories in silk since 1998. Aradhya represents the pinnacle of heritage weaving and modern elegance.
          </p>
          <div className="social-links">
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li>123 Artisan Lane, Silk Avenue, Mumbai, India</li>
            <li>customercare@aradhya.com</li>
            <li>+91 (0) 123 456 7890</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ARADHYA. All Rights Reserved. Crafted with love.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--white);
          padding-top: 80px;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
          text-align: left;
        }

        .footer-logo {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 4px;
          color: var(--text-dark);
          margin-bottom: 25px;
          display: block;
        }

        .footer-brand p {
          color: var(--text-muted);
          margin-bottom: 25px;
          font-size: 16px;
          max-width: 350px;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-links a {
          color: var(--text-dark);
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: var(--primary-gold);
        }

        .footer-links h3, .footer-contact h3 {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-links ul li {
          margin-bottom: 12px;
        }

        .footer-links ul li a {
          color: var(--text-muted);
          font-size: 15px;
        }

        .footer-links ul li a:hover {
          color: var(--primary-gold);
          padding-left: 5px;
        }

        .footer-contact ul li {
          color: var(--text-muted);
          font-size: 15px;
          margin-bottom: 15px;
          line-height: 1.5;
        }

        .footer-bottom {
          padding: 30px 0;
          border-top: 1px solid rgba(0,0,0,0.05);
          text-align: center;
        }

        .footer-bottom p {
          color: var(--text-muted);
          font-size: 14px;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-brand p {
            max-width: 100%;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
