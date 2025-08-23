import React from 'react';
import { Calendar, Star, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tu sonrisa, en{' '}
                <span className="text-blue-600">manos expertas</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Atención dental personalizada con tecnología avanzada y el toque humano que mereces. 
                Transformamos sonrisas y cuidamos tu salud bucal con excelencia.
              </p>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">+500 pacientes satisfechos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">15+ años de experiencia</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Conocer Tratamientos
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/6812472/pexels-photo-6812472.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dentista profesional" 
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Seguro</p>
                  <p className="text-sm text-gray-600">Protocolos estrictos</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Excelencia</p>
                  <p className="text-sm text-gray-600">Calidad garantizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;