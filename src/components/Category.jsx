import MenuItems from "./MenuItems";

function Category({ items, name, currency }) {
  return (
    <section className="mx-20">
      <div className="flex items-baseline gap-2 py-5 border-b-2 border-ink ">
        <h2 className="font-display text-3xl font-bold text-ink">{name}</h2>
        <span className="text-xs text-muted">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="grid gap-4 grid-cols-3 py-4">
        {items.map((item) => (
          <MenuItems
            key={item.id}
            name={item.name}
            price={item.price}
            tags={item.tags}
            description={item.description}
            image={item.image}
            isSoldOut={item.isSoldOut}
            currency={currency}
          />
        ))}
      </div>
    </section>
  );
}

export default Category;
