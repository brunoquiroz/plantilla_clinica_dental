import React from 'react';
import { 
  Heart, 
  Sparkles, 
  Smile, 
  Zap, 
  Shield, 
  Clock 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Consultoría Personalizada',
      description: 'Evaluación completa y plan de tratamiento adaptado a tus necesidades específicas.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Sparkles,
      title: 'Estética Dental',
      description: 'Diseño de sonrisa, carillas y tratamientos para lograr la sonrisa de tus sueños.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Smile,
      title: 'Ortodoncia',
      description: 'Alineación dental con brackets tradicionales e invisibles para todas las edades.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Zap,
      title: 'Blanqueamiento',
      description: 'Técnicas avanzadas para devolver el brillo natural a tu sonrisa.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Shield,
      title: 'Limpieza y Profilaxis',
      description: 'Prevención y mantenimiento para mantener tu salud bucal en óptimas condiciones.',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      title: 'Urgencias Dentales',
      description: 'Atención inmediata para emergencias, disponible en horarios extendidos.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Servicios Dentales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de tratamientos dentales con tecnología de última generación 
            y un enfoque personalizado para cada paciente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Más información
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Ver Todos los Servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;