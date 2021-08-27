const express = require('express');
const router = express.Router();

const {getRecipes, save, find, findKeywordRecipes, findCookableRecipes, saveUser, findUser} = require('../helper/getRecipes');

router.post('/recipes', (req, res) => {
  // console.log('post /recipes working?');
  // res.send('Hello World from server!!!');
  console.log('router', req.body.keyword, req.body.username);
  getRecipes( req.body.keyword, (data) => {
    let allRecipes = [];
    data.hits.forEach( (item) => {
      // allRecipes.push(item.recipe);
      allRecipes.push(save(req.body.username, req.body.keyword, item.recipe, (saveRsp) => {
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
  console.log('req.body,,,', req.data, req.params, res.data, res.params, req.query);
  try {
    savedRecipes = await find(req.query.username);
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
  saveUser(req.body)
  .then(user => {
    if (user === `User ${req.body.username} exists!`) {
      console.log('user exists', req.body.username);
      // res.redirect('/login');
      res.send(user);
    } else if (user === 'nullEntry') {
      res.send(user)
    } else {
      console.log('user', user);
      res.send(`New user ${user.username} has been saved!`)
    }
  })
  .catch(err => console.log(err));
})

router.post('/login', (req, res) => {
  // res.redirect('/register');
  console.log('req.body', req.body);
  findUser(req.body)
  .then(user => {
    console.log('user in router:', user)
    if (!user) {
      res.send('noExistUser');
    } else if (req.body.password === user.password) {
      console.log('Successfully login as:', req.body.password, user.username, user.password);
      res.send('successLogin');
    } else {
      console.log('Unsuccessfully login as:', req.body.password, user.username, user.password);
      res.send(`failLogin`)
    }
  })
  .catch(err => console.log(err));
})

module.exports = router;