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
      password: '',
      showRecipe: false,
      message: '',
      toLogin: false,
      showFav: false,
      favBtn: 'Fav'
    };
  }

  componentDidMount() {
    let username = localStorage.getItem('user');
    if (username !== null) {
      this.setState({username: username});
    }
    this.getRecipes();
  }

  getRecipes(keyword) {
    // console.log('getRecipes State:', this.state);
    // let username = localStorage.getItem('user');
    let username = this.state.username;
    let endpoint, favBtn;
    if (this.state.showFav) {
      // console.log('show fav', this.state.showFav);
      endpoint = `/recipes?username=${username}&fav=true`;
      favBtn = 'UnFav';
    } else {
      // console.log('no show fav', this.state.showFav);
      endpoint = `/recipes?username=${username}`;
      favBtn = 'Fav';
    }
    axios.get(endpoint)
      .then(res => res.data)
      .then(data => {
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
              // console.log(key);
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
            this.setState( {recipes: dataRecipeList[keyword], keywordList: dataKeywordList, recipeList: dataRecipeList, favBtn: favBtn} );
          } else if (Array.isArray(keyword)) {
            // console.log(keyword);
            this.setState( {recipes: allCookable, keywordList: dataKeywordList, recipeList: dataRecipeList, cookableRecipes: allCookable, favBtn: favBtn} );
          }
        } else {
          this.setState( {recipes: data, keywordList: dataKeywordList, recipeList: dataRecipeList, favBtn: favBtn} );
        }
      })
      .catch( err=> {
        console.log('err,,,', err);
        throw err;
      })
  }

  searchRecipe(key) {
    // console.log(`${key} was searched!`);

    axios.post('/recipes', {keyword: key, username: this.state.username})
      .then(msg => {
        // console.log('msg', msg)
        // console.log(`search ajax worked: ${msg.data}`);
        this.getRecipes();
      })
      .catch(err => {
        console.log(`search ajax worked: ${err}`);
        throw err;
      })

    this.getRecipes();
  }

  favRecipe(event) {
    // console.log('event', event.target.name);
    let username = this.state.username;
    let endpoint, showFav;
    // let favBtn;
    if (this.state.favBtn === 'Fav') {
      // console.log('show fav', this.state.favBtn);
      endpoint = `/favorite`;
      // favBtn = 'UnFav';
      showFav = false;
    } else {
      // console.log('show unFav', this.state.favBtn);
      endpoint = `/favorite?favBtn=${this.state.favBtn}`;
      // favBtn = 'Fav';
      showFav = true;
    }

    // let label = this.state.label;
    let label = event.target.name;
    // console.log(`${label} was fav saved!`);

    axios.put(endpoint, {label: label, username: this.state.username})
      .then(msg => {
        console.log(`fav ajax worked: ${msg.data}`);
      })
      .catch(err => {
        console.log(`fav ajax worked: ${err}`);
        throw err;
      })

    this.getRecipes();

    this.setState({
      showFav: showFav
    }, ()=> {
      // console.log('unfaved one???? ', this.state.showFav);
      this.getRecipes();
    })
  }

  showFavRecipe() {
    this.setState({
      showFav: true
    }, ()=> {
      // console.log('changed to showFav? ', this.state.showFav);
      this.getRecipes();
    })
  }

  showAllRecipe() {
    this.setState({
      showFav: false
    }, ()=> {
      // console.log('changed to showAll? ', this.state.showFav);
      this.getRecipes();
    })
  }

  deleteAllRecipe() {
    let username = this.state.username
    axios.delete(`/recipes?username=${username}`)
      .then(msg => {
        // console.log(`delete ajax worked: ${msg.data}`);
        this.setState({
          recipes: [],
          keywordList: [],
          recipeList: {},
          cookableRecipes: []
        }, ()=> {
          // console.log('deleted all? ', this.state);
          this.getRecipes();
        })
      })
      .catch(err => {
        console.log(`delete ajax worked: ${err}`);
      })

  }

  handleRegister(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  register() {
    // console.log("name", document.getElementById("username").value);
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    // console.log('state before register', this.state)

    axios.post('/register', data)
      .then(result => {
        // console.log('result from app:', result.data.split(' ')[0], result.data);
        let newState;
        if (result.data === 'nullEntry') {
          // console.log('Cannot be null', result.data);
          newState = {
            message: 'Cannot be null!'
          };
        } else if (result.data.split(' ')[0] === 'New') {
          localStorage.setItem('user', this.state.username);
          newState = {
            showRecipe: true
          };
          this.getRecipes();
        } else {
          newState = {
            password: '',
            message: 'Username exists! Please login!',
            toLogin: true
          };
          localStorage.setItem('user', this.state.username);
          this.login();
        }
        this.setState(newState);
        // console.log('state after register', this.state);
      })
      .catch(err => {
        console.log('err:, err');
        throw err;
      })
  }

  handleLogin(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login() {
    // console.log("name", document.getElementById("username").value);
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    // console.log('state before register', this.state)

    axios.post('/login', data)
      .then(result => {
        // console.log('password correct?', result.data);
        let newState;
        if (this.state.toLogin) {
          newState = {
            password: '',
            message: 'Username exists! Please login!',
            toLogin: false
          };
        } else if (result.data === 'noExistUser') {
          newState = {
            message: 'Not a existing user! Try again!'
          }
        } else if (result.data === 'successLogin') {
          localStorage.setItem('user', this.state.username);
          newState = {
            showRecipe: true
          };
        } else {
          newState = {
            password: '',
            showRecipe: false,
            message: 'Incorrect Password. Try again!'
          };
        }
        this.setState(newState);
        // console.log('state after register', this.state);
      })
      .catch(err => {
        console.log('err:, err')
        throw err;
      })
    this.getRecipes();
  }

  toRegister() {
    localStorage.removeItem('user');
    this.setState({
      username: '',
      password: '',
      showRecipe: false,
      message: ''
    })
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
    if (!this.state.showRecipe) {
      return (
        <ErrorBoundary>
          <Suspense fallback={renderLoader()}>
            {this.getImages()}
            <div className="allContent">
              <Register handleRegister={this.handleRegister.bind(this)} register={this.register.bind(this)} handleLogin={this.handleLogin.bind(this)} login={this.login.bind(this)} toRegister={this.toRegister.bind(this)} username={this.state.username} password={this.state.password} message={this.state.message}/>
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
                <RecipeList getRecipes={this.getRecipes.bind(this)} showFavRecipe={this.showFavRecipe.bind(this)} showAllRecipe={this.showAllRecipe.bind(this)} deleteAllRecipe={this.deleteAllRecipe.bind(this)} recipes={this.state.recipes} keywordList={this.state.keywordList} recipeList={this.state.recipeList}/>
                <SearchIngredients getRecipes={this.getRecipes.bind(this)} recipes={this.state.recipes} keywordList={this.state.keywordList} recipeList={this.state.recipeList} cookableRecipes={this.state.cookableRecipes}/>
                <Recipes recipes={this.state.recipes} keywordList={this.state.keywordList} recipeList={this.state.recipeList}  favBtn={this.state.favBtn} favRecipe={this.favRecipe.bind(this)}/>
              </div>
            </div>
          </Suspense>
        </ErrorBoundary>
      )
    }
  }
}

export default App;