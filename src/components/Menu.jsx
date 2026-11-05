import Category from "./Category";

function Menu({ categories, currency, formatPrice }) {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-8">
      {categories.map((category) => (
        <Category
          key={category.id}
          items={category.items}
          name={category.name}
          currency={currency}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  );
}

export default Menu;
