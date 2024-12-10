import Database from "../Database/index.js";

export function findAllEnrollments() {
    return Database.enrollments;
}

export function enrollUserInCourse(userId, courseId) {
    const newEnrollment = {
        _id: Date.now().toString(),
        user: userId,
        course: courseId
    };
    Database.enrollments = [...Database.enrollments, newEnrollment];
    return newEnrollment;
}

export function excludeUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.filter((enrollment) => enrollment.user !== userId && enrollment.course !== courseId);
}


