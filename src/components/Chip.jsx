function Chip({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      className={`h-9  rounded-full border px-3.5 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "border-ink bg-ink text-white"
          : "border-line bg-surface text-ink-soft hover:border-ink-soft"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Chip;
