export default function VehicleModelBadges({ label, models }) {
  if (!models?.length) return null;

  return (
    <div>
      {label && <p className="font-semibold text-slate-900">{label}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {models.map((model) => (
          <span
            key={model}
            className="rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
          >
            {model}
          </span>
        ))}
      </div>
    </div>
  );
}
