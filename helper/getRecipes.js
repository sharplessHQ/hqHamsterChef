const axios = require('axios').default;
const {Recipe, User} = require('../models/schema.js');

let getRecipes = (keyword, callback) => {
  const API_URI=`https://api.edamam.com/search?q=${keyword}&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&from=0&to=3`;

  axios.get(API_URI)
    .then( res => {
      callback(res.data);
    })
    .catch( err => {
      callback(err);
    })

  // let options = {
  //   url: `https://api.edamam.com/search?q=${keyword}&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&from=0&to=10`
  // };
  // axios(options)
  //   .then( (res) => {
  //     callback(res.data);
  //   } )
  //   .catch( (err) => {
  //     callback(err);
  //   } )
};


let save = async (keyword, data, cb) => {
  const ingredientsArr = data.ingredientLines.join(' ').toUpperCase().split(/[\s,]+/);
  const recipe = new Recipe({
    // username: username,
    keyword: keyword,
    label: data.label,
    calories: data.calories,
    image: data.image,
    ingredientLines: data.ingredientLines,
    ingredients: data.ingredients,
    allIngrediants: ingredientsArr,
    url: data.url,
    cuisineType: data.cuisineType,
    yield: data.yield
  });
  const recipeExist = await Recipe.findOne( {label: data.label} );
  if (recipeExist) {
    return cb(`${data.label} exists!`);
  }
  cb(`${data.label} saved!`);
  return recipe.save();
}

let find = async () => {
  return Recipe.find({}).sort({keyword: 1});
}

let findKeywordRecipes = async (keyword) => {
  return Recipe.find({keyword: keyword}).sort({label: 1});
}

let findCookableRecipes = async (terms) => {
  let termArr = terms.toUpperCase().split(' ');
  return Recipe.find({allIngrediants: {$all: termArr}}).sort({keyword: 1});
}

let saveUser = async (data, cb) => {
  const user = new User({
    // username: username,
    username: data.username,
    password: data.password
  });
  const userExist = await User.findOne( {username: data.username} );
  console.log('userExist', userExist)
  if (userExist) {
    return cb(`${data.username} exists!`);
  }
  cb(`${data.username} saved!`);
  return user.save();
}

let findUser = async (data) => {
  // return User.findOne( {username: data.username} ).sort({keyword: 1});
  return User.findOne( {username: data.username} );
}

module.exports = {getRecipes, save, find, findKeywordRecipes, findCookableRecipes, saveUser, findUser}