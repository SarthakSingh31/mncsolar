interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border border-t-3 border-t-amber pt-5 pb-6 px-6">
      <p className="text-4xl font-bold text-navy leading-none">{value}</p>
      <p className="mt-2 text-sm text-slate-text">{label}</p>
    </div>
  );
}
