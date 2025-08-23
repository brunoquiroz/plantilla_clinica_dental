import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">DentalCare</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre Nosotros</a>
            <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+123456789" 
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Phone size={16} className="mr-1" />
              <span className="text-sm">Llamar</span>
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
              <Calendar size={16} className="mr-2" />
              Agendar Cita
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#sobre-nosotros" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Sobre Nosotros</a>
              <a href="#testimonios" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Testimonios</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <a href="tel:+123456789" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <Phone size={16} className="mr-2" />
                  Llamar Ahora
                </a>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center">
                  <Calendar size={16} className="mr-2" />
                  Agendar Cita
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;