import { useCallback, useContext } from "react";
import RecipeItem from "./RecipeItem";
import { GlobalContext } from "../context/context";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  return (
    <div className="grid grid-cols-4 gap-10 auto-cols-max">
      {recipeList.map((recipeItem) => {
        return (
          <div className="">
            <RecipeItem
              key={recipeItem.id}
              title={recipeItem.title ? recipeItem.title : "Unknown Title"}
              id={recipeItem.id ? recipeItem.id : ""}
              image_url={
                recipeItem.image_url
                  ? recipeItem.image_url
                  : "https://cdn.vectorstock.com/i/1000x1000/58/11/blank-plate-fork-and-knife-on-old-wooden-table-vector-1985811.webp"
              }
              publisher={
                recipeItem.publisher ? recipeItem.publisher : "Unknown"
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
