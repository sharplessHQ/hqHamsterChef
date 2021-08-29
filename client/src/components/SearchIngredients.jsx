import React from 'react';
import $ from 'jquery';

class SearchIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    };
  }

  onChange(e) {
    let values= e.target.value;
    // console.log('change,,,,', values.toUpperCase().split(' '));
    this.setState( {
      ingredients: values.toUpperCase().split(' ')
    } )
  }

  keyress(e) {
    let values= e.target.value;
    // console.log(values, values.toUpperCase().split(' '));
    if (e.key === 'Enter') {
      // this.setState( {
      //   ingredients: values.toUpperCase().split(' ')
      // } )
      this.search();
    }
  }

  search() {
    this.props.getRecipes(this.state.ingredients);
    $('#searchIng').val('');
  }

  render() {
    return (
      <div>
        <input type="search" name="search" id="searchIng" className="search" placeholder="Need cooking ideas from your saved recipes? (Search: cider lemon)" onChange={this.onChange.bind(this)} onKeyPress={this.keyress.bind(this)}></input>
        <button id="searchIng-Btn" className="search-Btn" onClick={this.search.bind(this)}>Search {'\uD83D\uDC39'}</button>
      </div>
    )
  }
}

export default SearchIngredients;
