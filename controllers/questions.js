const Question = require("../models/Question");
const CustomError = require("../helpers/error/CustomError");
const asyncerrorWrapper = require("express-async-handler");

const askNewQuestion = asyncerrorWrapper(async (req, res, next) => {
    const information = req.body;

    const question = await Question.create({
        ...information,
        user: req.user.id
    });
    res.status(200)
        .json({
            success: true,
            data: question
        });
});
const getAllQuestions = asyncerrorWrapper(async (req, res, next) => {
    res.status(200)
        .json(res.queryResults);
});
const getSingleQuestion = asyncerrorWrapper(async (req, res, next) => {
   
    res.status(200)
        .json(res.queryResults);

});
const editQuestion = asyncerrorWrapper(async (req, res, next) => {
    const { id } = req.params;

    const { title, content } = req.body;

    let question = await Question.findById(id);

    question.title = title;
    question.content = content;

    question = await question.save();

    return res.status(200)
        .json({
            success: true,
            data: question
        });
});
const deleteQuestion = asyncerrorWrapper(async (req, res, next) => {
    const { id } = req.params;

    let question = await Question.findById(id);

    question = await question.deleteOne();

    return res.status(200)
        .json({
            success: true,
            message: "Delete Successfull"
        });
});
const likeQuestion = asyncerrorWrapper(async (req, res, next) => {
    const { id } = req.params;

    let question = await Question.findById(id);

    if (question.likes.includes(req.user.id)) {
        return next(new CustomError("You already liked this question", 400));
    }
    question.likes.push(req.user.id);
    question.likeCount = question.likes.length;

    await question.save();

    return res.status(200)
        .json({
            success: true,
            data: question
        });
});
const undoLikeQuestion = asyncerrorWrapper(async (req, res, next) => {
    const { id } = req.params;

    const question = await Question.findById(id);

    if (!question.likes.includes(req.user.id)) {
        return next(new CustomError("You can not undo like operation for this question", 400));
    }
    const index = question.likes.indexOf(req.user.id);

    question.likes.splice(index, 1);
    question.likeCount = question.likes.length;

    await question.save();

    return res.status(200)
        .json({
            success: true,
            data: question
        });
});

module.exports = {
    askNewQuestion,
    getAllQuestions,
    getSingleQuestion,
    editQuestion,
    deleteQuestion,
    likeQuestion,
    undoLikeQuestion
}