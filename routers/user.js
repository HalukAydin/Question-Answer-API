const express = require("express");
const {getSingleUser,getAllUsers} = require("../controllers/user.js");
const router = express.Router();
const User = require("../models/User.js");
const {checkUserExist} = require("../middlewares/database/databaseErrorHelpers");
const userQueryMiddleware = require ("../middlewares/query/userQueryMiddleware");
router.get("/",userQueryMiddleware(User),getAllUsers);
router.get("/:id",checkUserExist,getSingleUser);

module.exports = router;