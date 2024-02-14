const RecipeItemImage = ({ image_url, title }) => {
  return (
    <img
      className="rounded-xl object-cover block w-full"
      src={image_url}
      alt={title}
    />
  );
};

export default RecipeItemImage;
