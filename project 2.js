var express = require('express');
var router  = express.Router();

var project_controller = require('../controllers/project_controller');
// var isAuthenticated = require("../config/middleware/isAuthenticated");
var transaction = require('../controllers/transaction_controller');



router.get('/:id', project_controller.getProject);

router.post('/:id', project_controller.createComment);


router.get('/:id/transaction', transaction.backProject)

router.put('/:id/transaction', transaction.transaction);

module.exports = router;