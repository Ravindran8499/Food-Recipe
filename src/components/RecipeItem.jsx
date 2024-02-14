import { Link } from "react-router-dom";
import RecipeItemImage from "./RecipeItemImage";

const RecipeItem = ({ id, image_url, publisher, title }) => {
  // console.log(id);
  return (
    <div className="flex max-w-80 flex-col gap-2 rounded-lg border border-gray-300 bg-white p-1 shadow transition-all duration-1000 hover:scale-105 dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
      <RecipeItemImage image_url={image_url} alt={title} />
      {/* <img
        className="rounded-lg"
        src="http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg"
        alt=""
      /> */}

      <div className="p-5">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h4>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {publisher}
        </p>
        <Link
          to={`/recipe-item/${id}`}
          className="inline-flex items-center rounded-lg bg-gray-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-stone-950 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <button> More Details... </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
