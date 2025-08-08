import Link from 'next/link';
import Image from 'next/image';
import { Battery, Zap, Home, ArrowRight, Phone, Mail } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';
import ServiceCard from '@/components/ui/ServiceCard';

export default function HomePage() {
  return (
    <div>
      <section className="relative gradient-solar py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-solar mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                  <span className="text-sm font-medium text-slate-700">Trusted Solar Solutions Since 2020</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-left">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Powering India with Clean Energy
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Join thousands of Indian families who have made the switch to solar energy. 
                From large-scale installations to rooftop solutions, we bring sustainable power to communities across India.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 mb-1">1000+</div>
                  <p className="text-slate-600 text-sm">Happy Customers</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-accent-600 mb-1">50MW+</div>
                  <p className="text-slate-600 text-sm">Solar Installed</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/contact"
                className="gradient-primary text-white px-10 py-4 rounded-xl font-semibold shadow-solar hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services"
                className="bg-white/80 backdrop-blur-sm border-2 border-primary-200 text-slate-700 px-10 py-4 rounded-xl font-semibold hover:bg-white hover:border-primary-300 transition-all duration-300 shadow-solar"
              >
                View Services
              </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-200/30 to-accent-200/30 rounded-2xl blur transform rotate-1"></div>
              <Image
                src="/images/ananthapuram-solar-park.jpg"
                alt="Large solar installation at Ananthapuram Ultra Mega Solar Park in India"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Solar Energy?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transform your energy consumption with sustainable, cost-effective solar solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-green-100 to-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-accent group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Zap className="h-10 w-10 text-green-600" />
                </div>
                <div className="absolute -inset-1 bg-green-200/30 rounded-2xl blur group-hover:blur-md transition-all duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Reduce Electricity Bills</h3>
              <p className="text-slate-600 leading-relaxed">Cut your monthly electricity costs by up to 90% with our efficient solar systems and smart energy management.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-accent-100 to-accent-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-accent group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Battery className="h-10 w-10 text-accent-600" />
                </div>
                <div className="absolute -inset-1 bg-accent-200/30 rounded-2xl blur group-hover:blur-md transition-all duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Reliable Backup Power</h3>
              <p className="text-slate-600 leading-relaxed">Ensure uninterrupted power supply with our advanced battery backup solutions and grid-tie systems.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-solar group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Home className="h-10 w-10 text-primary-600" />
                </div>
                <div className="absolute -inset-1 bg-primary-200/30 rounded-2xl blur group-hover:blur-md transition-all duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Increase Property Value</h3>
              <p className="text-slate-600 leading-relaxed">Solar installations can increase your property value by 15-20% while providing long-term energy savings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-4">
              <span className="text-sm font-medium text-primary-700">Our Solutions</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Solar Solutions Tailored for You</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive solar energy systems designed to meet your specific requirements and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                featured={index === 0}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/services"
              className="gradient-primary text-white px-10 py-4 rounded-xl font-semibold shadow-solar hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center group"
            >
              View All Services
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Real Solar Installations Across India</h2>
              <p className="text-lg text-slate-600 mb-8">
                From metro stations in Delhi to remote villages in Ladakh, solar energy is transforming lives across India. 
                See how communities are embracing clean energy solutions for a sustainable future.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <Image
                    src="/images/delhi-metro-solar.jpg"
                    alt="Solar panels on Delhi Metro station rooftop"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover w-full h-48 group-hover:shadow-lg transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Delhi Metro Solar</p>
                      <p className="text-sm">Sustainable Public Transport</p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src="/images/solar-man-india.jpg"
                    alt="Indian solar energy expert and advocate"
                    width={300}
                    height={200}
                    className="rounded-xl shadow-md object-cover w-full h-48 group-hover:shadow-lg transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Solar Expert</p>
                      <p className="text-sm">Leading India&apos;s Solar Revolution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/chandigarh-solar-plant.jpg"
                alt="Large-scale solar power plant in Chandigarh"
                width={400}
                height={500}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl">
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Chandigarh Solar Plant</p>
                  <p className="text-sm opacity-90">Powering the City Beautiful</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative gradient-primary rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Solar?</h2>
              <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                Get a free consultation and personalized quote for your solar installation today
              </p>
              
              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-10">
                <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                  <Phone className="h-6 w-6" />
                  <span className="font-semibold text-lg">{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                  <Mail className="h-6 w-6" />
                  <span className="font-semibold text-lg">{CONTACT_INFO.email}</span>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="bg-white text-primary-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300 inline-flex items-center shadow-xl group"
              >
                Book Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
