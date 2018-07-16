const express = require('express');
const router  = express.Router();

const users_controller = require('../controllers/users_controller');

router.get('/', users_controller.index); // localhost:3000/users

router.get('/user', users_controller.user); // localhost:3000/users/user


var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/signup', users_controller.registrationPage);

router.get('/sign-out', users_controller.signOutUser);

router.post('/login', passport.authenticate("local"), users_controller.loginUser);

router.post('/signup', users_controller.signUpUser);




module.exports = router;