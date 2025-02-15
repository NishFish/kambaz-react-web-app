import { Form, Button, Table, Card } from 'react-bootstrap';
import "../../styles.css"
import * as db from "../../Database";
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";



export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate()
    const assignments = db.assignments;

    function formatDateTime(dateStr: string): string {
        if (!dateStr) return "";

        const months: Record<string, string> = {
            "January": "01", "February": "02", "March": "03", "April": "04",
            "May": "05", "June": "06", "July": "07", "August": "08",
            "September": "09", "October": "10", "November": "11", "December": "12"
        };

        const regex = /(\w+) (\d+) at (\d+):(\d+)(AM|PM)/;
        const match = dateStr.match(regex);
        if (!match) return "";

        let [, month, day, hour, minute, period] = match;
        const monthNum = months[month as keyof typeof months];
        const year = new Date().getFullYear();

        let hourNum = parseInt(hour, 10);
        if (period === "PM" && hourNum !== 12) hourNum += 12;
        if (period === "AM" && hourNum === 12) hourNum = 0;

        return `${year}-${monthNum}-${day.padStart(2, "0")}T${hourNum.toString().padStart(2, "0")}:${minute}`;
    }


    return (
        <div id="wd-assignments-editor" className="p-4">
            {assignments
                .filter((assignments) => assignments._id === aid)
                .map((assignments) => (
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
                            <Form.Control type="text" id="wd-name" defaultValue={assignments.title} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="wd-description">Assignment Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                id="wd-description"
                                rows={15}
                                defaultValue={assignments.description}
                            />
                        </Form.Group>

                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td className="text-end align-top">
                                        <Form.Label htmlFor="wd-points">Total Points</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Control type="number" id="wd-points" defaultValue={assignments.points} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-end align-top">
                                        <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
                                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                        </Form.Select>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-end align-top">
                                        <Form.Label htmlFor="wd-display-grade-as">Display Grade As</Form.Label>
                                    </td>
                                    <td>
                                        <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
                                            <option value="Percentage">Percentage</option>
                                            <option value="Points">Points</option>
                                        </Form.Select>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-end align-top">
                                        <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
                                    </td>
                                    <td>
                                        <Card className="mb-3">
                                            <Card.Body className="mb-3 w-100 align-items-start">
                                                <Form.Group className="mb-3 w-100 text-start">
                                                    <Form.Select id="wd-submission-type" defaultValue="Online" >
                                                        <option value="Online">Online</option>
                                                        <option value="In-Person">In-Person</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <div className="mt-3 text-start">
                                                    <Form.Label><b>Online Entry Options</b></Form.Label>
                                                    <Form.Check type="checkbox" id="wd-text-entry" label="Text Entries" /><br />
                                                    <Form.Check type="checkbox" id="wd-website-url" label="Website URLs" /><br />
                                                    <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" /><br />
                                                    <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotations" /><br />
                                                    <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="text-end align-top">
                                        <Form.Label htmlFor="wd-submission-type">Assign</Form.Label>
                                    </td>
                                    <td>
                                        <Card className="mb-3">
                                            <Card.Body className="mb-3 w-100">
                                                <Form.Group className="mb-3 w-100 text-start">
                                                    <Form.Label htmlFor="wd-assign-to" ><b>Assign to</b></Form.Label>
                                                    <Form.Select id="wd-assign-to" defaultValue="Everyone" className="custom-dropdown">
                                                        <option value="Everyone">Everyone</option>
                                                        <option value="Nishanth">Nishanth</option>
                                                        <option value="Michael">Michael</option>
                                                        <option value="Lud">Lud</option>
                                                        <option value="Connor">Connor</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3 w-100 text-start">
                                                    <Form.Label htmlFor="wd-due-date"><b>Due</b></Form.Label>
                                                    <Form.Control type="datetime-local" id="wd-due-date" defaultValue={formatDateTime(assignments.due)} />
                                                </Form.Group>
                                                <Form.Group className="mb-3 d-flex text-start w-100">
                                                    <div className="me-2 w-50">
                                                        <Form.Label htmlFor="wd-available-from"><b>Available from</b></Form.Label>
                                                        <Form.Control type="datetime-local" id="wd-available-from" defaultValue={formatDateTime(assignments.release)} />
                                                    </div>
                                                    <div className="ms-2 w-50">
                                                        <Form.Label htmlFor="wd-available-until"><b>Until</b></Form.Label>
                                                        <Form.Control type="datetime-local" id="wd-available-until" defaultValue={formatDateTime(assignments.until)} />
                                                    </div>
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="text-end mt-4">
                            <hr />
                            <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2" style={{ backgroundColor: "#e4e4e4", textDecoration: "none" }}>
                                Cancel
                            </Link>
                            <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
                                Save
                            </Link>
                        </div>

                    </Form>
                ))
            }
        </div>
    );
}