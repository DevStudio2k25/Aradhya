import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomDropdownProps {
  options: string[];
  placeholder: string;
  onSelect: (value: string) => void;
}

const CustomDropdown = ({ options, placeholder, onSelect }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div 
        className={`dropdown-header ${selected ? 'has-value' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || placeholder}</span>
        <ChevronDown className={`chevron ${isOpen ? 'open' : ''}`} size={18} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            className="dropdown-list"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {options.map((option, index) => (
              <li 
                key={index} 
                className={selected === option ? 'selected' : ''}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <style>{`
        .custom-dropdown {
          position: relative;
          width: 100%;
          margin-bottom: 30px;
        }
        .dropdown-header {
          padding: 15px 0;
          border-bottom: 1px solid #E5E5E5;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          transition: 0.3s;
        }
        .dropdown-header.has-value {
          color: var(--text-dark);
        }
        .dropdown-header:hover {
          border-bottom-color: var(--primary-gold);
        }
        .chevron {
          transition: transform 0.3s ease;
        }
        .chevron.open {
          transform: rotate(180deg);
        }
        .dropdown-list {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          z-index: 100;
          margin-top: 5px;
          padding: 10px 0;
          list-style: none;
        }
        .dropdown-list li {
          padding: 12px 20px;
          cursor: pointer;
          transition: 0.2s;
          font-size: 15px;
        }
        .dropdown-list li:hover {
          background: var(--bg-cream);
          color: var(--primary-gold);
        }
        .dropdown-list li.selected {
          background: rgba(212, 175, 55, 0.1);
          color: var(--primary-gold);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default CustomDropdown;
