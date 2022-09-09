import React, { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import Ingredients from "./Ingredients";
import "./RecipeDetails.css";
import Axios from "axios";
import { toast } from "react-toastify";

const RecipeDetails = () => {
  const [activeTab, setactiveTab] = useState("instructions");
  const [recipeDetails, setrecipeDetails] = useState({});
  const history = useHistory();
  const { recipeId } = useParams();
  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`;

  let content = (
    <>
      <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
      {/* <p dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }} /> */}
      <div className="details-url">
        <a href={recipeDetails.sourceUrl} target="_blank" rel="noopener noreferrer">
          Visit Site
        </a>
      </div>
      <div className="details-source-name">
        <p>
          Source By: <span>{recipeDetails.sourceName}</span>
        </p>
      </div>
    </>
  );
  if (activeTab === "ingredients") {
    content = (
      <ul className="recipe-ingredient-list">
        {recipeDetails.extendedIngredients.map((ingredient) => (
          <Ingredients key={ingredient.id} ingredient={ingredient} />
        ))}
      </ul>
    );
  }

  const getRecipeInformation = useCallback(async () => {
    await Axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => setrecipeDetails(res.data))
      .catch((err) => {
        history.push("/");
        toast.error(`${err.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [url, history]);

  useEffect(() => {
    getRecipeInformation();
  }, [getRecipeInformation]);

  return (
    <div className="recipe-details-container">
      <div className="details-image-container">
        <div className="details-image-title">
          <p>{recipeDetails.title}</p>
        </div>
        <div className="details-image">
          <img src={recipeDetails.image} alt="recipe-view" />
        </div>
      </div>
      <div className="recipe-details">
        <div className="details-actions">
          <button className={`from-centre ${activeTab === "instructions" ? "active" : ""}`} onClick={() => setactiveTab("instructions")}>
            Instructions
          </button>
          <button className={`from-center" ${activeTab === "ingredients" ? "active" : ""}`} onClick={() => setactiveTab("ingredients")}>
            Ingredients
          </button>
        </div>
        <div className="details-summary">{content}</div>
      </div>
    </div>
  );
};

export default RecipeDetails;
