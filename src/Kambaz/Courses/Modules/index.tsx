import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import "../../styles.css"
import { Dropdown, ListGroup } from "react-bootstrap";

export default function Modules() {
  return (
    <div>
      <div id="wd-modules-controls" className="d-flex align-items-center flex-wrap text-nowrap">
        <button id="wd-collapse-all" className="btn btn-lg custom-dark-grey-btn me-2" type="button" style={{
          height: "48px",
          marginTop: "1px"
        }}>
          Collapse All
        </button>
        <button id="wd-view-progress" className="btn btn-lg custom-dark-grey-btn me-2" type="button" style={{
          height: "48px",
          marginTop: "1px"
        }}>
          View Progress
        </button>
        <div className="dropdown">
          <Dropdown>
            <Dropdown.Toggle
              id="wd-publish-all-btn"
              className="btn btn-lg custom-dark-grey-btn me-2"
              type="button"
              aria-expanded="false"
              style={{
                height: "48px",
                marginTop: "1px"
              }}
            >
              <GreenCheckmark />
              Publish All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <ListGroup variant="flush">
                <ListGroup.Item as="a" id="wd-publish-all-modules-and-items-btn" href="#" className="dropdown-item d-flex align-items-center">
                  <GreenCheckmark />
                  Publish all modules and items
                </ListGroup.Item>
                <ListGroup.Item as="a" id="wd-publish-modules-only-button" href="#" className="dropdown-item d-flex align-items-center">
                  <GreenCheckmark />
                  Publish modules only
                </ListGroup.Item>
                <ListGroup.Item as="a" id="wd-unpublish-all-modules-and-items" href="#" className="dropdown-item">
                  <span className="text-danger me-2">&#x274C;</span>
                  Unpublish all modules and items
                </ListGroup.Item>
                <ListGroup.Item as="a" id="wd-unpublish-modules-only" href="#" className="dropdown-item">
                  <span className="text-danger me-2">&#x274C;</span>
                  Unpublish modules only
                </ListGroup.Item>
              </ListGroup>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger me-2"
          style={{
            height: "48px",
            marginTop: "1px"
          }}
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "3px" }} />
          Module
        </button>
      </div>

      <br></br>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Formatting Web content with Headings and</li>
                <li className="wd-content-item">Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>


    </div >
  );
}

