import model from "./model.js";
export const addQuestion = (question) => {
    return model.create(question);
}
export const findQuestionsForQuiz = (quizId) => model.find({ quiz: quizId });
export const updateQuestion = (questionId, question) => model.updateOne({ _id: questionId }, { $set: question });
export const deleteQuestion = (questionId) => model.deleteOne({ _id: questionId });