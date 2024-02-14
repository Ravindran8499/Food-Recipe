import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}&key=0945168f-80e2-43af-934e-e0d50958b7c3`
      );
      const parsedData = await res.json();

      // console.log("Parsed data", parsedData.data.recipes);

      setRecipeList(parsedData.data.recipes);
      setLoading(false);
      setSearchParams("");
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParams("");
    }
  };
  // console.log("Recipe list", recipeList);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
