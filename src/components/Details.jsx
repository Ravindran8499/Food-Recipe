import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import { Link, useParams } from "react-router-dom";
import Ingredient from "./Ingredient";

const Details = () => {
  const { recipeDetails, setRecipeDetails, ingredients, setIngredients } =
    useContext(GlobalContext);

  const { id } = useParams();

  // console.log(id);

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

  // h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg
  // console.log(recipeDetails);
  return (
    // <div className="flex justify-center">
    //   <div className="w-2/3 flex gap-8 p-3 flex-row items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    //     <img
    //       className="h-96 w-full rounded-3xl object-cover md:h-auto md:w-48 md:rounded-lg"
    //       src={recipeDetails?.recipe?.image_url}
    //     />

    //     <div className="flex flex-col justify-between p-4 leading-normal">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //         {recipeDetails?.recipe?.title}
    //       </h5>

    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         <ul className="flex flex-col gap-3">
    //           {ingredients.map((ingredient, indx) => {
    //             return (
    //               <Ingredient
    //                 key={indx}
    //                 quantity={ingredient.quantity ? ingredient.quantity : " "}
    //                 unit={ingredient.unit ? ingredient.unit : " "}
    //                 description={
    //                   ingredient.description ? ingredient.description : ""
    //                 }
    //               />
    //             );
    //           })}
    //         </ul>
    //       </p>

    //       <button className="h-9 text-white bg-stone-700 hover:bg-stone-900 rounded-lg">
    //         Add To favourites..
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
          <h4>Servings : {recipeDetails?.recipe?.servings}</h4>
          <h4>
            Cooking Time: {recipeDetails?.recipe?.cooking_time} {" mins "}
          </h4>
        </div>

        <div className="inline-block">
          <button
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
        </div>
        <div className="inline-block">
          <Link to={recipeDetails.recipe.source_url} target="_blank">
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
