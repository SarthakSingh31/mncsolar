import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  IndianRupee,
  Leaf,
  Wrench,
  Shield,
  BatteryCharging,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  XCircle,
  Gem,
  ClipboardCheck,
  Satellite,
  BarChart3,
  Calculator,
  Home,
  Sun,
  Eye,
  Ruler,
  Wind,
  Plug,
  Monitor,
} from 'lucide-react';
import { CONTACT_INFO, SERVICE_AREAS } from '@/lib/constants';
import InstallationVideo from '@/components/ui/InstallationVideo';

export const metadata: Metadata = {
  title: 'Why MNC Solar | Mahadeva And Company',
  description:
    'Discover why MNC Solar is Jharkhand & Bihar\'s trusted solar partner — proven expertise, 200+ installations. PMSG Govt of Bihar approved vendor. ISO 9001:2015 certified.',
};

const BENEFITS = [
  {
    icon: IndianRupee,
    title: 'Electricity Cost Saving',
    description:
      'Bring your electricity bill down to zero, whatever your electrical load. Save up to ₹60 lakh over 30 years.',
  },
  {
    icon: Leaf,
    title: 'Safeguard Environment',
    description:
      'Use clean, green energy that produces no greenhouse gases. A 5 KW plant offsets 6,462 Kg of CO₂ annually.',
  },
  {
    icon: Wrench,
    title: 'Low Maintenance',
    description:
      'Solar systems require minimal maintenance — usually just periodic cleaning of panels.',
  },
  {
    icon: Shield,
    title: 'High Durability',
    description:
      'Solar panels typically last 25 years and more, providing decades of reliable power.',
  },
  {
    icon: BatteryCharging,
    title: 'Energy Security',
    description:
      'Protection against rising energy costs with uninterrupted 24-hour supply for hybrid plants.',
  },
];

const EXPERTISE_STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '200+', label: 'Installations' },
  { value: '2-100 KW', label: 'System Range' },
  { value: '3 Types', label: 'On/Off/Hybrid' },
];

const BEFORE_ITEMS = [
  'Generator must be started manually after every outage',
  'Dark period between grid failure and generator start',
  'Recurring diesel costs add up throughout the year',
  'Generator repair and maintenance expenses',
  'Dedicated manpower required around the clock',
];

const AFTER_ITEMS = [
  'Automatic switchover — zero manual intervention',
  'Zero downtime, seamless uninterrupted power',
  'No fuel cost whatsoever',
  'Minimal maintenance — just periodic panel cleaning',
  'No dedicated staff needed for power management',
];

const SITE_SURVEY_STEPS = [
  {
    icon: Satellite,
    title: 'Satellite Mapping',
    description:
      'We study your roof/ground orientation (azimuth) using satellite imagery to determine optimal panel placement.',
  },
  {
    icon: BarChart3,
    title: 'Energy Usage',
    description:
      'We study your past 12 months electricity bill to determine the required plant size.',
  },
  {
    icon: Calculator,
    title: 'Load Calculation',
    description:
      'We make a comprehensive list of all electrical items and calculate the load, including the maximum amperage the system must handle at any point of time.',
  },
  {
    icon: Home,
    title: 'Roof Inspection',
    description:
      'We evaluate the structure\'s integrity, roofing material and remaining life span.',
  },
  {
    icon: Sun,
    title: 'Shading Analysis',
    description:
      'We check for shadow areas of your roof/ground as shadows severely reduce production.',
  },
  {
    icon: Eye,
    title: 'Check Obstructions',
    description:
      'We take into account obstructions like pillars, columns, vents and antennas on your roof.',
  },
  {
    icon: Ruler,
    title: 'Roof Measurement',
    description:
      'After measuring the length and breadth of the roof section, we work out a detailed sketch for the clean area for panel installation.',
  },
  {
    icon: Wind,
    title: 'Structure Identification',
    description:
      'Taking into account maximum wind speed in the area, we work out rafter and purlin spacing to ensure a very secure and robust panel mounting.',
  },
  {
    icon: Plug,
    title: 'Electrical System Review',
    description:
      'We study your electric supply and distribution system in detail — including the main panel, its amperage and safety equipment installed.',
  },
  {
    icon: Monitor,
    title: 'Control Room Feasibility',
    description:
      'We study the feasibility of the place desired by you for erection of the control room and offer our recommendations.',
  },
];

export default function WhyMNCSolarPage() {
  return (
    <main>
      {/* ── Section 1: Hero ──────────────────────────────────────────── */}
      <section className="bg-navy py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
            Our Promise
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Why Choose MNC Solar?
          </h1>
          <p className="text-white/65 text-lg leading-relaxed">
            Not many can meet our expertise and we have a number of satisfied
            customers to back our claim.
          </p>
        </div>
      </section>

      {/* ── Section 2: Key Benefits ──────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              The MNC Solar Advantage
            </h2>
            <p className="text-slate-text text-lg">
              Five compelling reasons to make the switch today.
            </p>
          </div>

          {/* 5-card grid: 2 cols → 3 cols on lg, centred last row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={title}
                className={`bg-white rounded-xl border border-border p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4${
                  /* Centre the 5th card when it's alone on the last row */
                  idx === 4 ? ' lg:col-start-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-light flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-amber" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Our Expertise ─────────────────────────────────── */}
      <section className="py-20" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left – copy */}
            <div>
              <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
                Proven Track Record
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Our Expertise
              </h2>
              <p className="text-slate-text text-base leading-relaxed mb-4">
                With over 5 years of hands-on experience in solar installation
                across Jharkhand and Bihar, our team of trained professionals
                has delivered reliable power solutions to homes, schools, and
                commercial establishments alike.
              </p>
              <p className="text-slate-text text-base leading-relaxed">
                We handle all system types — on-grid, off-grid, and hybrid —
                ranging from compact 2 KW residential setups to large-scale 100
                KW institutional plants. Every installation is backed by our
                commitment to quality and long-term customer satisfaction.
              </p>
            </div>

            {/* Right – photos/video + stat grid */}
            <div className="flex flex-col gap-4">
              {/* Installation media pair */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <InstallationVideo
                    src="/videos/rooftop-closeup.mp4"
                    poster="/images/installations/rooftop-closeup-poster.jpg"
                    alt="Solar panel installation walkthrough on rooftop"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/installations/battery-bank.jpg"
                    alt="Battery bank installation by MNC Solar"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* 2×2 stat grid */}
              <div className="grid grid-cols-2 gap-3">
                {EXPERTISE_STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl border border-border p-5 text-center shadow-sm"
                  >
                    <p className="text-2xl md:text-3xl font-extrabold text-amber leading-none mb-1">
                      {value}
                    </p>
                    <p className="text-slate-text text-xs font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Quality & Site Survey ──────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quality commitment callout */}
          <div className="border-l-4 border-amber bg-amber-light/30 rounded-r-xl px-8 py-6 mb-16">
            <div className="flex items-center gap-3 mb-3">
              <Gem className="w-5 h-5 text-amber shrink-0" strokeWidth={2} />
              <p className="text-amber text-xs font-bold uppercase tracking-widest">
                Quality Commitment
              </p>
            </div>
            <p className="text-navy text-base md:text-lg leading-relaxed font-medium">
              We use the best quality and modern, state of the art components in
              installations of our projects. This is to give you best quality
              for your money.
            </p>
          </div>

          {/* Site survey process */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ClipboardCheck className="w-5 h-5 text-amber" strokeWidth={2} />
              <p className="text-amber text-xs font-bold uppercase tracking-widest">
                Our Process
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Thorough Site Survey
            </h2>
            <p className="text-slate-text text-base leading-relaxed max-w-2xl mx-auto">
              We recommend solutions only after thoroughly understanding your
              requirements. We explore your expectations and conduct a detailed
              site recce before any installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SITE_SURVEY_STEPS.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-border bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Number badge */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-amber flex items-center justify-center">
                    <span className="text-navy text-sm font-extrabold">{idx + 1}</span>
                  </div>
                  <Icon className="w-4 h-4 text-slate-text" strokeWidth={1.5} />
                </div>
                {/* Content */}
                <div className="min-w-0">
                  <h3 className="font-bold text-navy text-sm mb-1">{title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Case Study ────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Callout box with amber left border */}
          <div className="border-l-4 border-amber bg-amber-light/30 rounded-r-xl px-8 py-6 mb-12">
            <p className="text-amber text-xs font-bold uppercase tracking-widest mb-2">
              Real-World Value
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy leading-tight">
              Case Study: Uninterrupted Power for Institutions
            </h2>
          </div>

          {/* Problem statement */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-navy mb-3">The Problem</h3>
            <p className="text-slate-text leading-relaxed">
              A typical school has a heavy daytime load — hundreds of fans and
              lights running simultaneously — but minimal night load. Every grid
              outage forces staff to start the generator manually, creating a
              dark period between the outage and the generator coming online.
              Add the cost of diesel, generator repair and maintenance, and the
              need for dedicated manpower, and this cycle repeats multiple times
              daily for all 365 days of the year.
            </p>
          </div>

          {/* Before / After comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Before */}
            <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
              <div className="flex items-center gap-2 mb-5">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                <h4 className="font-bold text-red-700 text-base">
                  Before — Generator Dependency
                </h4>
              </div>
              <ul className="space-y-3">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-red-800">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-xl border border-green-100 bg-green-50/50 p-6">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <h4 className="font-bold text-green-800 text-base">
                  After — MNC Solar Hybrid System
                </h4>
              </div>
              <ul className="space-y-3">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-green-900">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Equipment evidence strip */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              {
                src: '/images/installations/switchgear-panel.jpg',
                alt: 'Switchgear and electrical panel installed by MNC Solar',
                label: 'Switchgear Panel',
              },
              {
                src: '/images/installations/inverter-display.jpg',
                alt: 'Inverter display showing 20.3 kW solar generation',
                label: 'Live Solar: 20.3 kW',
              },
              {
                src: '/images/installations/smart-meter.jpg',
                alt: 'Genus smart meter for net metering',
                label: 'Smart Meter',
              },
            ].map(({ src, alt, label }) => (
              <div
                key={label}
                className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm"
              >
                <Image src={src} alt={alt} fill sizes="33vw" className="object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/80 to-transparent p-3">
                  <p className="text-white text-xs font-semibold">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Resolution */}
          <div className="border-l-4 border-amber bg-navy/5 rounded-r-xl px-8 py-5">
            <p className="text-navy text-base leading-relaxed font-medium">
              Imagine 24 hours of uninterrupted electricity without any
              generator and without any dedicated manpower. It is all possible
              with MNC Solar at the most cost-effective way.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 6: Service Areas ─────────────────────────────────── */}
      <section className="bg-navy py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
            Where We Operate
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Proudly Serving
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center justify-center gap-3 bg-navy-light border border-white/10 rounded-2xl px-10 py-7 shadow-lg"
              >
                <MapPin className="w-6 h-6 text-amber shrink-0" strokeWidth={2} />
                <span className="text-white text-2xl font-bold">{area}</span>
              </div>
            ))}
          </div>

          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
            From urban rooftops to rural mini-grids, we bring solar power to
            communities across eastern India.
          </p>
        </div>
      </section>

      {/* ── Section 7: Final CTA ─────────────────────────────────────── */}
      <section
        style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
        className="py-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Give Us a Chance
          </h2>
          <p className="text-navy/75 text-lg mb-10">
            We promise that you would be our next satisfied and happy customer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-light transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              Call Now
            </Link>
            <Link
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-slate-light transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
