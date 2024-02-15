import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [favouriteList, setFavouriteList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}&key=0945168f-80e2-43af-934e-e0d50958b7c3`
      );
      setLoading(true);
      const parsedData = await res.json();

      setRecipeList(parsedData.data.recipes);
      setSearchParams("");
      setLoading(false);
      navigate("/");
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParams("");
    }
  };

  console.log("Recipe list from context", recipeList);
  const handleAddFavouriteRecipeItem = (currentRecipeItem) => {
    const newList = [...favouriteList];
    const index = newList.findIndex((item) => item.id === currentRecipeItem.id);
    if (index === -1) {
      newList.push(currentRecipeItem);
    }
    setFavouriteList(newList);
  };

  console.log("From context  before Deletion Favourite list", favouriteList);

  const handleDeleteFavoutiteRecipeItem = (id) => {
    console.log(" From delete item function", id);
    setFavouriteList((prevItems) => {
      return prevItems.filter((items, indx) => {
        return items.id !== id;
      });
    });
  };
  console.log(
    "from context after deletion from favurite list: ",
    favouriteList
  );
  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleSubmit,
        loading,
        recipeList,
        recipeDetails,
        setRecipeDetails,
        ingredients,
        setIngredients,
        handleAddFavouriteRecipeItem,
        favouriteList,
        handleDeleteFavoutiteRecipeItem,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
