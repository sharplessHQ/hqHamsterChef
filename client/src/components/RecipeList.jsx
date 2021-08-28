import React from 'react';
import './RecipeList.css';
import $ from 'jquery';


class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: 'pie'
    }
  }

  getKeyRecipes(e) {
    this.setState( {
      keyword: e.target.textContent
    });
    this.props.getRecipes(e.target.textContent);
  }

  render() {
    return (
      <div>
        <h3>There are total {this.props.recipes.length} recipes in your database!
          <button id="fav-recipe-Btn" className="fav-recipe-Btn" onClick={this.props.showFavRecipe}> Show Fav {'\uD83D\uDC39'}</button>
          <button id="fav-recipe-Btn" className="fav-recipe-Btn" onClick={this.props.showAllRecipe}> Show All {'\uD83D\uDC39'}</button>
          <button id="fav-recipe-Btn" className="fav-recipe-Btn" onClick={this.props.deleteAllRecipe}> Delete All {'\uD83D\uDC39'}</button>
        </h3>
        <table id="table">
          <thead>
            <tr>
            <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
            <th>Keyword List</th>
            {
              this.props.keywordList.map( keyword =>
                (<td onClick={this.getKeyRecipes.bind(this)} id="keyList" key={this.props.keywordList.indexOf(keyword)}>{keyword}</td>)
              )
            }
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default RecipeList;