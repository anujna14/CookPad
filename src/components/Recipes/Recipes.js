import React, { useState, useContext, useEffect, useCallback } from "react";
import RecipeItems from "./RecipeItems";
import "./Recipes.css";
import { SearchContext } from "../../store/SearchContext/SearchContext";
import Axios from "axios";
import LoadingIndicator from "../UI/LoadingIndicator";
import { toast } from "react-toastify";

const Recipes = () => {
  const { searchValue } = useContext(SearchContext);

  const [recipes, setRecipes] = useState([]);

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchValue}&number=10`;

  const getRecipes = useCallback(async () => {
    await Axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => setRecipes(res.data?.results))
      .catch((err) =>
        toast.error(`${err.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  }, [url]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  if (recipes.length === 0) {
    return (
      <div className="loading-container">
        <LoadingIndicator />
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <RecipeItems key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Recipes;
