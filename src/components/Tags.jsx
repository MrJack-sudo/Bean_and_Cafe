function Tags({ tags }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex items-center text-xs bg-chip px-2.5 rounded-2xl font-sans text-ink-soft"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
