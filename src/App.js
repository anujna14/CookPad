import { Switch, Route, Redirect } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import PopularRecipes from "./pages/PopularRecipes";
import RecipeDetail from "./pages/RecipeDetail";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/recipes" />
        </Route>
        <Route path="/recipes" exact>
          <Home />
        </Route>
        <Route path="/popular">
          <PopularRecipes />
        </Route>
        <Route path="/recipes/:recipeId" exact>
          <RecipeDetail />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
