import { Zap, Battery, RefreshCw, Building2, Check, LucideIcon } from "lucide-react";
import { ServiceItem } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Battery,
  RefreshCw,
  Building2,
};

interface ServiceCardProps extends ServiceItem {}

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  capacity,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Zap;

  return (
    <div className="flex flex-col bg-slate-light rounded-2xl border border-border p-6 gap-4">
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-light text-amber">
        <Icon size={24} strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-navy leading-snug">{title}</h3>

      {/* Description */}
      <p className="text-sm text-slate-text leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="flex flex-col gap-2 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-text-dark">
            <Check size={15} className="mt-0.5 shrink-0 text-amber" strokeWidth={2.5} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Capacity badge */}
      <div className="mt-2">
        <span className="inline-block rounded-full bg-amber-light text-amber-dark text-xs font-semibold px-3 py-1">
          {capacity}
        </span>
      </div>
    </div>
  );
}
