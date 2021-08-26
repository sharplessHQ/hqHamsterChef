import React, { lazy, Suspense } from 'react';
const Recipes = lazy( () => import('./Recipes.jsx'));
const RecipeList = lazy( () => import('./RecipeList.jsx'));
const SearchRecipe = lazy( () => import('./SearchRecipe.jsx'));
const SearchIngredients = lazy( () => import('./SearchIngredients.jsx'));
const Register = lazy( () => import('./Register.jsx'));
const renderLoader = () => <p>Loading</p>;
const axios = require('axios');

import './App.css';
import img1 from './../pic/pic1.jpg';
import img2 from './../pic/pic2.jpg';
import img3 from './../pic/pic3.jpg';
import img4 from './../pic/pic4.jpg';
import $ from 'jquery';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return this.props.children;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      keywordList: [],
      recipeList: {},
      cookableRecipes: [],
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes(keyword) {
    axios('/recipes')
      .then(res => res.data)
      .then(data => {
        // console.log('data', data)
        // $("#update").text('');
        let dataRecipeList = {};
        let dataKeywordList = [];
        let allCookable = [];
        // console.log('data,,,', data)
        data.forEach( item => {
          if (!dataKeywordList.includes(item.keyword)) {
            dataKeywordList.push(item.keyword);
          }
          if (dataRecipeList[item.keyword]) {
            dataRecipeList[item.keyword].push(item);
          } else {
            dataRecipeList[item.keyword] = [item];
          }
          if (Array.isArray(keyword)) {
            let hasAll = true;
            keyword.forEach( key => {
              console.log(key);
              if (!item.allIngrediants.includes(key)) {
                hasAll = false;
                return;
              }
            } )
            if (hasAll) {
              allCookable.push(item);
            }
          }
        } )

        if(keyword) {
          if (typeof(keyword) === 'string') {
            this.setState( {recipes: dataRecipeList[keyword], keywordList: dataKeywordList, recipeList: dataRecipeList} );
          } else if (Array.isArray(keyword)) {
            console.log(keyword);
            this.setState( {recipes: allCookable, keywordList: dataKeywordList, recipeList: dataRecipeList, cookableRecipes: allCookable} );
          }
        } else {
          this.setState( {recipes: data, keywordList: dataKeywordList, recipeList: dataRecipeList} );
        }

        // console.log('this.state.recipes in get,,,', this.state.recipes);
        // console.log('this.state.keywordList in get,,,', this.state.keywordList);
        // console.log('this.state.recipesList in get,,,', this.state.recipeList);
      })
      .catch( err=> console.log('err,,,', err))
  }

  searchRecipe(key) {
    console.log(`${key} was searched!`);

    axios.post('/recipes', {keyword: key})
      .then(msg => {
        // console.log('msg', msg)
        console.log(`search ajax worked: ${msg.data}`);
        $("#update").text(msg.data);
        this.getRecipes();
      })
      .catch(err => {
        console.log(`search ajax worked: ${err}`);
      })

    this.getRecipes();
  }

  getImages() {
    return (
      <div id="image">
        <img className="image" src={img1} id="image" width="122" height="183" alt="Hamster"></img>
        <img className="image" src={img2} id="image" width="137" height="183" alt="Hamster"></img>
        <img className="image" src={img3} id="image" width="325" height="183" alt="Hamster"></img>
        <img className="image" src={img4} id="image" width="224" height="183" alt="Hamster"></img>
      </div>
    )
  }

  render() {
    if (localStorage.getItem('user') === null) {
      // console.log('haha')
      return (
        <ErrorBoundary>
          <Suspense fallback={renderLoader()}>
            {this.getImages()}
            <div className="allContent">
              <Register/>
            </div>
          </Suspense>
        </ErrorBoundary>
      )
    } else {
      return (
        <ErrorBoundary>
          <Suspense fallback={renderLoader()}>
            <div>
              {this.getImages()}
              <div className="allContent">
                <SearchRecipe searchRecipe={this.searchRecipe.bind(this)} recipes={this.state.recipes} keywordList={this.state.keywordList} recipeList={this.state.recipeList}/>
                <p id="update"></p>
                <RecipeList getRecipes={this.getRecipes.bind(this)} recipes={this.state.recipes} keywordList={this.state.keywordList} recipeList={this.state.recipeList}/>
                <SearchIngredients getRecipes={this.getRecipes.bind(this)} recipes={this.state.recipes} keywordList={this.state.keywordList} recipeList={this.state.recipeList} cookableRecipes={this.state.cookableRecipes}/>
                <Recipes recipes={this.state.recipes} keywordList={this.state.keywordList} recipeList={this.state.recipeList}/>
              </div>
            </div>
          </Suspense>
        </ErrorBoundary>
      )
    }
  }
}

// const HelloWorld = () => {
//   return (
//     <h1>
//       Hello World from recipe scr index.jsx!!
//     </h1>
//   );
// }

export default App;