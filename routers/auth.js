const express = require("express");
const router = express.Router();
const { 
    register, 
    getUser, 
    login, 
    logout, 
    imageUpload,
    forgotPassword,
    resetPassword,
    editDetails
} = require('../controllers/auth');
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const profileImageUpload = require("../middlewares/libraries/profileImageUpload");
router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);
router.post("/forgotpassword",forgotPassword);
router.put("/resetPassword",resetPassword);
router.put("/edit",getAccessToRoute,editDetails);
router.post(
    "/upload",
    [getAccessToRoute, profileImageUpload.single("profile_image")],
    imageUpload
);



module.exports = router;