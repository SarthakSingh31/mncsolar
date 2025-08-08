import { Check } from 'lucide-react';
import { ServiceItem } from '@/types';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-solar hover:shadow-xl relative group transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${
      featured 
        ? 'border-2 border-primary-200 ring-2 ring-primary-100' 
        : 'border border-slate-200 hover:border-primary-200'
    }`}>
      {featured && (
        <div className="absolute -top-2 -right-4 z-10">
          <div className="relative">
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300">
              <span className="text-xs font-bold tracking-wider">POPULAR</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full blur-sm opacity-50 transform rotate-12"></div>
          </div>
        </div>
      )}
      
      <div className={`relative flex flex-col h-full p-8`}>
        <div className="min-h-[3rem] flex items-start mb-4">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors leading-tight">{service.title}</h3>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="bg-green-100 p-1 rounded-full mt-0.5">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-slate-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a
          href="/contact"
          className={`w-full inline-block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105 mt-auto ${
            featured 
              ? 'gradient-primary text-white shadow-solar hover:shadow-lg' 
              : 'bg-slate-100 text-slate-700 hover:bg-primary-50 hover:text-primary-600 border border-slate-200 hover:border-primary-200'
          }`}
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}
