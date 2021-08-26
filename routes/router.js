const express = require('express');
const router = express.Router();

const {getRecipes, save, find, findKeywordRecipes, findCookableRecipes, saveUser, findUser} = require('../helper/getRecipes');

router.post('/recipes', (req, res) => {
  // console.log('post /recipes working?');
  // res.send('Hello World from server!!!');
  // console.log(req.body.keyword);
  getRecipes( req.body.keyword, (data) => {
    let allRecipes = [];
    data.hits.forEach( (item) => {
      // allRecipes.push(item.recipe);
      allRecipes.push(save(req.body.keyword, item.recipe, (saveRsp) => {
        console.log(saveRsp);
      }));
    } )
    Promise.all(allRecipes)
      .then( (recipes) => {
        // console.log(recipes.length);
        if (recipes.length) {
          res.send(`${recipes.length} ${req.body.keyword} recipes have been updated to your database! Happy cooking!`);
        } else {
          res.send(`OOPS! No ${req.body.keyword} recipes found! Try something else!`);
        }
      } )
      .catch( err=> console.log(err) );
  } );
})


// app.get('/', (req, res) => {
//   res.send('Hello World from server index.js Home!');
// })

router.get('/recipes', async (req, res) => {
  // console.log('req.body,,,', req.body);
  try {
    savedRecipes = await find();
    // console.log(savedRecipes.length, savedRecipes[0].keyword);
    res.send(savedRecipes);
  }
  catch(err) {
    res.status(400).send(`Oooooops, didn't find any matching recipe from your database!`);
  }
})

// app.get('/register', (req, res) => res.redirect('https://stackoverflow.com'))
router.post('/register', (req, res) => {
  // res.redirect('/register');
  console.log('req.body', req.body);
  // saveUser(req.body, (saveUsr) => {console.log(saveUser)})
  saveUser(req.body, (saveUsr) => {console.log(saveUser)})
  .then(user => {
    console.log('user', user);
    res.send(`${user} has been saved!`)
  })
  .catch(err => console.log(err));
})

module.exports = router;