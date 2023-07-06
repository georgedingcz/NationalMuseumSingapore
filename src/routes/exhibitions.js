var express = require("express");
var router = express.Router();
const exhibitionsCtrl = require('../controllers/exhibitions')

router.post("/", exhibitionsCtrl.create);
router.get('/', exhibitionsCtrl.listAll);
router.get('/search', exhibitionsCtrl.listExhibitions);
router.get('/:id', exhibitionsCtrl.listOne);
router.get('/filter', exhibitionsCtrl.itineraryListExhibition);

module.exports = router;