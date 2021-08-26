
const mongoose = require ('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  // username: String,
  keyword: String,
  label: String,
  calories: Number,
  image: String,
  ingredientLines: Array,
  ingredients: Array,
  allIngrediants: Array,
  url: String,
  cuisineType: Array,
  yield: Number
});

const userSchema = new Schema({
  username: String,
  password: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);
const User = mongoose.model('User', userSchema);

module.exports = {Recipe, User};
