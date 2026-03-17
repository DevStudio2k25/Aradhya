import { useState, useEffect } from 'react';
import { ShoppingCart, Instagram, Facebook, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Aradhya Logo" className="logo-img" />
          <span>ARADHYA</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active-link' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="icon-btn desktop-only"><ShoppingCart size={20} /></button>
          <button className="login-btn desktop-only">Login</button>
          
          <button 
            className={`mobile-menu-btn ${isOpen ? 'is-open' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className="mobile-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="sidebar-header">
                <span className="sidebar-brand">Menu</span>
              </div>
              
              <div className="sidebar-links">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link 
                      to={link.path} 
                      className={`sidebar-item ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      <span className="link-num">0{i + 1}</span>
                      <span className="link-text">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="sidebar-footer">
                <div className="sidebar-contact">
                  <p>Inquiries</p>
                  <a href="mailto:concierge@aradhya.com">concierge@aradhya.com</a>
                </div>
                <div className="sidebar-socials">
                  <Instagram size={20} />
                  <Facebook size={20} />
                  <Phone size={20} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(248, 245, 240, 0.95);
          backdrop-filter: blur(15px);
          z-index: 1000;
          padding: 15px 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          z-index: 1001;
        }

        .logo-img {
          height: 35px;
          width: auto;
          object-fit: contain;
        }

        .logo span {
          font-family: var(--font-logo);
          font-size: 26px;
          color: var(--text-dark);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 2px;
          color: var(--text-dark);
          text-transform: uppercase;
          position: relative;
          padding: 10px 0;
          text-decoration: none;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--primary-gold);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after, .nav-links a.active-link::after {
          width: 100%;
        }

        .nav-links a:hover, .nav-links a.active-link {
          color: var(--primary-gold);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 25px;
          z-index: 1001;
        }

        .icon-btn {
          color: var(--text-dark);
          background: none;
          border: none;
          cursor: pointer;
        }

        .login-btn {
          background: transparent;
          border: 1px solid var(--primary-gold);
          color: var(--primary-gold);
          padding: 8px 22px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
        }

        /* Animated Hamburger */
        .mobile-menu-btn {
          display: none;
          padding: 10px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .hamburger-box {
          width: 30px;
          height: 20px;
          display: inline-block;
          position: relative;
        }

        .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
          width: 30px;
          height: 2px;
          background-color: var(--text-dark);
          position: absolute;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .hamburger-inner {
          top: 50%;
          transform: translateY(-50%);
        }

        .hamburger-inner::before {
          content: '';
          top: -8px;
        }

        .hamburger-inner::after {
          content: '';
          top: 8px;
        }

        .mobile-menu-btn.is-open .hamburger-inner {
          background-color: transparent;
        }

        .mobile-menu-btn.is-open .hamburger-inner::before {
          transform: translateY(8px) rotate(45deg);
        }

        .mobile-menu-btn.is-open .hamburger-inner::after {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Sidebar Styles */
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(5px);
          z-index: 999;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 85%;
          max-width: 400px;
          height: 100vh;
          background: var(--bg-cream);
          z-index: 1000;
          padding: 120px 40px 60px;
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 60px rgba(0,0,0,0.05);
        }

        .sidebar-header {
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          padding-bottom: 20px;
        }

        .sidebar-brand {
          font-family: var(--font-serif);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: var(--primary-gold);
        }

        .sidebar-links {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          color: var(--text-dark);
          font-size: 32px;
          font-family: var(--font-serif);
          transition: 0.3s;
        }

        .sidebar-item.active {
          color: var(--primary-gold);
        }

        .link-num {
          font-size: 12px;
          font-family: var(--font-sans);
          color: var(--primary-gold);
          opacity: 0.6;
        }

        .sidebar-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .sidebar-contact p {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-muted);
          margin-bottom: 5px;
        }

        .sidebar-contact a {
          color: var(--text-dark);
          text-decoration: none;
          font-size: 16px;
        }

        .sidebar-socials {
          display: flex;
          gap: 20px;
          color: var(--text-dark);
        }

        @media (max-width: 992px) {
          .nav-links, .desktop-only {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }
          
          .logo span {
            font-size: 20px;
          }
        }
        @media (max-width: 480px) {
          .sidebar-link {
            font-size: 38px;
          }
          .concierge-section h4 {
            font-size: 20px;
          }
           .logo span {
            font-size: 28px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
