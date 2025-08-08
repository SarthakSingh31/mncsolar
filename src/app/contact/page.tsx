import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import { COMPANY_SHORT, CONTACT_INFO, SERVICE_AREAS } from '@/lib/constants';
import AppointmentForm from '@/components/forms/AppointmentForm';

export default function ContactPage() {
  return (
    <div>
      <section className="gradient-solar py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-solar mb-6">
              <span className="text-sm font-medium text-slate-700">Contact & Consultation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your solar journey? Contact {COMPANY_SHORT} for a free consultation 
              and personalized quote for your solar installation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-orange-600 font-medium hover:text-orange-700 text-lg"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Send us your inquiries</p>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-orange-600 font-medium hover:text-orange-700"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 mb-2">Visit our office</p>
                    <p className="text-gray-700">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-orange-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve customers across:
                </p>
                <div className="flex flex-wrap gap-3">
                  {SERVICE_AREAS.map((area) => (
                    <span 
                      key={area}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <Calendar className="h-8 w-8 inline mr-3 text-orange-600" />
                Book Your Free Consultation
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What to Expect:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Free site assessment and energy audit
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Customized solar solution design
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Detailed cost breakdown and savings analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Information on government incentives and financing
                  </li>
                </ul>
              </div>

              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get quick answers to common questions about our solar installations and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does installation take?
              </h3>
              <p className="text-gray-600">
                Most residential installations are completed within 1-3 days, depending on system size. 
                Larger commercial or village projects may take 1-2 weeks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What warranty do you provide?
              </h3>
              <p className="text-gray-600">
                We provide 25-year panel warranties, 10-year inverter warranties, and 5-year installation warranties. 
                All components are covered by manufacturer warranties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you handle government approvals?
              </h3>
              <p className="text-gray-600">
                Yes, we handle all necessary permits and approvals, including grid connection applications 
                and subsidy documentation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What maintenance is required?
              </h3>
              <p className="text-gray-600">
                Solar panels require minimal maintenance - mainly periodic cleaning and annual inspections. 
                We offer maintenance packages for ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our solar experts are here to help you make the right decision for your energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}