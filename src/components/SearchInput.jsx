import { Search } from "lucide-react";

export default function SearchInput({ label = "Search", placeholder = "Latte, tea, sandwich..." }) {
  return (
    <div className="flex-1 min-w-60">
      <label htmlFor="search" className="block text-xs font-semibold text-muted mb-2">
        {label}
      </label>
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-ink-soft absolute left-4 pointer-events-none" />
        <input
          id="search"
          type="text"
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 bg-surface border border-line rounded-full text-sm text-ink placeholder-body focus:outline-none focus:ring-2 focus:ring-ink/5"
        />
      </div>
    </div>
  );
}
