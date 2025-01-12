export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search..."
                id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Create Group</button>
            <button id="wd-add-assignment">+ Create Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button></h3>
            <ul id="wd-assignment-list">

                <br></br>

                <li className="wd-assignment-list-item" style={{ listStyleType: "none" }}>
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A1 - ENV + HTML
                    </a>
                    <p style={{ margin: "0" }}>Multiple Modules | Not available until <b>January 2 at 12:00AM</b></p>
                    <p style={{ margin: "0" }}>Due <b>January 21 at 11:59PM</b></p>
                    <p style={{ margin: "0" }}><b>100 pts</b></p>
                </li>

                <br></br>

                <li className="wd-assignment-list-item" style={{ listStyleType: "none" }}>
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A2 - Boostrap
                    </a>
                    <p style={{ margin: "0" }}>Multiple Modules | Not available until <b>February 13 at 12:00AM</b></p>
                    <p style={{ margin: "0" }}>Due <b>March 2 at 11:59PM</b></p>
                    <p style={{ margin: "0" }}><b>100 pts</b></p>
                </li>

                <br></br>

                <li className="wd-assignment-list-item" style={{ listStyleType: "none" }}>
                    <a href="#/Kambaz/Courses/1234/Assignments/123"
                        className="wd-assignment-link" >
                        A3 - JS + Express
                    </a>
                    <p style={{ margin: "0" }}>Multiple Modules | Not available until <b>January 22 at 12:00AM</b></p>
                    <p style={{ margin: "0" }}>Due <b>February 12 at 11:59PM</b></p>
                    <p style={{ margin: "0" }}><b>100 pts</b></p>
                </li>

            </ul>
        </div>
    );
}
