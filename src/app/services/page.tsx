import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Solar Services | MNC Solar',
  description:
    'On-grid, off-grid, hybrid, and institutional solar solutions from 2 KW to 100 KW. Professional installation across Jharkhand and Bihar. PMSG Govt of Bihar approved vendor. ISO 9001:2015 certified.',
};

export default function ServicesPage() {
  return (
    <div>
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="bg-slate-light border-b border-border py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-4">
            Our Solar Solutions
          </h1>
          <p className="text-xl text-slate-text font-medium mb-4">
            From 2 KW to 100 KW — we have the right system for your needs
          </p>
          <p className="text-slate-text text-base leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re powering a single home, a school, or a commercial complex,
            MNC Solar designs and installs systems that eliminate your electricity bill
            and deliver reliable power for 25+ years.
          </p>
        </div>
      </section>

      {/* ── Service Cards Grid ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section
        style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
        className="py-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Need Help Choosing the Right System?
          </h2>
          <p className="text-navy/75 text-lg mb-10">
            Our experts will analyze your requirements and recommend the perfect solar solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-navy-light transition-colors shadow-md"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
}
