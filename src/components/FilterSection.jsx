import { useState } from "react";
import CurrencyToggle from "./CurrencyToggle";
import SearchInput from "./SearchInput";
import SoldOutCheck from "./SoldOutCheck";
import CategoryChips from "./CategoryChips";

function FilterSection({ categories, currencies, onActiveCurrencyId, onCurrencySelect }) {
  const categoryOptions = [{ id: "all", name: "All" }, ...categories];
  const [activeChip, setActiveChip] = useState("all");

  // Find the current currency object based on the active ID
  const activeCurrencyObj = currencies.find((c) => c.id === onActiveCurrencyId);
  const activeSymbol = activeCurrencyObj ? activeCurrencyObj.symbol : currencies[0].symbol;

  return (
    <section className="max-w-6xl mx-auto px-4 mb-8">
      <div className="bg-surface rounded-3xl p-4 md:p-6 shadow-sm border border-line flex flex-wrap items-center justify-between gap-6">
        <SearchInput label="Search" placeholder="Latte, tea, sandwich..." />
        <CategoryChips
          label="Category"
          categories={categoryOptions}
          activeId={activeChip}
          onSelect={setActiveChip}
        />
        <CurrencyToggle
          label="Currency"
          currencies={currencies}
          activeSymbol={activeSymbol}
          onSelect={(symbol) => {
            // Find the currency ID that matches the selected symbol and pass its ID up to App
            const selectedCurrency = currencies.find((c) => c.symbol === symbol);
            if (selectedCurrency) {
              onCurrencySelect(selectedCurrency.id);
            }
          }}
        />
        <SoldOutCheck currencies={currencies} />
      </div>
    </section>
  );
}

export default FilterSection;
