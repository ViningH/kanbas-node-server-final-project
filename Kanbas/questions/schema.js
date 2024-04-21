import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    _id: String,
    title: String,
    quiz: { type: String, required: true },
    questiontype: {
        type: String,
        enum: ["TRUEFALSE", "MULTIPLECHOICE", "FILLINBLANKS"],
        required: true
    },
    points: Number,
    details: String,
    tf_answer: Boolean,
    choices: [
        {
            choice_no: String,
            choice_text: String
        }
    ],
    multiple_answer: String,
    blanks: [
        {
            blank_no: String,
            label: String,
            answer: String
        }
    ],

},
    { collection: "questions" });
export default questionSchema;