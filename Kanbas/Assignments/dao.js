import database from "../Database/index.js"

export function findAssignmentsForCourse(courseId) {
    const { assignments } = database
    return assignments.filter(assignment => assignment.course === courseId)
}

export function createAssignment(course) {
    const newAssignment = {...course, _id:Date.now().toString()};
    database.assignments = [...database.assignments, newAssignment];
    return newAssignment;
}

export function deleteAssignment(assignmentId) {
    const { assignments } = database;
    database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}

// push