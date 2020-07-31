let express = require("express");
let controller = require ("../controller/route_controller");

let router = express.Router();

router.get ("/", controller.list);

router.get( "/:idroutes?", controller.number);

module.exports = router;