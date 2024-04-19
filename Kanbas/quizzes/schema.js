import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    _id: String,
    course: { type: String, required: true},
    title: String,
    quiztype: {
        type: String,
        enum: ["GRADEDQUIZ", "PRACTICEQUIZ", "GRADEDSURVEY", "UNGRADEDSURVEY"],
        default: "GRADEDQUIZ", 
    },
    published: {type: Boolean, default: false},
    points: Number,
    group: {
        type: String,
        enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
        default: "QUIZZES", 
    },
    shuffle: {type: Boolean, default: true},
    time_limit: Boolean,
    time: Number,
    multiple_attempts: {type: Boolean, default: false},
    show_correct: Boolean,
    show_correct_date: String,
    code: String,
    one_question: {type: Boolean, default: true},
    webcam: {type: Boolean, default: false},
    lock: {type: Boolean, default: false},
    due_date: String,
    start_date: String,
    until_date: String,
  },
  { collection: "quizzes" });
export default quizSchema;