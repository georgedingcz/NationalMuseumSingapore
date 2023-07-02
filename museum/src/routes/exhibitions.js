var express = require("express");
var router = express.Router();
const exhibitionsCtrl = require('../controllers/exhibitions')

router.get('/', exhibitionsCtrl.listAll)
router.post("/", exhibitionsCtrl.create);
router.get("/:id", exhibitionsCtrl.listOne);

module.exports = router;