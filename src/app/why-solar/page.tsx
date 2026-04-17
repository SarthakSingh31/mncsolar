import type { Metadata } from 'next';
import Link from 'next/link';
import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Why Go Solar? | MNC Solar',
  description:
    'Discover the financial, environmental, and technical case for solar energy. Learn how a 5 KW solar plant can save you ₹60 lakh over 30 years and offset 6,462 kg of CO₂ annually.',
};

/* ─────────────────────────────────────────────────────────
   Accordion content components (plain TSX, no state)
───────────────────────────────────────────────────────── */

function PanelContent() {
  return (
    <div className="space-y-4">
      <p>
        Solar panels — also called Photo Voltaic (PV) modules — are made of silicon doped
        with phosphorous. When photons (quanta of light) strike the silicon, they knock
        electrons loose, generating a direct current (DC). This current is then converted
        to usable AC power by an inverter.
      </p>

      <p className="font-semibold text-navy">Panel Technologies Compared</p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-slate-light">
              <th className="text-left px-3 py-2 font-semibold text-navy border border-border">
                Type
              </th>
              <th className="text-left px-3 py-2 font-semibold text-navy border border-border">
                Technology
              </th>
              <th className="text-left px-3 py-2 font-semibold text-navy border border-border">
                Efficiency
              </th>
              <th className="text-left px-3 py-2 font-semibold text-navy border border-border">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-border font-medium text-navy">
                Polycrystalline PERC
              </td>
              <td className="px-3 py-2 border border-border">
                Multi-crystalline silicon + rear reflective layer
              </td>
              <td className="px-3 py-2 border border-border text-center">15–18%</td>
              <td className="px-3 py-2 border border-border">
                Blue speckled appearance; cost-effective entry point
              </td>
            </tr>
            <tr className="bg-slate-light/50">
              <td className="px-3 py-2 border border-border font-medium text-navy">
                Mono PERC
              </td>
              <td className="px-3 py-2 border border-border">
                High-purity monocrystalline + specialized passivation layer
              </td>
              <td className="px-3 py-2 border border-border text-center">20–22%</td>
              <td className="px-3 py-2 border border-border">
                Reduces recombination loss; uniform black appearance
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-border font-medium text-navy">
                TOPCon
              </td>
              <td className="px-3 py-2 border border-border">
                Silicon oxide layer + doped polycrystalline silicon
              </td>
              <td className="px-3 py-2 border border-border text-center">~24%</td>
              <td className="px-3 py-2 border border-border">
                Efficient electron flow; reduced surface recombination loss
              </td>
            </tr>
            <tr className="bg-slate-light/50">
              <td className="px-3 py-2 border border-border font-medium text-navy">
                TOPCon Bifacial
              </td>
              <td className="px-3 py-2 border border-border">
                TOPCon + dual-sided light absorption
              </td>
              <td className="px-3 py-2 border border-border text-center">~26%</td>
              <td className="px-3 py-2 border border-border">
                Captures direct sunlight + albedo (reflected) light. Up to 20–30% more
                energy. Typical: 575–620 W, ~50 V Voc, ~12 A Imp, ~8 ft × 4 ft.
                Improved temperature coefficient.
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-border font-medium text-navy">
                HJT Bifacial
              </td>
              <td className="px-3 py-2 border border-border">
                Crystalline silicon + thin-film amorphous silicon
              </td>
              <td className="px-3 py-2 border border-border text-center">~27%</td>
              <td className="px-3 py-2 border border-border">
                Very low temperature coefficients; higher production cost. Ideal where
                roof space is limited and maximum output per sqm matters.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-light border-l-4 border-l-amber rounded p-3 mt-2">
        <p className="font-semibold text-navy text-xs mb-1">Band Gap &amp; Spectrum</p>
        <p className="text-xs">
          Solar panels absorb light in the 400 nm–1,100 nm range, with peak efficiency
          around 850 nm. Different panel technologies have different band gaps — a key
          reason why the right panel choice depends on your location&apos;s sunlight spectrum,
          temperature, and available roof area.
        </p>
      </div>
    </div>
  );
}

function MountingContent() {
  return (
    <div className="space-y-4">
      <p>
        Module Mounting Structures (MMS) — also called Solar Racking Systems — hold panels
        at the optimal tilt angle to maximize energy capture while withstanding wind, rain,
        and thermal expansion.
      </p>

      <p className="font-semibold text-navy">Materials &amp; Standards</p>
      <ul className="space-y-2">
        <li className="flex gap-2">
          <span className="text-amber font-bold shrink-0">•</span>
          <div>
            <span className="font-medium text-navy">Hot Dip Galvanized Iron (HDGI / GI)</span>
            {' — '}
            Preferred material for rooftop and ground-mounted systems. Coating thickness:
            120–150 microns (650 GSM). Steel grade: IS 2062:2011; galvanization: IS 4759.
          </div>
        </li>
        <li className="flex gap-2">
          <span className="text-amber font-bold shrink-0">•</span>
          <div>
            <span className="font-medium text-navy">Aluminium Alloy AA 6063 T6</span>
            {' — '}
            Lightweight and non-corrosive. Recommended for tin shed roofs, high-humidity
            environments, and coastal areas.
          </div>
        </li>
        <li className="flex gap-2">
          <span className="text-amber font-bold shrink-0">•</span>
          <div>
            <span className="font-medium text-navy">Stainless Steel SS 304</span>
            {' — '}
            Mandatory for all fasteners, nuts, and bolts throughout the structure.
          </div>
        </li>
        <li className="flex gap-2">
          <span className="text-amber font-bold shrink-0">•</span>
          <div>
            <span className="font-medium text-navy">Galvalume</span>
            {' — '}
            Used for top hat sections; provides enhanced corrosion resistance over standard
            galvanized steel.
          </div>
        </li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        <div className="bg-slate-light rounded-lg p-3">
          <p className="text-xs font-semibold text-navy mb-1">Wind Resistance</p>
          <p className="text-xs text-slate-text">
            150–180 km/h (as per MNRE India standards). Structures are engineered for
            severe weather conditions common to eastern India.
          </p>
        </div>
        <div className="bg-slate-light rounded-lg p-3">
          <p className="text-xs font-semibold text-navy mb-1">Optimal Tilt — Bihar &amp; Jharkhand</p>
          <p className="text-xs text-slate-text">
            Located near the Tropic of Cancer (23.5°). Ideal fixed-tilt: 20–25° facing
            true South. This maximizes annual energy yield for this latitude band.
          </p>
        </div>
      </div>
    </div>
  );
}

function InverterContent() {
  return (
    <div className="space-y-4">
      <p>
        Inverters convert the DC electricity produced by solar panels into AC electricity
        used by your appliances. Modern inverters also optimize panel output via{' '}
        <span className="font-medium text-navy">
          MPPT (Maximum Power Point Tracking)
        </span>{' '}
        and enable net metering with the grid.
      </p>

      <div className="space-y-3">
        <div className="border border-border rounded-lg p-3">
          <p className="font-semibold text-navy text-xs mb-1">
            String Inverters vs. Micro-Inverters
          </p>
          <p className="text-xs mb-2">
            <span className="font-medium">String inverters</span> connect panels in series
            (strings) to one central inverter. Cost-effective and well-suited for
            unshaded, simple roofs. Performance of the entire string can be limited by one
            underperforming panel.
          </p>
          <p className="text-xs">
            <span className="font-medium">Micro-inverters</span> are mounted on each
            individual panel, maximizing output independently. Ideal for complex rooflines
            or partial shading, but carry a higher upfront cost.
          </p>
        </div>

        <div className="border border-border rounded-lg p-3">
          <p className="font-semibold text-navy text-xs mb-2">On-Grid / Off-Grid / Hybrid</p>
          <div className="space-y-2 text-xs">
            <div className="flex gap-2">
              <span className="inline-block bg-amber text-navy font-bold rounded px-1.5 shrink-0">
                On-Grid
              </span>
              <span>
                Works only when the grid is live — shuts down automatically if the grid
                goes down (safety requirement). Reduces bills via net metering; no battery
                required; most economical.
              </span>
            </div>
            <div className="flex gap-2">
              <span className="inline-block bg-navy text-white font-bold rounded px-1.5 shrink-0">
                Off-Grid
              </span>
              <span>
                Operates independently of the grid. Essential for remote areas without
                grid connectivity. Requires battery storage to supply power at night.
              </span>
            </div>
            <div className="flex gap-2">
              <span className="inline-block bg-slate-text-dark text-white font-bold rounded px-1.5 shrink-0">
                Hybrid
              </span>
              <span>
                Combines grid connection with battery backup. Continues to power your home
                during grid outages. Best of both worlds — savings during normal operation,
                reliability during outages.
              </span>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-3">
          <p className="font-semibold text-navy text-xs mb-1">
            Transformer-Based vs. Semiconductor-Based
          </p>
          <p className="text-xs mb-2">
            <span className="font-medium">Transformer-based</span> inverters use magnetic
            induction to achieve galvanic isolation between DC and AC sides. They are
            heavier but provide high surge capacity — well-suited for motors, pumps, and
            heavy machinery.
          </p>
          <p className="text-xs">
            <span className="font-medium">Semiconductor-based</span> (using MOSFETs,
            IGBTs, or Silicon Carbide switches) are lighter, more compact, and
            operate at higher efficiency. They are the standard in modern residential and
            commercial solar systems, though less robust against sudden current surges.
          </p>
        </div>
      </div>
    </div>
  );
}

function WiringContent() {
  return (
    <div className="space-y-4">
      <p>
        Wiring is a frequently underestimated part of a solar system. Even the best panels
        and inverters will underperform if connected with inferior cables, connectors, or
        lugs. The goal is to minimize resistive losses while ensuring long-term durability
        in outdoor UV environments.
      </p>

      <ul className="space-y-2">
        <li className="flex gap-2">
          <span className="text-amber font-bold shrink-0">•</span>
          <span>
            <span className="font-medium text-navy">Cable specification:</span> UV-resistant,
            tinned copper conductor with XLPE insulation. Tinning prevents oxidation; XLPE
            withstands high temperatures and prolonged outdoor exposure.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-amber font-bold shrink-0">•</span>
          <span>
            <span className="font-medium text-navy">Voltage drop rule:</span> Longer cable
            runs require thicker cables. The total voltage drop from panels to inverter
            should stay under 3%. A 1 sq mm copper wire handles approximately 8–10 A under
            standard conditions.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-amber font-bold shrink-0">•</span>
          <span>
            <span className="font-medium text-navy">MC4 Connectors:</span> The industry
            standard for DC solar connections. Locking, weatherproof, and rated for outdoor
            use. Typically used with 4 sq mm DC cables.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-amber font-bold shrink-0">•</span>
          <span>
            <span className="font-medium text-navy">Lugs (Cable Shoes / Terminals):</span>{' '}
            Crimp-on fittings used to connect cables to inverter terminals, distribution
            boards, and batteries. Must match the cable conductor material (copper-to-copper,
            aluminium-to-aluminium) and be correctly sized — wrong lugs cause localized
            heating and significant energy loss.
          </span>
        </li>
      </ul>

      <div className="bg-amber-light border-l-4 border-l-amber rounded p-3">
        <p className="text-xs font-semibold text-navy mb-1">Quality Matters</p>
        <p className="text-xs">
          It is tempting to cut costs on wiring after spending on premium panels and
          inverters. Resist this temptation. Substandard DC cables, poorly-rated MC4
          connectors, or mismatched lugs create hot spots, arc faults, and cumulative
          efficiency losses that erode your returns year after year.
        </p>
      </div>
    </div>
  );
}

function BatteryContent() {
  return (
    <div className="space-y-4">
      <p>
        Batteries store energy generated during the day for use at night or during grid
        outages. The right battery depends on your budget, space, and how many hours of
        backup you need.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-border rounded-lg p-4">
          <p className="font-semibold text-navy text-sm mb-2">
            Lithium Iron Phosphate (LiFePO₄ / LFP)
          </p>
          <ul className="space-y-1 text-xs">
            <li className="flex gap-1.5">
              <span className="text-amber">✓</span>
              High round-trip efficiency (~95%)
            </li>
            <li className="flex gap-1.5">
              <span className="text-amber">✓</span>
              Long lifespan — ~6,000 charge cycles
            </li>
            <li className="flex gap-1.5">
              <span className="text-amber">✓</span>
              90% depth of discharge (DoD)
            </li>
            <li className="flex gap-1.5">
              <span className="text-amber">✓</span>
              Compact and lightweight
            </li>
            <li className="flex gap-1.5">
              <span className="text-amber">✓</span>
              BMS controls charge rate and temperature
            </li>
            <li className="flex gap-1.5">
              <span className="text-slate-text">→</span>
              Higher upfront cost
            </li>
          </ul>
        </div>

        <div className="border border-border rounded-lg p-4">
          <p className="font-semibold text-navy text-sm mb-2">Lead-Acid (VRLA / Flooded)</p>
          <ul className="space-y-1 text-xs">
            <li className="flex gap-1.5">
              <span className="text-amber">✓</span>
              Lower upfront cost
            </li>
            <li className="flex gap-1.5">
              <span className="text-amber">✓</span>
              More robust against accidental overcharging
            </li>
            <li className="flex gap-1.5">
              <span className="text-amber">✓</span>
              No BMS required
            </li>
            <li className="flex gap-1.5">
              <span className="text-slate-text">→</span>
              ~5-year lifespan (~3,000 cycles)
            </li>
            <li className="flex gap-1.5">
              <span className="text-slate-text">→</span>
              70% depth of discharge recommended
            </li>
            <li className="flex gap-1.5">
              <span className="text-slate-text">→</span>
              Heavier; requires ventilation
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-light rounded-lg p-3">
        <p className="text-xs font-semibold text-navy mb-1">Practical Example</p>
        <p className="text-xs text-slate-text">
          A fully-charged 150 Ah, 12 V battery (1.8 kWh usable at 100% DoD) can power
          10 LED bulbs at 14 W each for approximately 5–6 hours. For most backup
          scenarios — fans, lights, phone charging — a modest battery bank provides
          meaningful protection during outages.
        </p>
      </div>
    </div>
  );
}

function SafetyContent() {
  return (
    <div className="space-y-4">
      <p>
        Safety equipment is not optional — it protects lives, equipment, and the
        structural integrity of your building. A well-engineered solar installation
        includes three critical safety layers.
      </p>

      <div className="space-y-3">
        <div className="border-l-4 border-l-amber bg-amber-light/40 rounded-r-lg p-3">
          <p className="font-semibold text-navy text-xs mb-1">1. Earthing (Grounding)</p>
          <p className="text-xs">
            A copper or galvanized rod is driven at least 3 feet into the ground and
            connected to all metal parts of the solar structure and electrical equipment.
            Earthing compound is packed around the rod to maintain moisture and ensure
            low-resistance contact year-round. The earthing wire itself must be
            low-resistance copper — anything less creates a false sense of safety.
          </p>
        </div>

        <div className="border-l-4 border-l-amber bg-amber-light/40 rounded-r-lg p-3">
          <p className="font-semibold text-navy text-xs mb-1">2. Lightning Arrester</p>
          <p className="text-xs">
            A copper or copper-bonded metal rod installed at the highest point of the
            roof, connected via a thick conductor to the ground earthing system. It
            intercepts lightning and safely conducts the energy into the earth, protecting
            an area with a radius of 60+ metres. Critical for buildings in open, flat
            terrain — common across Bihar and Jharkhand.
          </p>
        </div>

        <div className="border-l-4 border-l-amber bg-amber-light/40 rounded-r-lg p-3">
          <p className="font-semibold text-navy text-xs mb-1">
            3. Fire Extinguishers &amp; Insulation Mat
          </p>
          <p className="text-xs">
            A CO₂ or ABC-type fire extinguisher should be mounted within reach of the
            inverter and main distribution panel. CO₂ extinguishers are safe for
            electrical fires (no conductive residue). An insulation/rubber mat in front
            of the inverter and distribution panel protects the operator during
            maintenance.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────── */

export default function WhySolarPage() {
  return (
    <div>
      {/* ── Section 1: Hero ───────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-4">
            The Case for Solar
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Why Go Solar?
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            How would you like to get Free Electricity in your home, your office or the
            place you conduct your business? Not for a day, not for a week or a month or
            a year, but for a period of, say, the next 25–30 years — or shall we say{' '}
            <span className="text-amber font-semibold">
              &ldquo;half a lifetime&rdquo;
            </span>
            . Sounds incredible, doesn&apos;t it!
          </p>
        </div>
      </section>

      {/* ── Section 2: The Financial Case ─────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-amber text-xs font-bold uppercase tracking-widest mb-3">
              Numbers That Matter
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              The Financial Case for Solar
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — cost breakdown */}
            <div>
              <p className="text-slate-text leading-relaxed mb-6">
                The average Indian household with a load of around{' '}
                <span className="font-semibold text-navy">5 KW</span> consumes
                roughly <span className="font-semibold text-navy">1,500–2,000 units</span>{' '}
                of electricity per month. At the current grid rate of{' '}
                <span className="font-semibold text-navy">₹8 per unit</span>, that works
                out to:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { label: 'Monthly bill', value: '₹12,000 – ₹16,000' },
                  { label: 'Annual cost', value: '~₹2 Lakh' },
                  { label: '30-year cost (flat)', value: '₹60 Lakh' },
                  { label: 'With compounding interest', value: '~₹1 Crore' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-border pb-2"
                  >
                    <span className="text-slate-text text-sm">{label}</span>
                    <span className="font-bold text-navy text-sm">{value}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-text text-sm leading-relaxed mb-6">
                What runs on all that electricity? Practically everything in a modern
                Indian household:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Light Bulbs',
                  'Fans',
                  'Coolers',
                  'Refrigerators',
                  'Air Conditioners',
                  'TVs',
                  'Mixer-Grinders',
                  'Induction Plates',
                  'Microwaves',
                  'Air Fryers',
                  'OTGs',
                  'ROs',
                  'Computers',
                  'Laptops',
                  'Mobile Phones',
                  'Inverters',
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-block bg-slate-light text-slate-text-dark text-xs font-medium px-2.5 py-1 rounded-full border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — callout card */}
            <div className="flex flex-col gap-6">
              <div className="bg-navy rounded-2xl p-8 text-center shadow-lg">
                <p className="text-white/60 text-sm uppercase tracking-widest mb-3">
                  Electricity spend over 30 years
                </p>
                <p className="text-3xl md:text-4xl font-extrabold text-amber mb-2">
                  ₹60 Lakh
                </p>
                <p className="text-white/50 text-sm mb-4">growing to</p>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                  ~₹1 Crore
                </p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white/70 text-sm leading-relaxed">
                    That&apos;s money you could use to buy another house, expand your
                    business, or simply save for the future.
                  </p>
                </div>
              </div>

              <div className="bg-amber-light border border-amber/30 rounded-xl p-5">
                <p className="text-navy font-semibold text-sm mb-2">
                  Solar — a one-time investment
                </p>
                <p className="text-slate-text-dark text-sm leading-relaxed">
                  A well-sized MNC Solar plant typically pays back its installation cost
                  within 4–6 years — and then generates free electricity for the next
                  20+ years. Panel warranties cover 25 years; most systems last longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Environmental Case ────────────────────────── */}
      <section className="py-20 px-4" style={{ background: '#f8fafc' }}>
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-amber text-xs font-bold uppercase tracking-widest mb-3">
              The Planet Matters Too
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              The Environmental Case
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — the problem */}
            <div className="space-y-5 text-slate-text leading-relaxed">
              <p>
                India generates{' '}
                <span className="font-semibold text-navy">74–75% of its electricity</span>{' '}
                from coal, with natural gas contributing another ~3%. When coal burns, it
                releases greenhouse gases — primarily CO₂ and Methane — into the
                atmosphere.
              </p>
              <p>
                These gases trap the sun&apos;s energy inside the atmosphere, steadily
                raising global temperatures. The effects are already visible:
              </p>
              <ul className="space-y-2">
                {[
                  'Summers growing increasingly warmer, year on year',
                  'Short, intense spells of heavy rainfall replacing steady monsoon patterns',
                  'Flash flooding in cities not designed for such concentrated downpours',
                  'Rise in heat-related illnesses and respiratory conditions like asthma',
                  'Spread of vector-borne diseases into new geographic zones',
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className="text-amber font-bold shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-navy mb-1">WHO Projection</p>
                <p className="text-xs text-slate-text">
                  The World Health Organization estimates{' '}
                  <span className="font-semibold text-navy">250,000 additional deaths per year</span>{' '}
                  by 2030–2050 attributable to climate-related causes: malnutrition,
                  malaria, diarrhoea, and heat stress.
                </p>
              </div>
              <p className="text-sm italic text-slate-text-dark border-l-4 border-amber pl-4">
                &ldquo;Is it not late enough that we realize this now and act upon it?&rdquo;
              </p>
            </div>

            {/* Right — the solution stats */}
            <div className="flex flex-col gap-6">
              <div className="bg-navy rounded-2xl p-8 text-center">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-4">
                  A 5 KW MNC Solar Plant Offsets
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-3xl md:text-4xl font-extrabold text-amber leading-none">
                      6,462
                    </p>
                    <p className="text-white/60 text-xs mt-1">kg of CO₂/year</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-extrabold text-amber leading-none">
                      252
                    </p>
                    <p className="text-white/60 text-xs mt-1">mature trees equivalent</p>
                  </div>
                </div>
                <p className="text-white/50 text-xs">
                  Calculated over the system&apos;s 25-year production life
                </p>
              </div>

              <div className="bg-white border border-border rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-navy text-sm mb-3">
                  Why Solar is a Direct Climate Action
                </p>
                <div className="space-y-2 text-xs text-slate-text">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber shrink-0" />
                    <span>Every unit of solar electricity replaces one unit of coal-powered electricity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber shrink-0" />
                    <span>No combustion — zero local air pollution, no particulates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber shrink-0" />
                    <span>Silent, with no water consumption or toxic by-products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber shrink-0" />
                    <span>200+ MNC Solar installations collectively save millions of kg of CO₂ annually</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Technical Deep Dive ────────────────────────────── */}
      <section className="bg-navy py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-3">
            Technical Reference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Should Know About Solar
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Click any topic below to expand a detailed explanation — from panel physics
            to safety equipment.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <Accordion title="1. Solar Panels (Photo Voltaic Modules)">
            <PanelContent />
          </Accordion>

          <Accordion title="2. Mounting Structures (MMS)">
            <MountingContent />
          </Accordion>

          <Accordion title="3. Inverters">
            <InverterContent />
          </Accordion>

          <Accordion title="4. Wiring & Connectors">
            <WiringContent />
          </Accordion>

          <Accordion title="5. Batteries">
            <BatteryContent />
          </Accordion>

          <Accordion title="6. Safety Equipment">
            <SafetyContent />
          </Accordion>
        </div>
      </section>

      {/* ── Section 5: CTA ────────────────────────────────────────────── */}
      <section
        style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
        className="py-16 px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-navy/75 text-base mb-8 leading-relaxed">
            The financial and environmental case is clear. Talk to our team — we&apos;ll
            design a system sized exactly for your load and roof.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-light transition-colors shadow-md"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/why-mnc-solar"
              className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-slate-light transition-colors shadow-md"
            >
              Why MNC Solar?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
