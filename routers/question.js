const express = require("express");
// api/questions
const answer = require("./answer");
const { getSingleQuestion,
    askNewQuestion,
    getAllQuestions,
    editQuestion,
    deleteQuestion,
    likeQuestion,
    undoLikeQuestion
} = require('../controllers/questions');
const questionQueryMiddleware = require("../middlewares/query/questionQueryMiddleware");
const answerQueryMiddleware = require("../middlewares/query/answerQueryMiddleware");

const router = express.Router();
const {
    getAccessToRoute,
    getQuestionOwnerAccess
} = require("../middlewares/authorization/auth");
const {
    checkQuestionExist
} = require("../middlewares/database/databaseErrorHelpers");
const Question = require("../models/Question");

router.post("/ask", getAccessToRoute, askNewQuestion);
router.get("/", questionQueryMiddleware(
    Question
    , {
        population: {
            path: "user",
            select: "name profile_image"
        }
    }
), getAllQuestions);
router.get("/:id/like", [getAccessToRoute, checkQuestionExist], likeQuestion);
router.get(
    "/:id",
    checkQuestionExist,
    answerQueryMiddleware(Question,{
        population:[

        {
            path:"user",
            select:"name profile_image"
        },
        {
            path:"answer",
            select:"content"
        }

        ]
    }),
    getSingleQuestion
);
router.put(
    "/:id/edit",
    [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess],
    editQuestion
);
router.delete(
    "/:id/delete",
    [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess],
    deleteQuestion
);
router.use("/:question_id/answer", checkQuestionExist, answer);

router.get("/:id/undo_like", [getAccessToRoute, checkQuestionExist], undoLikeQuestion);



module.exports = router;