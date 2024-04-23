require("dotenv").config();
const apiKey = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
  if (!apiKey) {
    throw new Error("API key not found!");
  }

  const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
  const queryParams = {
    apiKey, //shorthand version because I don't want to do this => apiKey: apiKey
    query: searchTerm,
    number: "10",
    offset: (page * 10).toString(), // Aligns results with page number
  };
  url.search = new URLSearchParams(queryParams).toString();

  try {
    const searchResponse = await fetch(url);
    const resultsJSON = await searchResponse.json();
    return resultsJSON;
  } catch (error) {
    console.log(error);
  }
};
