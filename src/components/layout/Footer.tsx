import Link from 'next/link';
import { Mail, Phone, MapPin, Sun } from 'lucide-react';
import { COMPANY_NAME, COMPANY_SHORT, CONTACT_INFO, SERVICE_AREAS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-solar">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">{COMPANY_SHORT}</span>
            </div>
            <p className="text-gray-300 mb-4">
              {COMPANY_NAME} provides reliable solar solutions across {SERVICE_AREAS.join(' and ')}, 
              bringing clean energy to homes and communities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                  <Mail className="h-4 w-4 text-primary-400" />
                </div>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-accent-500/20 rounded-lg group-hover:bg-accent-500/30 transition-colors">
                  <Phone className="h-4 w-4 text-accent-400" />
                </div>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors mt-0.5">
                  <MapPin className="h-4 w-4 text-primary-400" />
                </div>
                <span className="text-slate-300">{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-primary-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-primary-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-primary-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-accent-300">Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-300 flex items-center">
                <span className="w-1 h-1 bg-accent-400 rounded-full mr-3"></span>
                Home Solar Solutions
              </li>
              <li className="text-slate-300 flex items-center">
                <span className="w-1 h-1 bg-accent-400 rounded-full mr-3"></span>
                Village Power Systems
              </li>
              <li className="text-slate-300 flex items-center">
                <span className="w-1 h-1 bg-accent-400 rounded-full mr-3"></span>
                Battery-Based Systems
              </li>
              <li className="text-slate-300 flex items-center">
                <span className="w-1 h-1 bg-accent-400 rounded-full mr-3"></span>
                On-Grid Solutions
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse"></span>
              <p className="text-slate-400 text-sm">
                Serving {SERVICE_AREAS.join(' & ')} with clean energy solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}