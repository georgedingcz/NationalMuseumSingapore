const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
// require the authorization middleware function
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/users
router.post("/", usersCtrl.create);
// GET /api/users/check-token
router.get("/check-token", usersCtrl.checkToken);
// Insert ensureLoggedIn on all routes that need protecting
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);
router.post('/login', usersCtrl.login)

module.exports = router;
