import SpecialCard from "./SpecialCard";

function Section({ specialItems, currency, formatPrice }) {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-8 space-y-4">
      {specialItems.map((item) => (
        <SpecialCard
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          tags={item.tags}
          currency={currency}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  );
}

export default Section;
