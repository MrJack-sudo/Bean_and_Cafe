import CurrencyToggle from "./CurrencyToggle";
import SearchInput from "./SearchInput";
import SoldOutCheck from "./SoldOutCheck";
import CategoryChips from "./CategoryChips";

function FilterSection({
  categories,
  currencies,
  onActiveCurrencyId,
  onCurrencySelect,
  activeCategory,
  onCategorySelect,
  showSoldOut,
  onShowSoldOutChange,
  searchQuery,
  onSearchChange,
}) {
  const categoryOptions = [{ id: "all", name: "All" }, ...categories];

  const activeCurrencyObj = currencies.find((c) => c.id === onActiveCurrencyId);
  const activeSymbol = activeCurrencyObj ? activeCurrencyObj.symbol : currencies[0].symbol;

  return (
    <section className="max-w-6xl mx-auto px-4 mb-8">
      <div className="bg-surface rounded-3xl p-4 md:p-6 shadow-sm border border-line flex flex-wrap items-center justify-between gap-6">
        <SearchInput
          label="Search"
          placeholder="Latte, tea, sandwich..."
          value={searchQuery}
          onChange={onSearchChange}
        />

        <CategoryChips
          label="Category"
          categories={categoryOptions}
          activeId={activeCategory}
          onSelect={onCategorySelect}
        />

        <CurrencyToggle
          label="Currency"
          currencies={currencies}
          activeSymbol={activeSymbol}
          onSelect={(symbol) => {
            const selectedCurrency = currencies.find((c) => c.symbol === symbol);
            if (selectedCurrency) {
              onCurrencySelect(selectedCurrency.id);
            }
          }}
        />

        <SoldOutCheck checked={showSoldOut} onChange={onShowSoldOutChange} />
      </div>
    </section>
  );
}

export default FilterSection;
