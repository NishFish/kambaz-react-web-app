import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findAllenrollments() {
    return Database.enrollments;
}
export function enrollCourse(userId, courseId) {
    const { enrollments } = Database;
    const newEnrollment = { user: userId, course: courseId };
    Database.enrollments.push(newEnrollment);
    return newEnrollment;
}


export function unenrollCourse(userId, courseId) {
    if (!Database.enrollments) return false;

    Database.enrollments = Database.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
    );
    return true;
}
