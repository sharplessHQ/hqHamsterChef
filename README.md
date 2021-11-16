# Hamster Chef

A full stack recipe search web application using Edamam API.

### https://hqhamsterchef.herokuapp.com

## Getting Started

### Dependencies

Webpack, Babel, React, Express, MongoDB, Mongoose, Axios

### Table of Contents
* [Login](#login)
* [All Recipes](#all-recipes)
* [Favorite Recipes](#favorite-recipes)
* [Search Ingredients](#search-ingredients)

### Installing

Use npm install to install dependencies
```bash
npm install
```
Use npm run client to start webpack to compile bundle
```bash
npm run webpack
```
Use npm start to run server
```bash
npm start
```
### Executing program

Go to http://localhost:3030 to view the project.

## Connect Four

### [Login](#login)
![Login](assets/Hamster_Chef.png?raw=true "Login")

Login page requires a username and password to register a new account or login. When a login fails (i.e, the username doesn't exist, the username and password combination does not match a user account), the corresponding error message will be displayed and the user is disallowed access. After a successful login, the user is redirected to the All Recipes screen.

### [All Recipes](#all-recipes)
![All Recipes](assets/Hamster_Chef_All.png?raw=true "All Recipes")

All Recipes page consists of saved recipe cards with clickable title where users can go check the recipe details. Each card will display the image, cuisine type, calories per serving and brief ingredient information.

This page shows the total number of recipes saved by the user currently logged in. The clickable Keyword List allows users to check receipes associated with that searched keyword.

The Fav button on each recipe card is where users can add the recipe to their favorite list. The Show Fav button will lead users to [Favorite Recipes](#favorite-recipes) page.

The ingredient search bar can be used to search recipes using all searched ingredients. It will lead users to [Search Ingredients](#search-ingredients) page.

### [Favorite Recipes](#favorite-recipes)
![Favorite Recipes](assets/Hamster_Chef_Fav.png?raw=true "Favorite Recipes")

The unFav button on each recipe card is where users can remove the recipe from their favorite list. The Show All button will lead users to [All Recipes](#all-recipes) page.

### [Search Ingredients](#search-ingredients)
![Search Ingredients](assets/Hamster_Chef_Search.png?raw=true "Search Ingredients")

Search Ingredients page displays recipes using all searched ingredients.

## Version History

* 0.1
    * Initial Release




