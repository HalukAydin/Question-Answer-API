const express = require("express");

const router = express.Router({mergeParams:true});
const {getAnswerOwnerAccess} = require("../middlewares/authorization/auth");
const {getAccessToRoute} = require("../middlewares/authorization/auth");
const {checkQuestionAndAnswerExist}= require("../middlewares/database/databaseErrorHelpers");
const {
    addNewAnswerToQuestion,
    getAllAnswersByQuestion,
    getSingleAnswer,
    editAnswer,
    deleteAnswer,
    likeAnswer,
    undoLikeAnswer
} = require("../controllers/answer");
router.post("/",getAccessToRoute,addNewAnswerToQuestion);
router.get("/",getAllAnswersByQuestion);
router.get("/:answer_id",checkQuestionAndAnswerExist,getSingleAnswer);
router.get("/:answer_id/like",[checkQuestionAndAnswerExist,getAccessToRoute],likeAnswer);
router.get("/:answer_id/undolike",[checkQuestionAndAnswerExist,getAccessToRoute],undoLikeAnswer);
router.put("/:answer_id/edit",[checkQuestionAndAnswerExist,getAccessToRoute,getAnswerOwnerAccess],editAnswer);
router.delete("/:answer_id/delete",[checkQuestionAndAnswerExist, getAccessToRoute, getAnswerOwnerAccess],deleteAnswer);



module.exports = router;