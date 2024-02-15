import { useCallback, useContext } from "react";
import RecipeItem from "./RecipeItem";
import { GlobalContext } from "../context/context";
import NothingToShow from "./NothingToShow";
import Loading from "./Loading";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);
  if (loading) return <Loading />;
  return (
    <div className="grid grid-cols-4 gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((recipeItem) => {
          return (
            <RecipeItem
              key={recipeItem.id}
              title={recipeItem.title ? recipeItem.title : "Unknown Title"}
              id={recipeItem.id ? recipeItem.id : ""}
              image_url={
                recipeItem.image_url
                  ? recipeItem.image_url
                  : "https://plus.unsplash.com/premium_photo-1666974267940-71b8e3c497bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVtcHR5JTIwZGlzaHxlbnwwfHwwfHx8MA%3D%3D"
              }
              publisher={
                recipeItem.publisher ? recipeItem.publisher : "Unknown"
              }
            />
          );
        })
      ) : (
        <NothingToShow text="Please Enter Something in the Search bar" />
      )}
    </div>
  );
};

export default Home;
