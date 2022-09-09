import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import "./RecipeItems.css";
import { useSelector, useDispatch } from "react-redux";

const RecipeItems = ({ recipe }) => {
  const ctxItms = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("ctxItms", ctxItms.favourites.length)
  let isItemFav = ctxItms.favourites.some((fav) => fav.id === recipe.id);

  const handleAddToFav = (recipe) => {
    dispatch({ type: "ADD_FAV", payload: recipe });
  };
  const handleRemoveFav = (id) => {
    dispatch({ type: "REMOVE_FAV", id: id });
  };
  return (
    <Card>
      <div className="recipe-image">
        <img src={recipe.image} alt="recipe-img" />
      </div>
      <div className="title-content">
        <p>{recipe.title}</p>
      </div>
      <div className="actions">
        <Link to={`/recipes/${recipe.id}`}>
          <button type="button">View Details</button>
        </Link>
        {!isItemFav ? (
          <button type="button" onClick={() => handleAddToFav(recipe)}>
            Add Favourite
          </button>
        ) : (
          <button type="button" onClick={() => handleRemoveFav(recipe.id)}>
            Remove Favourite
          </button>
        )}
      </div>
    </Card>
  );
};

export default RecipeItems;