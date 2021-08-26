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
    // console.log('this outside,,,,', this);
    $("#update").text('');
    console.log('e outside,,,,', e.target.textContent);
    this.setState( {
      keyword: e.target.textContent
    });
    this.props.getRecipes(e.target.textContent);
  }

  render() {
    return (
      <div>
        <h3>There are total {this.props.recipes.length} recipes in your database!</h3>
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