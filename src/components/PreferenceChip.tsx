interface Props {
  label: string;
  active: boolean;
  onToggle: () => void;
}

export function PreferenceChip({ label, active, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
        active
          ? 'bg-gray-900 text-white border-gray-900'
          : 'bg-white text-gray-400 border-gray-200 line-through decoration-gray-300'
      }`}
    >
      {active && <span className="text-xs leading-none">✓</span>}
      {label}
    </button>
  );
}
