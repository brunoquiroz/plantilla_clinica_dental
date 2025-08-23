import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carmen Rodríguez',
      age: '32 años',
      treatment: 'Diseño de Sonrisa',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'Increíble transformación. La Dra. González no solo mejoró mi sonrisa, sino que me devolvió la confianza. El trato es excepcional y los resultados superaron mis expectativas.',
      rating: 5
    },
    {
      name: 'Miguel Santos',
      age: '45 años', 
      treatment: 'Ortodoncia Invisible',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'Proceso muy cómodo y discreto. Pude alinear mis dientes sin que nadie lo notara. La atención personalizada y el seguimiento constante fueron extraordinarios.',
      rating: 5
    },
    {
      name: 'Ana Morales',
      age: '28 años',
      treatment: 'Blanqueamiento + Limpieza',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      quote: 'Resultados inmediatos y duraderos. Mi sonrisa luce radiante y natural. El equipo es muy profesional y la clínica tiene un ambiente muy acogedor.',
      rating: 5
    }
  ];

  const beforeAfter = [
    {
      title: 'Diseño de Sonrisa',
      before: 'https://images.pexels.com/photos/6812472/pexels-photo-6812472.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/6812528/pexels-photo-6812528.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Ortodoncia',
      before: 'https://images.pexels.com/photos/6812033/pexels-photo-6812033.jpeg?auto=compress&cs=tinysrgb&w=400',
      after: 'https://images.pexels.com/photos/6812040/pexels-photo-6812040.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa. 
            Descubre las transformaciones que hemos logrado juntos.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Patient info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.age}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Transformaciones Reales
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Casos reales de pacientes que confiaron en nosotros para transformar sus sonrisas. 
              Resultados que hablan por sí solos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {beforeAfter.map((case_, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">{case_.title}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-3">ANTES</p>
                    <img 
                      src={case_.before} 
                      alt="Antes del tratamiento"
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-3">DESPUÉS</p>
                    <img 
                      src={case_.after} 
                      alt="Después del tratamiento"
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 mb-4">
              * Resultados pueden variar según cada caso. Imágenes utilizadas con consentimiento del paciente.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Ver Más Casos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;