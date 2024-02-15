import { useCallback, useContext } from "react";
import { GlobalContext } from "../context/context";
import RecipeItem from "../components/RecipeItem";
import NothingToShow from "./NothingToShow";

const Favourites = () => {
  const { favouriteList } = useContext(GlobalContext);
  return (
    <div className="grid grid-cols-4 gap-10 auto-cols-max">
      {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map((recipeItem) => {
          return (
            <div className="flex flex-col" key={recipeItem.id}>
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
                fromFav={true}
              />
            </div>
          );
        })
      ) : (
        <NothingToShow text={"Your Favourite List Item is Empty...!!"} />
      )}
    </div>
  );
};

export default Favourites;
