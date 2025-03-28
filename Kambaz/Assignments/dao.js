import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAssignmentForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignments) => assignments.course === courseId);
}
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}
export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}
export function updateAssignment(AssignmentId, AssignmentUpdates) {
    const { assignments } = Database;
    const Assignment = assignments.find((Assignment) => Assignment._id === AssignmentId);
    Object.assign(Assignment, AssignmentUpdates);
    return Assignment;
}
