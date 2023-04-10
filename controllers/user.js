const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncerrorWrapper = require("express-async-handler");



const getSingleUser = asyncerrorWrapper(async(req,res,next) => {
    const {id} = req.params;

    const user = await User.findById(id);

    

    return res.status(200)
    .json({
        success:true,
        data:user
    });
});

const getAllUsers = asyncerrorWrapper(async(req,res,next) => {
    return res.status(200)
    .json(res.queryResults);


});

module.exports = {
    getSingleUser,
    getAllUsers
}