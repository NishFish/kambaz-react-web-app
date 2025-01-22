import { BsGripVertical } from "react-icons/bs";
import "../../styles.css"
import ModuleControlButtons from "./ModuleControlButtons";
import { MdOutlineEditNote } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";


export default function Assignments() {
    return (
        <div id="wd-assignments" className="assignments-container">
            <input placeholder="Search..."
                id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Create Group</button>
            <button id="wd-add-assignment">+ Create Assignment</button>



            <ul id="wd-assignment-list" className="list-group rounded-0">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    ASSIGNMENTS 40% of Total
                    <ModuleControlButtons />
                </div>

                <li className="wd-assignment-list-item list-group-item py-3 px-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="fs-1 me-2 text-secondary" />
                            <MdOutlineEditNote style={{ color: "green", fontSize: "24px" }} className="fs-1 me-3" />
                        </div>
                        <div className="flex-grow-1">
                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-dark text-decoration-none">
                                A1 - ENV + HTML
                            </a>
                            <p className="mb-1 text-muted small">
                                <span style={{ color: "#dc3545" }}>Multiple Modules</span> | <b>Not available until</b> January 2 at 12:00AM
                            </p>
                            <p className="mb-1 text-muted small">
                                <b>Due</b> January 21 at 11:59PM | 100 points
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <AssignmentControlButtons />
                        </div>
                    </div>
                </li>

                <li className="wd-assignment-list-item list-group-item py-3 px-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="fs-1 me-2 text-secondary" />
                            <MdOutlineEditNote style={{ color: "green", fontSize: "24px" }} className="fs-1 me-3" />
                        </div>
                        <div className="flex-grow-1">
                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-dark text-decoration-none">
                                A2 - Bootstrap
                            </a>
                            <p className="mb-1 text-muted small">
                                <span style={{ color: "#dc3545" }}>Multiple Modules</span> | <b>Not available until</b> February 13 at 12:00AM
                            </p>
                            <p className="mb-1 text-muted small">
                                <b>Due</b> March 2 at 11:59PM | 100 points
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <AssignmentControlButtons />
                        </div>
                    </div>
                </li>

                <li className="wd-assignment-list-item list-group-item py-3 px-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="fs-1 me-2 text-secondary" />
                            <MdOutlineEditNote style={{ color: "green", fontSize: "24px" }} className="fs-1 me-3" />
                        </div>
                        <div className="flex-grow-1">
                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-dark text-decoration-none">
                                A3 - JS + Express
                            </a>
                            <p className="mb-1 text-muted small">
                                <span style={{ color: "#dc3545" }}>Multiple Modules</span> | <b>Not available until</b> March 22 at 12:00AM
                            </p>
                            <p className="mb-1 text-muted small">
                                <b>Due</b> March 31 at 11:59PM | 100 points
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <AssignmentControlButtons />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
