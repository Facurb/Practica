var express = require('express');
var router = express.Router();
let usercontroller = require ("../controllers/usercontroller");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// users/register
router.get("/register", usercontroller.register)

// users/list
router.get("/list", usercontroller.list);
module.exports = router;
