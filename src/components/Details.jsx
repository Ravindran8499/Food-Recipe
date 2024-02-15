import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import { useParams } from "react-router-dom";
import Ingredient from "./Ingredient";

const Details = () => {
  const { recipeDetails, setRecipeDetails } = useContext(GlobalContext);
  const { id } = useParams();
  // console.log(id);

  const fetchRecipeDetails = async () => {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const parsedDetailsData = await res.json();
    console.log("Details Data", parsedDetailsData);
    setRecipeDetails(parsedDetailsData.data);
  };
  console.log(recipeDetails);
  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  // h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg

  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex gap-8 p-3 flex-row items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="h-96 w-full rounded-xl object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={recipeDetails.recipe.image_url}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {recipeDetails.recipe.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ul className="flex flex-col gap-3">
              {recipeDetails.recipe.ingredients.map((ingredient, indx) => {
                return (
                  <Ingredient
                    key={indx}
                    quantity={ingredient.quantity ? ingredient.quantity : " "}
                    unit={ingredient.unit ? ingredient.unit : " "}
                    description={
                      ingredient.description ? ingredient.description : ""
                    }
                  />
                );
              })}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
