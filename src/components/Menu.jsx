import Category from "./Category";

function Menu({ categories, currency }) {
  return (
    <div>
      {categories.map((category) => (
        <Category
          key={category.id}
          items={category.items}
          name={category.name}
          currency={currency}
        />
      ))}
    </div>
  );
}

export default Menu;
