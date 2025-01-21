import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div
            id="wd-people-table"
            style={{
                fontSize: "1.0rem", // Smaller text size
                marginLeft: "0.5rem", // Reduce left margin
                marginRight: "0.5rem", // Reduce right margin
            }}
        >
            <Table
                striped
                className="table-sm"
                style={{
                    margin: "0", // Eliminate default table margins
                }}
            >
                <thead>
                    <tr>
                        <th style={{ padding: "0.25rem" }}>Name</th>
                        <th style={{ padding: "0.25rem" }}>Login ID</th>
                        <th style={{ padding: "0.25rem" }}>Section</th>
                        <th style={{ padding: "0.25rem" }}>Role</th>
                        <th style={{ padding: "0.25rem" }}>Last Activity</th>
                        <th style={{ padding: "0.25rem" }}>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            className="wd-full-name text-nowrap"
                            style={{ padding: "0.25rem" }}
                        >
                            <FaUserCircle
                                className="me-2 text-secondary"
                                style={{ fontSize: "1.0rem" }}
                            />
                            <span className="wd-first-name">Tony</span>{" "}
                            <span className="wd-last-name">Stark</span>
                        </td>
                        <td style={{ padding: "0.25rem" }}>001234561S</td>
                        <td style={{ padding: "0.25rem" }}>S101</td>
                        <td style={{ padding: "0.25rem" }}>STUDENT</td>
                        <td style={{ padding: "0.25rem" }}>2020-10-01</td>
                        <td style={{ padding: "0.25rem" }}>10:21:32</td>
                    </tr>
                    <tr>
                        <td
                            className="wd-full-name text-nowrap"
                            style={{ padding: "0.25rem" }}
                        >
                            <FaUserCircle
                                className="me-2 text-secondary"
                                style={{ fontSize: "1.0rem" }}
                            />
                            <span className="wd-first-name">Bruce</span>{" "}
                            <span className="wd-last-name">Wayne</span>
                        </td>
                        <td style={{ padding: "0.25rem" }}>001234562B</td>
                        <td style={{ padding: "0.25rem" }}>S102</td>
                        <td style={{ padding: "0.25rem" }}>STUDENT</td>
                        <td style={{ padding: "0.25rem" }}>2020-10-02</td>
                        <td style={{ padding: "0.25rem" }}>12:15:45</td>
                    </tr>
                    <tr>
                        <td
                            className="wd-full-name text-nowrap"
                            style={{ padding: "0.25rem" }}
                        >
                            <FaUserCircle
                                className="me-2 text-secondary"
                                style={{ fontSize: "1.0rem" }}
                            />
                            <span className="wd-first-name">Steve</span>{" "}
                            <span className="wd-last-name">Rogers</span>
                        </td>
                        <td style={{ padding: "0.25rem" }}>001234563S</td>
                        <td style={{ padding: "0.25rem" }}>S103</td>
                        <td style={{ padding: "0.25rem" }}>STUDENT</td>
                        <td style={{ padding: "0.25rem" }}>2020-10-03</td>
                        <td style={{ padding: "0.25rem" }}>15:30:25</td>
                    </tr>
                    <tr>
                        <td
                            className="wd-full-name text-nowrap"
                            style={{ padding: "0.25rem" }}
                        >
                            <FaUserCircle
                                className="me-2 text-secondary"
                                style={{ fontSize: "1.0rem" }}
                            />
                            <span className="wd-first-name">Natasha</span>{" "}
                            <span className="wd-last-name">Romanoff</span>
                        </td>
                        <td style={{ padding: "0.25rem" }}>001234564N</td>
                        <td style={{ padding: "0.25rem" }}>S104</td>
                        <td style={{ padding: "0.25rem" }}>STUDENT</td>
                        <td style={{ padding: "0.25rem" }}>2020-10-04</td>
                        <td style={{ padding: "0.25rem" }}>08:45:00</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
