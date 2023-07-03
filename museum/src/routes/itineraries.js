var express = require("express");
var router = express.Router();
const itinerariesCtrl = require('../controllers/itineraries')

router.get('/', itinerariesCtrl.listAll)
router.post("/", itinerariesCtrl.create);
router.get("/:id", itinerariesCtrl.listOne);

module.exports = router;