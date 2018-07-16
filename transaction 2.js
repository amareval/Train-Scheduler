var express = require('express');
var router  = express.Router();

var transaction = require('../controllers/transaction_controller');


router.get('/', transaction.backProject);


module.exports = router;