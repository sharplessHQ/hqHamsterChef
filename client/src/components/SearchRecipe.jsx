import React from 'react';
import $ from 'jquery';

class SearchRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
  }

  onChange(e) {
    // console.log(e.target.value);
    this.setState( {
      key: e.target.value
    } )
  }

  keyress(e) {
    // console.log(e.target.value);
    if (e.key === 'Enter') {
      this.search();
    }
  }

  search() {
    this.props.searchRecipe(this.state.key);
    $('#search').val('');
  }

  render() {
    return (
      <div>
        <input type="search" name="search" id="search" className="search" placeholder="Search Recipe Here" onChange={this.onChange.bind(this)} onKeyPress={this.keyress.bind(this)}></input>
        <button id="search-Btn" className="search-Btn" onClick={this.search.bind(this)}>Search {'\uD83D\uDC39'}</button>
      </div>
    )
  }
}

export default SearchRecipe;
