import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./PopularRecipe.css";
import LoadingIndicator from "../UI/LoadingIndicator";
import RecipeItems from "./RecipeItems";
import "./PopularRecipe.css";
import { toast } from "react-toastify";

const PopularRecipe = () => {
  const [popularRecipes, setpopularRecipes] = useState([]);
  const getPopularRecipes = async () => {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`;
    await Axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setpopularRecipes(res.data?.recipes);
      })
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
  };
  useEffect(() => {
    getPopularRecipes();
  }, []);

  if (popularRecipes.length === 0) {
    return (
      <div className="loading-container">
        <LoadingIndicator />
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="title">
        <h1>Popular Recipes</h1>
      </div>
      <div className="popular-recipe-container">
        {popularRecipes.map((recipe) => (
          <RecipeItems key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default PopularRecipe;
