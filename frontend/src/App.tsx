import "./App.css";
import { FormEvent, useState } from "react";
import * as api from "./api";
import { Recipe } from "./types";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const recipes = await api.searchRecipes(searchTerm, 1);
      setRecipes(recipes.results);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={(event) => handleSearchSubmit(event)}>
        <input
          type="text"
          required
          placeholder="Enter your desired recipe..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

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
