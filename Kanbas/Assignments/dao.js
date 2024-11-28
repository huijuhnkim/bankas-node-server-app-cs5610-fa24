 import database from "../Database/index.js"

 export function findAssignmentsForCourse(courseId) {
    const { assignments } = database
    return assignments.filter(assignment => assignment.course === courseId)
 }