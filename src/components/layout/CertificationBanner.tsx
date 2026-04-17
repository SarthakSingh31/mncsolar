import { Shield, Award } from "lucide-react";

export default function CertificationBanner() {
  return (
    <div className="bg-navy-light border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 py-2 text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 text-amber font-semibold tracking-wide">
            <Shield className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
            PMSG GOVT OF BIHAR APPROVED VENDOR
          </span>
          <span className="hidden sm:block text-slate-600">|</span>
          <span className="flex items-center gap-1.5 text-amber font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
            ISO 9001:2015 CERTIFIED COMPANY
          </span>
        </div>
      </div>
    </div>
  );
}
