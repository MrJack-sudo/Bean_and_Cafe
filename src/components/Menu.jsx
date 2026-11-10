import Category from "./Category";

function Menu({ categories, currency, formatPrice, showSoldOut, searchQuery }) {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-8">
      {categories.map((category) => (
        <Category
          key={category.id}
          items={category.items}
          name={category.name}
          currency={currency}
          formatPrice={formatPrice}
          showSoldOut={showSoldOut}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
}

export default Menu;
