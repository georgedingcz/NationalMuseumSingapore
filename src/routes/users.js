var express = require("express");
var router = express.Router();
const usersCtrl = require('../controllers/users')

router.get('/', usersCtrl.listAll)
router.post("/", usersCtrl.create);
router.get("/:id", usersCtrl.listOne);
router.patch("/", usersCtrl.patch);

router.delete('/deleteItinerary', usersCtrl.deleteItinerary)


module.exports = router;