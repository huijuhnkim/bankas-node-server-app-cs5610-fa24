import * as dao from "./dao.js"

export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.findAllEnrollments()
        res.send(enrollments)
        }
    )

    app.post("/api/enrollments/:enrollmentId", async (req, res) => {
        const { enrollmentId } = req.params
        const enrollment = {
            ...req.body,
            enrollment: enrollmentId,
        }
        const newEnrollment = dao.enrollUserInCourse(userId, courseId)
        res.send(newEnrollment)
    })
}