import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/fights', label: 'Combates' },
    { path: '/event', label: 'Evento' },
    { path: '/artists', label: 'Artistas' }
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            to="/"
            className="font-cyber text-2xl font-bold text-white" 
            onClick={closeMenu}
          >
            VELADA <span className="text-neon-pink">V</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-cyber uppercase tracking-wider py-2 border-b-2 transition-all duration-300 ${
                  isActive(item.path)
                    ? 'border-neon-pink text-neon-pink'
                    : 'border-transparent hover:border-neon-blue hover:text-neon-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cyber-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-cyber uppercase py-2 px-4 ${
                  isActive(item.path)
                    ? 'text-neon-pink border-l-4 border-neon-pink'
                    : 'text-white hover:text-neon-blue'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;