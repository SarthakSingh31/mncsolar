import Link from "next/link";
import { Sun, Phone, Mail, MapPin } from "lucide-react";
import {
  NAV_ITEMS,
  CONTACT_INFO,
  COMPANY_NAME,
  COMPANY_SHORT,
  SERVICE_AREAS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Sun className="h-6 w-6 text-amber-400" />
              <span className="text-white font-bold text-lg">{COMPANY_SHORT}</span>
            </Link>
            <p className="text-amber-400 text-sm font-medium mb-3">
              Powering Jharkhand &amp; Bihar with clean solar energy
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trusted solar installation partner serving residential, commercial,
              and institutional clients across Jharkhand and Bihar since 2019.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-amber-400" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-amber-400" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-amber-400" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-slate-400 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-slate-500 text-sm text-center">
            &copy; 2024 {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
