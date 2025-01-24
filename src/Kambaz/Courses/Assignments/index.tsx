import { BsGripVertical } from "react-icons/bs";
import "../../styles.css"
import { GoTriangleDown } from "react-icons/go";
import ModuleControlButtons from "./ModuleControlButtons";
import { MdOutlineEditNote } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";


export default function Assignments() {
    return (
        <div id="wd-assignments" className="assignments-container">
            <div className="d-flex justify-content-between align-items-center">

                <div className="search-container d-flex align-items-center">
                    <CiSearch className="search-icon me-2" />
                    <input
                        type="text"
                        id="wd-search-assignment"
                        placeholder="Search..."
                    />
                </div>

                <div>
                    <button
                        id="wd-add-module-btn"
                        className="btn btn-lg border me-2"
                        style={{ backgroundColor: "#e4e4e4", height: "48px" }}
                    >
                        <FaPlus className="position-relative me-2" style={{ bottom: "3px" }} />
                        Group
                    </button>
                    <button
                        id="wd-add-assignment-btn"
                        className="btn btn-lg btn-danger"
                        style={{ height: "48px" }}
                    >
                        <FaPlus className="position-relative me-2" style={{ bottom: "3px" }} />
                        Assignment
                    </button>
                </div>

            </div>
            <br />

            <ul id="wd-assignment-list" className="list-group rounded-0">

                <div className="wd-title p-3 ps-2 d-flex justify-content-between align-items-center" style={{
                    backgroundColor: "#e4e4e4"
                }}>
                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                    </div>

                    <div className="flex-grow-1 text-left">
                        <h4 className="mb-0"><GoTriangleDown /><b> ASSIGNMENTS</b></h4>
                    </div>

                    <div
                        className="px-3 py-1"
                        style={{
                            border: "1px solid",
                            borderRadius: "20px",
                            fontSize: "20px",
                            display: "inline-block",
                            whiteSpace: "nowrap",
                        }}
                    >
                        40% of Total
                    </div>

                    <div className="d-flex align-items-center">
                        <ModuleControlButtons />
                    </div>
                </div>


                <li className="wd-assignment-list-item list-group-item py-3 px-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="fs-1 me-2 text-secondary" />
                            <MdOutlineEditNote style={{ color: "green", fontSize: "24px" }} className="fs-1 me-3" />
                        </div>
                        <div className="flex-grow-1">
                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-dark text-decoration-none" style={{ fontSize: "20px" }}>
                                A1 - ENV + HTML
                            </a>
                            <p className="mb-1 text-muted">
                                <span style={{ color: "#dc3545" }}>Multiple Modules</span> | <b>Not available until</b> January 2 at 12:00AM |
                            </p>
                            <p className="mb-1 text-muted">
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
                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-dark text-decoration-none" style={{ fontSize: "20px" }}>
                                A2 - Bootstrap
                            </a>
                            <p className="mb-1 text-muted">
                                <span style={{ color: "#dc3545" }}>Multiple Modules</span> | <b>Not available until</b> February 13 at 12:00AM |
                            </p>
                            <p className="mb-1 text-muted">
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
                            <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-dark text-decoration-none" style={{ fontSize: "20px" }}>
                                A3 - JS + Express
                            </a>
                            <p className="mb-1 text-muted">
                                <span style={{ color: "#dc3545" }}>Multiple Modules</span> | <b>Not available until</b> March 22 at 12:00AM |
                            </p>
                            <p className="mb-1 text-muted">
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
