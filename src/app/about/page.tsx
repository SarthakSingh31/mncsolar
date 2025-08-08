import Link from 'next/link';
import Image from 'next/image';
import { Users, Award, MapPin, Target, ArrowRight } from 'lucide-react';
import { COMPANY_NAME, COMPANY_SHORT, SERVICE_AREAS, CONTACT_INFO } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div>
      <section className="gradient-solar py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-solar mb-6">
              <span className="text-sm font-medium text-slate-700">About Our Company</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                About {COMPANY_SHORT}
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Leading the solar revolution across {SERVICE_AREAS.join(' and ')}, 
              bringing sustainable energy solutions to communities and businesses with innovation and expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-blue-200/30 rounded-2xl blur transform -rotate-1"></div>
              <Image
                src="/images/solar-cooker-leh.jpg"
                alt="Solar cooker being used near Leh, demonstrating sustainable technology adoption in remote Indian regions"
                width={500}
                height={350}
                className="relative rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At {COMPANY_NAME}, we are committed to transforming the energy landscape 
                of eastern India. Our mission is to provide reliable, affordable, and 
                sustainable solar energy solutions that empower communities and reduce 
                environmental impact.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that clean energy should be accessible to everyone, from 
                individual homeowners to entire villages. Through innovative technology 
                and exceptional service, we&apos;re making this vision a reality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <p className="text-gray-600">Installations Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <p className="text-gray-600">Villages Powered</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">To be the leading solar energy provider in eastern India, powering sustainable development.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Commitment</h3>
                    <p className="text-gray-600">We use only premium components and provide comprehensive warranties on all installations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Focus</h3>
                    <p className="text-gray-600">We&apos;re not just installing solar panels—we&apos;re building sustainable communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With years of experience and hundreds of successful installations, 
              we deliver excellence in every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our certified technicians have extensive experience in solar installations 
                and are trained on the latest technologies.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                We provide round-the-clock customer support and maintenance services 
                to ensure your system runs optimally.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Presence</h3>
              <p className="text-gray-600">
                Based in {SERVICE_AREAS.join(' and ')}, we understand local needs 
                and provide personalized solutions for each region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Service Areas</h2>
              <p className="text-lg text-gray-600 mb-8">
                We proudly serve customers across {SERVICE_AREAS.join(' and ')}, 
                bringing clean energy solutions to both urban and rural areas. 
                Our local presence ensures quick response times and personalized service.
              </p>
              <div className="space-y-4">
                {SERVICE_AREAS.map((area) => (
                  <div key={area} className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-orange-600" />
                    <span className="text-lg font-medium text-gray-900">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-4">Based in:</p>
                <p className="text-gray-700">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="bg-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Solar Journey?</h3>
              <p className="text-lg mb-8 opacity-90">
                Contact us today for a free consultation and customized quote 
                for your solar installation.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="opacity-90">{CONTACT_INFO.phone}</p>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="opacity-90">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <Link 
                href="/contact"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}