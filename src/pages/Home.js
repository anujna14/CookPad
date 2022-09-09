import React from "react";
import Layout from "../components/Layout/Layout";
import Recipes from "../components/Recipes/Recipes";
import Search from "../components/Search/Search";


const Home = () => {
  return (
    <Layout>
      <div>
        <Search />
        <Recipes />
      </div>
    </Layout>
  );
};

export default Home;
