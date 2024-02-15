const Ingredient = ({ quantity, unit, description }) => {
  return (
    <li className="flex  justify-start">
      <p className="gap-3 text-stone-700 hover:text-gray-900">
        <strong>{quantity}</strong> {unit} {description}
      </p>
    </li>
  );
};

export default Ingredient;
