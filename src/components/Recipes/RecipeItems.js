import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import "./RecipeItems.css";
import { useSelector, useDispatch } from "react-redux";
import PropTypes  from 'prop-types';


const RecipeItems = ({ recipe }) => {
  const ctxItms = useSelector((state) => state);
  const dispatch = useDispatch();

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
RecipeItems.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageType: PropTypes.oneOf(["jpg", "png"]).isRequired,
  }).isRequired,
};
