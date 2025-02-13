import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles.css"
import * as db from "./Database";


export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card className="shadow rounded-3 overflow-hidden mt-4">
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src={`/images/${course._id}.jpg`} variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>
                      {course.description} </Card.Text>
                    <p
                      className="card-subtext text-muted"
                      style={{ fontSize: '0.85rem', marginTop: '-15px' }}
                    >
                      {`${course.term} ${course.section}`}
                    </p>
                    <Button variant="primary"> Open Course </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
