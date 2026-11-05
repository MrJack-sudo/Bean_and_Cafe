function CurrencyToggle({ currencies, label, activeSymbol, onSelect }) {
  return (
    <div>
      <span className="block text-xs font-semibold text-ink-soft mb-2">{label}</span>
      <div className="flex items-center bg-gray-100 p-1 rounded-2xl border border-gray-200">
        {currencies.map((currency) => {
          const isActive = currency.symbol === activeSymbol;
          return (
            <button
              key={currency.symbol}
              type="button"
              onClick={() => onSelect && onSelect(currency.symbol)}
              className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-colors duration-200${
                isActive ? "bg-white text-brand shadow-sm" : "text-muted hover:text-ink-soft"
              }`}
            >
              {currency.symbol}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CurrencyToggle;
