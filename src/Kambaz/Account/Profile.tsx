import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-signin-screen">

      <h1>Profile</h1>

      <Form.Control defaultValue="gopinath.ni"
        placeholder="username"
        className="mb-2 wd-username" />

      <Form.Control defaultValue="randompass123"
        placeholder="password"
        type="password"
        className="mb-2 wd-password" />

      <Form.Control defaultValue="Nishanth"
        placeholder="First Name"
        className="mb-2 wd-firstname" />

      <Form.Control defaultValue="Gopinath"
        placeholder="Last Name"
        className="mb-2 wd-lastname" />

      <Form.Control defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className="mb-2" />

      <Form.Control defaultValue="gopinath.ni@northeastern.edu"
        type="email"
        id="wd-email"
        className="mb-2" />

      <Form.Group controlId="wd-role">
        <Form.Select defaultValue="USER">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
      </Form.Group> <br />

      <Link id="wd-signout-btn "
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100 mb-2">
        Sign out </Link>
    </div>
  );
}

/*
    <div id="wd-profile-screen">
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kambaz/Account/Signin" >Sign out</Link>
    </div>
    */