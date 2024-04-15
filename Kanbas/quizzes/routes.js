import * as dao from "./dao.js";
export default function QuizRoutes(app) {
    const addQuiz = async (req, res) => {
        const { cid } = req.params;
        const quiz = await dao.addQuiz({ ...req.body, course: cid });
        res.json(quiz);
    };
    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.qid);
        res.json(status);
    };
    const findQuizzesForCourse = async (req, res) => {
        const { cid } = req.params;
        const quizzes = await dao.findQuizzesForCourse(cid);
        res.json(quizzes);
        return;
    };
    const updateQuiz = async (req, res) => {
        const { qid } = req.params;
        const status = await dao.updateQuiz(qid, req.body);
        res.json(status);
    };
    app.post("/api/courses/:cid/quizzes", addQuiz);
    app.delete("/api/quizzes/:qid", deleteQuiz);
    app.get("/api/courses/:cid/quizzes", findQuizzesForCourse);
    app.put("/api/quizzes/:qid", updateQuiz);
}