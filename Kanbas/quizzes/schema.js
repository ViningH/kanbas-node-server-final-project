import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    course: { type: String, required: true},
    quiztype: {
        type: String,
        enum: ["GRADEDQUIZ", "PRACTICEQUIZ", "GRADEDSURVEY", "UNGRADEDSURVEY"],
        default: "GRADEDQUIZ", 
    },
    points: number,
    group: {
        type: String,
        enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
        default: "QUIZZES", 
    },
    shuffle: {type: Boolean, default: true},
    time: number,
    multiple_attempts: {type: Boolean, default: false},
    show_correct: Boolean,
    show_correct_date: Date,
    code: String,
    one_question: {type: Boolean, default: true},
    webcam: {type: Boolean, default: false},
    lock: {type: Boolean, default: false},
    due_date: Date,
    start_date: Date,
    until_date: Date,
  },
  { collection: "quizzes" });
export default quizSchema;