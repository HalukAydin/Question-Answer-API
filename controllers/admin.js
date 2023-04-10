const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncerrorWrapper = require("express-async-handler");


const blockUser = asyncerrorWrapper(async (req, res, next) => {
    const {id} = req.params;

    const user = await User.findById(id);

    user.blocked =!user.blocked;

    await user.save();

    return res.status(200)
    .json({
        success:true,
        message:"Block-Unblock Successful"
    });


});
const deleteUser = asyncerrorWrapper(async (req, res,next) => {
    const {id} = req.params;

    const user = await User.findById(id);

    await user.deleteOne();


    return res.status(200)
    .json({
        success:true,
        message:"User Delete Successful"
    });
    
});


module.exports = {
    blockUser,
    deleteUser
}