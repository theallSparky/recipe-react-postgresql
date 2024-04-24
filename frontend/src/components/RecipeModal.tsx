import { useState } from "react";
import { recipeSummary } from "../types";

export const RecipeModal = () => {
  const [recipeSummary, setSummaryRecipe] = useState<recipeSummary>("");

  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{recipeSummary?.id}</h2>
            <span className="clote-btn">&times;</span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: recipeSummary?.summary }}>
            RECIPE SUMMARY
          </p>
        </div>
      </div>
    </>
  );
};
