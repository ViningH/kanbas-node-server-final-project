import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from "./Users/routes.js";
import QuizRoutes from './Kanbas/quizzes/routes.js';
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import cors from "cors";
import "dotenv/config";
import Hello from './Hello.js';
import session from "express-session";
import QuestionRoutes from './Kanbas/questions/routes.js';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'  
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors(
    {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
));
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.HTTP_SERVER_DOMAIN,
    };
}  
app.use(
    session(sessionOptions)
);
app.use(express.json());
UserRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
app.listen(process.env.PORT || 4000);