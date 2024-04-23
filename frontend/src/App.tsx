import "./App.css";
import { useState } from "react";
import * as api from "./api";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("burgers and fries");
  const [recipes, setRecipes] = useState([]);

  const handleSearchSubmit = async () => {
    try {
      const recipes = await api.searchRecipes(searchTerm, 1);
      setRecipes(recipes);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <div>
          recipe image location: {recipe.image}
          recipe title: {recipe.title}
        </div>
      ))}
    </div>
  );
};

export default App;
