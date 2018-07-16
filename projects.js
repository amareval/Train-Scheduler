var express = require('express');
var router  = express.Router();

var projects_controller = require('../controllers/projects_controller');
// var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', projects_controller.index); // took out parameter isAuthenticated

router.get('/projects', projects_controller.index); // took out parameter isAuthenticated

router.get('/:id', projects_controller.getProject);

router.post('/new', projects_controller.createProject);



module.exports = router;