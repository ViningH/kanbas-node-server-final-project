import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: String,
    number: String,
    id: { type: String, required: true, unique: true },
    startDate: Date,
    endDate: Date,
    department: String,
    credits: String,
    description: String,
    image: String
  },
  { collection: "courses" });
export default courseSchema;