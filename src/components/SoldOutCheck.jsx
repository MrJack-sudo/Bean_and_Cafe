function SoldOutCheck({ checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer text-sm font-medium text-ink select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded border-line text-brand accent-brand focus:ring-0 cursor-pointer"
      />
      <span>Show sold out</span>
    </label>
  );
}

export default SoldOutCheck;
