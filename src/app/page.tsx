import Link from "next/link";
import Image from "next/image";
import {
  Battery,
  Building2,
  MessageCircle,
  Phone,
  RefreshCw,
  Zap,
} from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import { CONTACT_INFO, SERVICES, STATS } from "@/lib/constants";

const SERVICE_ICONS = {
  Zap,
  Battery,
  RefreshCw,
  Building2,
};

export default function HomePage() {
  return (
    <main>
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[600px] flex flex-col md:flex-row overflow-hidden">
        {/* Left – dark navy panel */}
        <div className="relative z-10 flex flex-col justify-center bg-navy px-8 py-16 md:px-16 md:py-24 w-full md:w-[58%] shrink-0">
          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
            Jharkhand &amp; Bihar's Trusted Solar Partner
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Half a Lifetime<br />of Free Electricity
          </h1>
          <p className="text-white/65 text-lg max-w-md mb-10 leading-relaxed">
            How would you like free electricity — not for a day, but for the
            next 25–30 years? 200+ installations across mini-grids and
            institutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber text-navy font-semibold px-6 py-3 rounded-lg hover:bg-amber-dark transition-colors"
            >
              Get Free Quote →
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right – solar image with diagonal clip */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-[50%]">
          <Image
            src="/images/installations/solar-panels-aerial.jpg"
            alt="Aerial view of solar panel installation by MNC Solar"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          {/* subtle dark overlay so the hero feels cohesive */}
          <div className="absolute inset-0 bg-navy/20" />
        </div>

        {/* Mobile-only image (below text, no clip-path) */}
        <div className="relative w-full h-56 md:hidden">
          <Image
            src="/images/installations/solar-panels-aerial-mobile.jpg"
            alt="Aerial view of solar panel installation by MNC Solar"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ── Section 2: Stats Bar ─────────────────────────────────────── */}
      <section className="relative z-20 -mt-10 md:-mt-16 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Services Preview ──────────────────────────────── */}
      <section className="bg-slate-light py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Our Solar Solutions
            </h2>
            <p className="text-slate-text text-lg">
              From 2 KW residential to 100 KW commercial
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon =
                SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS];
              return (
                <Link
                  key={service.id}
                  href="/services"
                  className="group bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-amber-light flex items-center justify-center shrink-0">
                    {Icon && (
                      <Icon className="w-5 h-5 text-amber" strokeWidth={2} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base mb-1 group-hover:text-amber transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-text text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <p className="text-xs font-semibold text-amber mt-auto">
                    {service.capacity}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 4: Environmental Impact ─────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left – content */}
            <div>
              <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
                Environmental Impact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                A 5 KW Solar Plant Offsets
              </h2>

              {/* Big stat pair */}
              <div className="flex gap-10 mb-8">
                <div>
                  <p className="text-4xl md:text-5xl font-extrabold text-amber leading-none">
                    6,462 kg
                  </p>
                  <p className="text-white/60 text-sm mt-2">CO₂ per year</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-extrabold text-amber leading-none">
                    252
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    equivalent trees planted
                  </p>
                </div>
              </div>

              <p className="text-white/70 text-base leading-relaxed max-w-md">
                Save up to ₹60 lakh over 30 years. With compound interest, that
                snowballs to nearly a crore.
              </p>
            </div>

            {/* Right – nature image */}
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80"
                alt="Green nature and trees representing environmental impact"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/30 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Final CTA ─────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        }}
        className="py-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-navy/75 text-lg mb-10">
            Don&apos;t delay — give us a call and start saving today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
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
