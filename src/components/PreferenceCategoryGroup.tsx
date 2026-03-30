import { PreferenceChip } from './PreferenceChip';

interface Props {
  label: string;
  emoji: string;
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}

export function PreferenceCategoryGroup({ label, emoji, options, selected, onChange }: Props) {
  const allSelected = selected.length === options.length;

  function toggle(value: string) {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  }

  function toggleAll() {
    if (allSelected) {
      onChange([]);
    } else {
      onChange([...options]);
    }
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900 text-base">
          {emoji} {label}
        </h3>
        <button
          onClick={toggleAll}
          className="text-xs text-gray-500 underline underline-offset-2"
        >
          {allSelected ? 'Deselect all' : 'Select all'}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <PreferenceChip
            key={opt}
            label={opt}
            active={selected.includes(opt)}
            onToggle={() => toggle(opt)}
          />
        ))}
      </div>
    </div>
  );
}
