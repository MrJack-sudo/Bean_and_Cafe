import Chip from "./Chip";

function CategoryChips({ label, categories, activeId, onSelect }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-ink-soft">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {categories.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            isActive={category.id === activeId}
            onClick={() => onSelect(category.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryChips;
