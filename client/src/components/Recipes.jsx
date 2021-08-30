import React from 'react';
import './Recipes.css';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
  }

  checkFav(recipe) {
    if (recipe.favorite && !this.props.showFav) {
      return 'Faved';
    } else {
      return this.props.favBtn;
    }
  }

  render() {
    return (
      <div className="recipes">
        {
          this.props.recipes.map( recipe =>
            (
              <div className="recipe-container" key={recipe.label+'div'}>
                <p id="label" key={recipe.label}><a href={recipe.url}>{'\uD83D\uDC39'} {recipe.label}</a><button id="save-recipe-Btn" id={recipe._id} className="save-recipe-Btn" onClick={this.props.favRecipe}> {this.checkFav(recipe)}{'\uD83D\uDC39'}</button></p>
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