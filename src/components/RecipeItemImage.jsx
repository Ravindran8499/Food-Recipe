const RecipeItemImage = ({ image_url, title }) => {
  return (
    <img
      className="rounded-xl object-fill block w-full h-full"
      src={image_url}
      alt={title}
    />
  );
};

export default RecipeItemImage;
