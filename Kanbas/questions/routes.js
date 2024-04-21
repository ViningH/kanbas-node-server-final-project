import * as dao from "./dao.js";
export default function QuestionRoutes(app) {
    const findQuestionById = async (req, res) => {
        const { quid } = req.params;
        const question = await dao.findQuestionById(quid);
        res.json(question); 
        
    };
    const addQuestion = async (req, res) => {
        const { qid } = req.params;
        const question = await dao.addQuestion({ ...req.body, quiz: qid });
        res.json(question);
    };
    const deleteQuestion = async (req, res) => {
        const status = await dao.deleteQuestion(req.params.quid);
        res.json(status);
    };
    const findQuestionsForQuiz = async (req, res) => {
        const { qid } = req.params;
        const questions = await dao.findQuestionsForQuiz(qid);
        res.json(questions);
        return;
    };
    const updateQuestion = async (req, res) => {
        const { quid } = req.params;
        const status = await dao.updateQuestion(quid, req.body);
        res.json(status);
    };
    app.get("/api/questions/:quid", findQuestionById);
    app.post("/api/quizzes/:qid/questions", addQuestion);
    app.delete("/api/questions/:quid", deleteQuestion);
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
    app.put("/api/questions/:quid", updateQuestion);
}