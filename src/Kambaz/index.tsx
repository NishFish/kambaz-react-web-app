import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import * as courseClient from "./Courses/client";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import Session from "./Account/Session";
import * as userClient from "./Account/client";


export default function Kambaz() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const fetchCourses = async () => {
    try {
      //had to change this to fetch all courses instead as it conflicts with the enrollment task
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const [enrollments, setEnrollments] = useState<any[]>([]);
  const fetchEneollments = async () => {
    try {
      const enrollment = await courseClient.fetchAllEnrollments();
      setEnrollments(enrollment);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEneollments();

  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number", image: "/images/default.jpg",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const enrollCourse = async (courseId: string) => {
    try {
      const newEnrollment = await courseClient.enrollCourse(currentUser._id, courseId);
      setEnrollments((prevEnrollments) => [...prevEnrollments, newEnrollment]);
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const unenrollCourse = async (courseId: string) => {
    try {
      await courseClient.unenrollCourse(currentUser._id, courseId);
      setEnrollments((prevEnrollments) =>
        prevEnrollments.filter(enrollment => enrollment.course !== courseId)
      );
    } catch (error) {
      console.error("Error unenrolling from course:", error);
    }
  };


  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="Dashboard" element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  enrollments={enrollments}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  enrollCourse={enrollCourse}
                  unenrollCourse={unenrollCourse}
                />
              </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
