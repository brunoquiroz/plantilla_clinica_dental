import React from 'react';
import { Calendar, User, FileText } from 'lucide-react';

const BookingProcess = () => {
  const steps = [
    {
      icon: Calendar,
      number: '01',
      title: 'Agenda Online',
      description: 'Selecciona el día y hora que mejor se adapte a tu agenda. Proceso simple y rápido.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: User,
      number: '02', 
      title: 'Consulta Personalizada',
      description: 'Primera consulta gratuita donde evaluamos tu caso y resolvemos todas tus dudas.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: FileText,
      number: '03',
      title: 'Plan de Tratamiento',
      description: 'Recibe tu plan personalizado con tiempos, costos y opciones de financiamiento.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Agenda tu consulta en 3 pasos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proceso simple y transparente para comenzar tu transformación dental. 
            Primera consulta completamente gratuita.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gray-200"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 ${step.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 relative z-10 bg-white shadow-lg`}>
                    <IconComponent className={`h-10 w-10 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
            Comenzar Mi Transformación
          </button>
          <p className="text-gray-500 mt-4">
            Primera consulta gratuita • Sin compromiso • Presupuesto transparente
          </p>
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Qué incluye tu primera consulta?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Evaluación completa de tu salud bucal
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Análisis fotográfico de tu sonrisa actual
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Diagnóstico profesional detallado
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Explicación de opciones de tratamiento
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Presupuesto personalizado sin compromiso
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-6xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-900 font-semibold mb-2">GRATUITA</div>
                <div className="text-gray-600">Primera consulta</div>
                <div className="mt-4 text-sm text-gray-500">
                  Valor: $150.000 • Hoy: Gratis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;