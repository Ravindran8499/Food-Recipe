import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import { Link, useParams } from "react-router-dom";
import Ingredient from "./Ingredient";

const Details = () => {
  const {
    recipeDetails,
    setRecipeDetails,
    ingredients,
    setIngredients,
    handleAddFavouriteRecipeItem,
  } = useContext(GlobalContext);

  const { id } = useParams();

  const fetchRecipeDetails = async () => {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const parsedDetailsData = await res.json();

    setRecipeDetails(parsedDetailsData?.data);
    setIngredients(parsedDetailsData?.data?.recipe?.ingredients);
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [id]);

  return (
    <div className="container mx-auto relative flex w-full max-w-[60rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img
          src={recipeDetails?.recipe?.image_url}
          alt="card-image"
          className="h-full w-full object-cover hover:scale-105 duration-1000"
        />
      </div>

      <div className="p-6">
        <h1 className="mb-4 block font-sans text-2xl font-extrabold uppercase leading-relaxed tracking-normal text-gray-700 antialiased">
          {recipeDetails?.recipe?.title}
        </h1>
        <span>
          <p className="mb-4 font-bold uppercase leading-relaxed tracking-normal text-gray-700 antialiased">
            {recipeDetails?.recipe?.publisher}
          </p>
        </span>

        <h6 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
          INGREDIENTS
        </h6>

        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          {ingredients.map((ingredient, indx) => {
            return (
              <Ingredient
                key={indx}
                quantity={ingredient.quantity}
                unit={ingredient.unit}
                description={ingredient.description}
              />
            );
          })}
        </p>

        <div className="mb-3">
          <h4 className="font-semibold">
            Servings : {recipeDetails?.recipe?.servings}
          </h4>
          <h4 className="font-semibold">
            Cooking Time: {recipeDetails?.recipe?.cooking_time} {" mins "}
          </h4>
        </div>

        <div className="inline-block">
          <Link to={"/favourites"}>
            <button
              onClick={() => {
                handleAddFavouriteRecipeItem(recipeDetails?.recipe);
              }}
              className="flex select-none items-center gap-2 rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add To Favourites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className="inline-block">
          <Link to={recipeDetails?.recipe?.source_url} target="_blank">
            <button
              className="flex select-none items-center gap-2 rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
