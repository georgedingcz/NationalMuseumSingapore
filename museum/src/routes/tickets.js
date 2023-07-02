var express = require("express");
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets')

router.get('/', ticketsCtrl.listAll)
router.post("/", ticketsCtrl.create);
router.get("/:id", ticketsCtrl.listOne);

module.exports = router;