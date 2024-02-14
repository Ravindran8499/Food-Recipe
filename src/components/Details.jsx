import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import { useParams } from "react-router-dom";

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
  return <div>Details Page</div>;
};

export default Details;
