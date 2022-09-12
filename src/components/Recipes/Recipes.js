import React, { useState, useContext, useEffect, useCallback } from "react";
import RecipeItems from "./RecipeItems";
import "./Recipes.css";
import { SearchContext } from "../../store/SearchContext/SearchContext";
import Axios from "axios";
import LoadingIndicator from "../UI/LoadingIndicator";
import { toast } from "react-toastify";

const Recipes = () => {
  const { searchValue } = useContext(SearchContext);
  const [next, setnext] = useState(6);

  const [recipes, setRecipes] = useState([]);

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchValue}&number=20`;

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

  const handleLoadMore = () => {
    setnext((prevVal) => prevVal + 3);
  };

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
        {recipes.slice(0, next).map((recipe) => (
          <RecipeItems key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <div className="btn-load-more">
        {next < recipes.length ? <button onClick={handleLoadMore}>Load More</button> : <button onClick={() => setnext(6)}>Show Less</button>}
      </div>
    </React.Fragment>
  );
};

export default Recipes;
