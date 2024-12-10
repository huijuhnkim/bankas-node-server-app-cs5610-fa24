import * as dao from "./dao.js"

export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.findAllEnrollments()
        res.send(enrollments)
        }
    )

    app.post("/api/enrollments/:courseId", (req, res) => {
        // console.log("Full Session:", req.session);
        // console.log("Current User from Session:", req.session.currentUser);
        // console.log("Request Body:", req.body);
        // console.log("Request Params:", req.params);
        const currentUser = req.session["currentUser"]
        const { courseId } = req.params;
        if (currentUser) {
            const newEnrollment = dao.enrollUserInCourse(currentUser._id, courseId);
            res.json(newEnrollment);
        } else {
            res.status(401).json({ message: "User not authenticated" });
        }
    })
}