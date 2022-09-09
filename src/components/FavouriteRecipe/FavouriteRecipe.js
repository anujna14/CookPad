import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import RecipeItems from "../Recipes/RecipeItems";
import "./FavouriteRecipe.css";
import Modal from "../UI/Modal";

const FavouriteRecipe = () => {
  const favouriteCtx = useSelector((state) => state);
  const [isModalOpen, setisModalOpen] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (favouriteCtx.favourites.length === 0) {
      setisModalOpen(true);
    }
  }, [favouriteCtx.favourites]);

  const handleOnClose = () => {
    setisModalOpen(false);
    history.push("/");
  };
  return (
    <div>
      {!isModalOpen ? (
        <>
          <div className="title">
            <h1>Favourite Recipes</h1>
          </div>
          <div className="favourite-recipes-container">
            {favouriteCtx.favourites.map((recipe) => (
              <RecipeItems key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </>
      ) : (
        <>
          <Modal onConfirm={handleOnClose} title="No Favourites Found!" message="Would you like to add some favourites?" />
        </>
      )}
    </div>
  );
};

export default FavouriteRecipe;
