import { shop, categories, specialItemIds, currencies } from "./data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Section from "./components/Section";
import FilterSection from "./components/FilterSection";
import { useState } from "react";

function App() {
  const totalItems = categories.flatMap((category) => category.items);
  const specialItems = totalItems.filter((item) => specialItemIds.includes(item.id));

  const [currencyId, setCurrencyId] = useState(currencies[0].id);
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [showOnlySoldOut, setShowOnlySoldOut] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const activeCurrency = currencies.find((c) => c.id === currencyId) || currencies[0];
  const currencySymbol = activeCurrency.symbol;

  const EXCHANGE_RATE = 4100;

  const formatPrice = (priceInUSD) => {
    if (currencySymbol === "៛") {
      const converted = Math.round(priceInUSD * EXCHANGE_RATE);
      return `${currencySymbol}${converted.toLocaleString()}`;
    }
    return `${currencySymbol}${priceInUSD.toFixed(2)}`;
  };

  // Filter categories based on category selection
  const filteredCategories =
    selectedCategoryId === "all"
      ? categories
      : categories.filter((cat) => cat.id === selectedCategoryId);

  return (
    <>
      <Header shop={shop} />
      <main className="bg-page py-8">
        <FilterSection
          categories={categories}
          currencies={currencies}
          onActiveCurrencyId={currencyId}
          onCurrencySelect={setCurrencyId}
          activeCategory={selectedCategoryId}
          onCategorySelect={setSelectedCategoryId}
          showSoldOut={showOnlySoldOut}
          onShowSoldOutChange={setShowOnlySoldOut}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Special Cards */}
        <Section specialItems={specialItems} currency={currencySymbol} formatPrice={formatPrice} />

        <Menu
          categories={filteredCategories}
          currency={currencySymbol}
          formatPrice={formatPrice}
          showSoldOut={showOnlySoldOut}
          searchQuery={searchQuery}
        />
      </main>
      <Footer shop={shop} totalItems={totalItems} />
    </>
  );
}

export default App;
