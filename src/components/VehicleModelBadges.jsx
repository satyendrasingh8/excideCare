export default function VehicleModelBadges({ label, models }) {
  if (!models?.length) return null;

  return (
    <div>
      {label && <p className="font-semibold text-neutral-900">{label}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {models.map((model) => (
          <span
            key={model}
            className="rounded-full bg-neutral-100 border border-neutral-200 px-3.5 py-1.5 text-sm text-neutral-700"
          >
            {model}
          </span>
        ))}
      </div>
    </div>
  );
}
