import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Pacientes Atendidos' },
    { icon: Award, number: '15+', label: 'Años de Experiencia' },
    { icon: Clock, number: '24/7', label: 'Urgencias Disponibles' },
    { icon: Heart, number: '100%', label: 'Satisfacción Garantizada' }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/6812528/pexels-photo-6812528.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dr. Profesional" 
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-8 left-8 w-full h-full bg-blue-100 rounded-3xl -z-10"></div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Dra. María González
              </h2>
              <p className="text-xl text-blue-600 font-semibold">
                Especialista en Odontología Integral
              </p>
              <p className="text-gray-600 leading-relaxed">
                Con más de 15 años de experiencia, me dedico a brindar atención dental integral 
                con un enfoque personalizado. Mi filosofía se basa en la combinación perfecta 
                entre tecnología avanzada y el trato humano que cada paciente merece.
              </p>
              <p className="text-gray-600 leading-relaxed">
                "Mi objetivo es que cada visita sea una experiencia positiva, donde la confianza 
                y el cuidado sean la base de una sonrisa saludable y radiante."
              </p>
            </div>
            
            {/* Credentials */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Formación y Certificaciones:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Doctora en Odontología - Universidad Nacional
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Especialización en Estética Dental
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Certificación en Ortodoncia Invisible
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Miembro del Colegio Odontológico Nacional
                </li>
              </ul>
            </div>
            
            {/* Philosophy */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mi Filosofía:</h3>
              <p className="text-gray-700 italic">
                "Atención integral con tecnología y empatía. Cada sonrisa es única y 
                merece un cuidado personalizado que transforme no solo la apariencia, 
                sino también la confianza de mis pacientes."
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;