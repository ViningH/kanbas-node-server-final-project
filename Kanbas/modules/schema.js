import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    name: String,
    course: { type: String, required: true},
    id: {type: String, required: true},
    description: String,
    lessons: [
        {
            id: String,
            name: String,
            description: String,
            module: String
        }
    ]
  },
  { collection: "modules" });
export default moduleSchema;