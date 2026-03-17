import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Aradhya Logo" className="logo-img" />
          <span>ARADHYA</span>
        </Link>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link></li>
          <li><Link to="/collection" className={location.pathname === '/collection' ? 'active-link' : ''}>Collection</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button className="icon-btn"><ShoppingCart size={20} /></button>
          <button className="login-btn">Login</button>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(248, 245, 240, 0.9);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 20px 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
        }

        .logo span {
          font-family: var(--font-serif);
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 4px;
          color: var(--text-dark);
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 2px;
          color: var(--text-dark);
          text-transform: uppercase;
          position: relative;
          padding: 10px 0;
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
          gap: 20px;
        }

        .icon-btn {
          color: var(--text-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .icon-btn:hover {
          color: var(--primary-gold);
          transform: scale(1.1);
        }

        .login-btn {
          background: transparent;
          border: 1px solid var(--primary-gold);
          color: var(--primary-gold);
          padding: 8px 25px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .login-btn:hover {
          background: var(--primary-gold);
          color: var(--white);
        }

        .mobile-menu-btn {
          display: none;
          color: var(--text-dark);
        }

        @media (max-width: 992px) {
          .nav-links {
            display: none;
          }
          
          .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: var(--bg-cream);
            padding: 20px;
            box-shadow: var(--shadow-soft);
            text-align: center;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
