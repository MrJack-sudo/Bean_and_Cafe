import { shop, categories, specialItemIds, currencies } from "./data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Section from "./components/Section";
import FilterSection from "./components/FilterSection";
import { useState } from "react";

function App() {
  const [currencyId, setCurrencyId] = useState(currencies[0].id);
  const activeCurrency = currencies.find((c) => c.id === currencyId) || currencies[0];
  const currencySymbol = activeCurrency.symbol;

  const totalItems = categories.flatMap((category) => category.items);
  const specialItems = totalItems.filter((item) => specialItemIds.includes(item.id));

  const EXCHANGE_RATE = 4100;

  const formatPrice = (priceInUSD) => {
    if (currencySymbol === "៛") {
      const converted = Math.round(priceInUSD * EXCHANGE_RATE);
      return `${currencySymbol}${converted.toLocaleString()}`;
    }
    return `${currencySymbol}${priceInUSD.toFixed(2)}`;
  };

  return (
    <>
      <Header shop={shop} />
      <main className="bg-page py-8">
        <FilterSection
          categories={categories}
          currencies={currencies}
          onActiveCurrencyId={currencyId}
          onCurrencySelect={setCurrencyId}
        />

        {/* Special Cards */}
        <Section specialItems={specialItems} currency={currencySymbol} formatPrice={formatPrice} />

        <Menu categories={categories} currency={currencySymbol} formatPrice={formatPrice} />
      </main>
      <Footer shop={shop} totalItems={totalItems} />
    </>
  );
}

export default App;
