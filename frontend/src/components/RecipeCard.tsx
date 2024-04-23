import { Recipe } from "../types";

interface Props {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: Props) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image}></img>
      <div className="recipecard-title">
        <h3>{recipe.title}</h3>
      </div>
    </div>
  );
};
