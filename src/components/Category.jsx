import MenuItems from "./MenuItems";

function Category({ items, name, currency, formatPrice, showSoldOut, searchQuery }) {
  // 1. Filter ONLY by item name
  const searchFilteredItems = items.filter((item) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return item.name.toLowerCase().includes(query);
  });

  // 2. Filter by sold out condition
  const visibleItems = showSoldOut
    ? searchFilteredItems.filter((item) => item.isSoldOut)
    : searchFilteredItems;

  if (visibleItems.length === 0) return null;

  return (
    <section>
      <div className="flex items-baseline gap-2 py-5 border-b-2 border-ink">
        <h2 className="font-display text-3xl font-bold text-ink">{name}</h2>
        <span className="text-xs text-muted">
          {visibleItems.length} {visibleItems.length === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 py-4">
        {visibleItems.map((item) => (
          <MenuItems
            key={item.id}
            name={item.name}
            price={item.price}
            tags={item.tags}
            description={item.description}
            image={item.image}
            isSoldOut={item.isSoldOut}
            currency={currency}
            formatPrice={formatPrice}
          />
        ))}
      </div>
    </section>
  );
}

export default Category;
