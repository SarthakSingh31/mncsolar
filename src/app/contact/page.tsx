import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, SERVICE_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | MNC Solar',
  description:
    'Get in touch with MNC Solar for solar installation in Jharkhand and Bihar. Call +91 9643805595 or visit our office in Patna. PMSG Govt of Bihar approved vendor. ISO 9001:2015 certified.',
};

export default function ContactPage() {
  return (
    <div>
      {/* ── Section 1: Header ───────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Get In Touch
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            Ready to start your solar journey? Reach out to us today.
          </p>
        </div>
      </section>

      {/* ── Section 2: Contact Cards ─────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="flex flex-col items-center text-center bg-slate-light border border-border rounded-2xl p-8 shadow-sm hover:shadow-solar transition-shadow">
              <div className="w-14 h-14 rounded-full bg-amber-light flex items-center justify-center mb-5">
                <Phone className="w-7 h-7 text-amber" strokeWidth={2} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-text mb-3">
                Call Us
              </p>
              <Link
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="text-2xl font-extrabold text-navy hover:text-amber transition-colors leading-tight"
              >
                {CONTACT_INFO.phone}
              </Link>
            </div>

            {/* Email Card */}
            <div className="flex flex-col items-center text-center bg-slate-light border border-border rounded-2xl p-8 shadow-sm hover:shadow-solar transition-shadow">
              <div className="w-14 h-14 rounded-full bg-amber-light flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-amber" strokeWidth={2} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-text mb-3">
                Email Us
              </p>
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-lg font-bold text-navy hover:text-amber transition-colors break-all"
              >
                {CONTACT_INFO.email}
              </Link>
            </div>

            {/* Address Card */}
            <div className="flex flex-col items-center text-center bg-slate-light border border-border rounded-2xl p-8 shadow-sm hover:shadow-solar transition-shadow">
              <div className="w-14 h-14 rounded-full bg-amber-light flex items-center justify-center mb-5">
                <MapPin className="w-7 h-7 text-amber" strokeWidth={2} />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-slate-text mb-3">
                Operating Office
              </p>
              <p className="text-base font-semibold text-navy leading-snug mb-5">
                {CONTACT_INFO.address}
              </p>

              <div className="w-12 h-px bg-border mb-5" />

              <p className="text-xs font-bold uppercase tracking-widest text-slate-text mb-3">
                Registered Office
              </p>
              <p className="text-base font-semibold text-navy leading-snug">
                {CONTACT_INFO.registeredAddress}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: WhatsApp CTA ──────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-4">
            Instant Response
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Prefer WhatsApp?
          </h2>
          <p className="text-slate-text-dark text-lg mb-10 leading-relaxed">
            Chat with us instantly
          </p>
          <Link
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-colors"
          >
            <MessageCircle className="w-6 h-6" strokeWidth={2} />
            Chat on WhatsApp
          </Link>
        </div>
      </section>

      {/* ── Section 4: Service Areas ─────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: '#f8fafc' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
            Coverage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
            We Serve
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="inline-flex items-center gap-2 bg-white border border-border rounded-xl px-6 py-3 shadow-sm"
              >
                <MapPin className="w-4 h-4 text-amber shrink-0" strokeWidth={2.5} />
                <span className="font-semibold text-navy text-base">{area}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-text text-base leading-relaxed max-w-xl mx-auto">
            From urban rooftops in Patna to rural installations across Jharkhand, we bring
            solar power to your doorstep.
          </p>
        </div>
      </section>
    </div>
  );
}
