import React from 'react';
import { 
  UserCheck, 
  Cpu, 
  Heart, 
  Clock, 
  DollarSign, 
  Award 
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: UserCheck,
      title: 'Atención Directa',
      description: 'Siempre serás atendido por la misma doctora, garantizando continuidad y confianza en tu tratamiento.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Cpu,
      title: 'Tecnología Avanzada',
      description: 'Equipos de última generación para diagnósticos precisos y tratamientos más cómodos y efectivos.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Heart,
      title: 'Compromiso Personal',
      description: 'Cada caso es único. Desarrollamos planes personalizados que se adaptan a tus necesidades específicas.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Horarios Flexibles',
      description: 'Nos adaptamos a tu agenda con horarios extendidos y citas de urgencia disponibles.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: DollarSign,
      title: 'Precios Transparentes',
      description: 'Sin sorpresas ni costos ocultos. Presupuestos claros y opciones de financiamiento disponibles.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Award,
      title: 'Garantía de Calidad',
      description: 'Respaldamos nuestro trabajo con garantía completa y seguimiento post-tratamiento.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir nuestra clínica?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos diferenciamos por nuestro enfoque integral, tecnología de vanguardia 
            y el compromiso genuino con la salud y bienestar de cada paciente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para transformar tu sonrisa?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            No esperes más para obtener la sonrisa que siempre has deseado. 
            Agenda tu consulta personalizada y descubre cómo podemos ayudarte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Agendar Consulta Gratuita
            </button>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
              Ver nuestras instalaciones
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;