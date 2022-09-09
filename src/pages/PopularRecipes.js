import React from "react";
import Layout from "../components/Layout/Layout";
import PopularRecipe from "../components/Recipes/PopularRecipe";

const PopularRecipes = () => {
  return (
    <Layout>
      <div>
       <PopularRecipe />
      </div>
    </Layout>
  );
};

export default PopularRecipes;
