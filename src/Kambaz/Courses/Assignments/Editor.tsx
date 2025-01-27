import React from 'react';
import { Form, Button, Table, Card } from 'react-bootstrap';
import "../../styles.css"

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-4">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
                    <Form.Control type="text" id="wd-name" defaultValue="A1 - ENV + HTML" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="wd-description">Assignment Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        id="wd-description"
                        rows={15}
                        defaultValue="The assignment is available online. Submit a link to the landing page of your web application running on Netlify."
                    />
                </Form.Group>

                <Table borderless>
                    <tbody>
                        <tr>
                            <td className="text-end align-top">
                                <Form.Label htmlFor="wd-points">Total Points</Form.Label>
                            </td>
                            <td>
                                <Form.Control type="number" id="wd-points" defaultValue={100} />
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
                                            <Form.Control type="datetime-local" id="wd-due-date" defaultValue="2025-01-13T23:59" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 d-flex text-start w-100">
                                            <div className="me-2 w-50">
                                                <Form.Label htmlFor="wd-available-from"><b>Available from</b></Form.Label>
                                                <Form.Control type="datetime-local" id="wd-available-from" defaultValue="2025-01-06T00:00" />
                                            </div>
                                            <div className="ms-2 w-50">
                                                <Form.Label htmlFor="wd-available-until"><b>Until</b></Form.Label>
                                                <Form.Control type="datetime-local" id="wd-available-until" defaultValue="2025-03-21T00:00" />
                                            </div>
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <div className="text-end mt-4"><hr />
                    <Button variant="secondary" className="me-2" style={{ backgroundColor: "#e4e4e4" }}>Cancel</Button>
                    <Button variant="primary" className="btn-danger">Save</Button>
                </div>
            </Form>
        </div>
    );
}