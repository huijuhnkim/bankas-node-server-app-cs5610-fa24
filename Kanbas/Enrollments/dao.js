import Database from "../Database/index.js";


export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    const { newEnrollment } = { _id: Date.now().toString(), user: userId, course: courseId }
    enrollments.push(newEnrollment);
    return newEnrollment;
}
