// function Item({name, ingridients}) {
//     return <div>

//     </div>
// }

import React, { useState } from "react";

function Items({ recipe }) {
  const { label, image, ingredients } = recipe.recipe;
  const [show, setShow] = useState(false);

  const recipeDetales = (
    <div className="resipeDetales">
      <ul className="ingredient-list">
        {/* problem z kluczami do li */}
        {ingredients.map((ingredients, idx1) => (
          <React.Fragment key={idx1}>
            <li className="ingredient-text">{ingredients.text}</li>
            <li className="ingredient-weight">
              {ingredients.weight}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
  return (
    <div className="components">
      <h2>{label}</h2>
      <img src={image} alt={label} />

      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && recipeDetales}
    </div>
  );
}

export default Items;
