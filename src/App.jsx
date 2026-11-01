import { shop, categories, specialItemIds, currency } from "./data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Section from "./components/Section";

const totalItems = categories.flatMap((category) => category.items);

// use this when specialItemId = 'c4'
// const specialItems = totalItems.find((item) => item.id === specialItemId);

const specialItems = totalItems.filter((item) => specialItemIds.includes(item.id));

function App() {
  return (
    <>
      <Header shop={shop} />
      <main className="bg-page py-8">
        {/* specialCards  */}
        <Section specialItems={specialItems} currency={currency} />

        <Menu categories={categories} currency={currency} />
      </main>
      <Footer shop={shop} totalItems={totalItems} />
    </>
  );
}

export default App;
