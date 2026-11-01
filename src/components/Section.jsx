import SpecialCard from "./SpecialCard";

function Section({ specialItems, currency }) {
  return (
    <div>
      {specialItems.flatMap((item) => (
        <SpecialCard
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          tags={item.tags}
          currency={currency}
        />
      ))}
    </div>
  );
}

export default Section;
