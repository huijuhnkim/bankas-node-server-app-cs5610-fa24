import * as enrollmentsDao from "./dao.js"

export default function EnrollmentsRoutes(app) {
    app.post("/api/enrollments", async (req, res) => {
        const enrollment = req.body
        res.send(enrollment)
    });
}