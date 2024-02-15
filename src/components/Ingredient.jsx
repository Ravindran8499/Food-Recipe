const Ingredient = ({ quantity, unit, description }) => {
  return (
    <li className="flex flex-row justify-start gap-3">
      <p className=" text-stone-700 hover:text-gray-900">
        <strong>{quantity}</strong>
      </p>
      <span>{unit}</span>
      <span>{description}</span>
    </li>
  );
};

export default Ingredient;
