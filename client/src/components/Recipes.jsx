import React from 'react';
import './Recipes.css';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {
          this.props.recipes.map( recipe =>
            (
              <div className="recipe" key={recipe.label+'div'}>
                <p id="label" key={recipe.label}><a href={recipe.url}>{'\uD83D\uDC39'} {recipe.label}</a></p>
                <img className="recipeImage" key={recipe.label+'image'} src={recipe.image} alt="RecipeImgMissing"  width="200" height="200" alt="RecipePhoto"></img>
                <p id="cuisineType" key={recipe.label+'calories'}>CuisineType: {(recipe.cuisineType+'').toUpperCase()[0]+(recipe.cuisineType+'').substring(1)} {'\uD83D\uDC39'} Calories per Serving: {Math.round(recipe.calories/recipe.yield)}</p>
                <ul className="list" key={recipe.label+'ingredient'}>
                  {
                    recipe.ingredientLines.map( (ingredient, i) => {
                      return (<li key={recipe.label+ingredient+i}>{ingredient}</li>)
                    } )
                  }
                </ul>
              </div>
            )
          )
        }
      </div>
    )
  }
}

export default Recipes;