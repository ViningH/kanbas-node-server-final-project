import model from "./model.js";
export const addQuiz = (quiz) => {
    return model.create(quiz);
}
export const findQuizzesForCourse = (courseId) => model.find({ course: courseId });
export const updateQuiz = (quizId, quiz) => model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });