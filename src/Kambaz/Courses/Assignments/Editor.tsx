export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <div>
                <label htmlFor="wd-name" >Assignment Name: </label>
            </div>
            <div>
                <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            </div>

            <div>
                <label htmlFor="wd-name">Assignment Description:</label>
            </div>
            <div>
                <textarea id="wd-description" rows={15} cols={60}>
                    The assignment is available online Submit a link to the landing page of your web application running on Netlify.
                </textarea>
            </div>

            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Total Points:</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group:</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS" selected> ASSIGNMENTS </option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As:</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage" selected> Percentage </option>
                            <option value="Points"> Points </option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type:</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Percentage" selected> Online </option>
                            <option value="Points"> In-Person </option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label>Online Entry Options:</label>
                    </td>
                    <td>
                        <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entries</label><br/>
                        
                        <input type="checkbox" name="check-genre" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URLs</label><br/>

                        <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                        <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotations</label><br/>

                        <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label><br/>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to:</label>
                    </td>
                    <td>
                        <select id="wd-assign-to">
                            <option value="Percentage" selected> All students </option>
                            <option value="Points"> Nishanth </option>
                            <option value="Points"> Michael </option>
                            <option value="Points"> Lud </option>
                            <option value="Points"> Connor </option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due Date:</label>
                    </td>
                    <td>
                        <input type="date" value="2025-01-11" id="wd-due-date"/><br/>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available From:</label>
                    </td>
                    <td>
                        <input type="date" value="2025-01-02" id="wd-available-from"/><br/>
                    </td>

                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Available Until:</label>
                    </td>
                    <td>
                        <input type="date" value="2025-03-21" id="wd-available-until"/><br/>
                    </td>
                </tr>
            </table>
            <br></br>
            <br></br>
            <div style={{ textAlign: "center" }}>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    );
}
