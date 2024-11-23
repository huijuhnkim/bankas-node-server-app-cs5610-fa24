import express from 'express';
import session from "express-session";
import HelloRoute from './Hello.js';
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";


const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
}));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
}

if (process.env.NODE_ENV === "development") {
    sessionOption.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    }
}

app.use(session(sessionOptions));

app.use(express.json());

HelloRoute(app)
Lab5(app)
UserRoutes(app)
CourseRoutes(app)
ModuleRoutes(app);

app.listen(process.env.PORT || "4000");

// attempt #3