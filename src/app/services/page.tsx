import Link from 'next/link';
import { Home, Building, Battery, Zap, ArrowRight, Check, Sun } from 'lucide-react';
import { SERVICES, COMPANY_SHORT } from '@/lib/constants';
import ServiceCard from '@/components/ui/ServiceCard';

export default function ServicesPage() {
  const serviceIcons = {
    'complete-home': Home,
    'village-power': Building,
    'battery-offgrid': Battery,
    'ongrid-solutions': Zap
  };

  return (
    <div>
      <section className="gradient-solar py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-solar mb-6">
              <span className="text-sm font-medium text-slate-700">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Solar Energy Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solar installations tailored to your energy needs, 
              from residential homes to entire communities with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of solar solutions designed to meet different energy requirements and budgets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Service Breakdown</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about each of our solar solutions and find the perfect fit for your needs
            </p>
          </div>
          
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Sun;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Icon className="h-8 w-8 text-orange-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      href="/contact"
                      className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
                    >
                      Get Quote for {service.title.split(' ')[0]} Solution
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className={`bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl p-8 ${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="aspect-square bg-white rounded-lg shadow-lg p-8 flex items-center justify-center">
                      <Icon className="h-24 w-24 text-orange-600" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth solar installation experience from start to finish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Site Assessment</h3>
              <p className="text-gray-600 text-sm">Free on-site evaluation of your energy needs and roof conditions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Design</h3>
              <p className="text-gray-600 text-sm">Tailored system design with detailed proposal and cost breakdown</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">Professional installation by certified technicians with minimal disruption</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Activation & Support</h3>
              <p className="text-gray-600 text-sm">System activation, monitoring setup, and ongoing maintenance support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Choose Your Solar Solution?</h2>
            <p className="text-xl mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Contact {COMPANY_SHORT} today for a personalized consultation and comprehensive quote tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact"
                className="gradient-primary text-white px-10 py-4 rounded-xl font-bold shadow-solar hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}