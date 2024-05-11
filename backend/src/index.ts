import express from "express";
import cors from "cors";
import * as RecipeAPI from "./recipe-api";
import { searchRecipes } from "./recipe-api";
import { PrismaClient } from "@prisma/client";
require("dotenv").config();

const app = express();
const prismaClient = new PrismaClient();
app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (req, res) => {
  const searchTerm = req.query.searchTerm as string;
  const page = parseInt(req.query.page as string);
  const results = await RecipeAPI.searchRecipes(searchTerm, page);

  return res.json(results);
});

app.get("/api/recipes/:recipeId/summary", async (req, res) => {
  const recipeId = req.params.recipeId;
  const results = await RecipeAPI.getRecipeSummary(recipeId);

  return res.json(results);
});

app.post("/api/recipes/favorite", async (req, res) => {
  const recipeId = req.body.recipeId;

  try {
    const favoriteRecipe = await prismaClient.favoriteRecipes.create({
      data: {
        recipeId: recipeId,
      },
    });
    return res.status(201).json(favoriteRecipe);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong :(" });
  }
});

app.listen(3000, () => {
  console.log("Server running on localhost:3000");
});
