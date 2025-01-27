import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
        <Col style={{ width: '270px' }}>
          <Card className="shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/bio101/Home"
            >
              <Card.Img
                variant="top"
                src="/images/biology.jpg"
                style={{
                  width: '270px',
                  height: '150px',
                  display: 'block',
                }}
                alt="BIO101 Biology"
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  <b>BIO101 Biology</b>
                </Card.Title>
                <Card.Text className="wd-dashboard-course-title">
                  Learn the inner workings of Biology.
                </Card.Text>
                <p
                  className="card-subtext text-muted"
                  style={{ fontSize: '0.85rem', marginTop: '-15px' }}
                >
                  Spring 2025 Section 1
                </p>
                <Button variant="primary">Open Course</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col style={{ width: '270px' }}>
          <Card className="shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/mth101/Home"
            >
              <Card.Img
                variant="top"
                src="/images/math.jpg"
                style={{
                  width: '270px',
                  height: '150px',
                  display: 'block',
                }}
                alt="MTH101 Math"
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  <b>MTH101 Math</b>
                </Card.Title>
                <Card.Text className="wd-dashboard-course-title">
                  Understand the great world of math.
                </Card.Text>
                <p
                  className="card-subtext text-muted"
                  style={{ fontSize: '0.85rem', marginTop: '-15px' }}
                >
                  Spring 2025 Section 1
                </p>
                <Button variant="primary">Open Course</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col style={{ width: '270px' }}>
          <Card className="shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/che101/Home"
            >
              <Card.Img
                variant="top"
                src="/images/chemistry.jpg"
                style={{
                  width: '270px',
                  height: '150px',
                  display: 'block',
                }}
                alt="CHE101 Chemistry"
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  <b>CHE101 Chemistry</b>
                </Card.Title>
                <Card.Text className="wd-dashboard-course-title">
                  Discover the unique chemical compounds.
                </Card.Text>
                <p
                  className="card-subtext text-muted"
                  style={{ fontSize: '0.85rem', marginTop: '-15px' }}
                >
                  Spring 2025 Section 1
                </p>
                <Button variant="primary">Open Course</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col style={{ width: '270px' }}>
          <Card className="shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/phy101/Home"
            >
              <Card.Img
                variant="top"
                src="/images/physics.jpg"
                style={{
                  width: '270px',
                  height: '150px',
                  display: 'block',
                }}
                alt="PHY101 Physics"
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  <b>PHY101 Physics</b>
                </Card.Title>
                <Card.Text className="wd-dashboard-course-title">
                  Indulge in the gravity of knowledge.
                </Card.Text>
                <p
                  className="card-subtext text-muted"
                  style={{ fontSize: '0.85rem', marginTop: '-15px' }}
                >
                  Spring 2025 Section 1
                </p>
                <Button variant="primary">Open Course</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col style={{ width: '270px' }}>
          <Card className="shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/spa101/Home"
            >
              <Card.Img
                variant="top"
                src="/images/spanish.jpg"
                style={{
                  width: '270px',
                  height: '150px',
                  display: 'block',
                }}
                alt="SPA101 Spanish"
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  <b>SPA101 Spanish</b>
                </Card.Title>
                <Card.Text className="wd-dashboard-course-title">
                  Learn the fun language of Spanish.
                </Card.Text>
                <p
                  className="card-subtext text-muted"
                  style={{ fontSize: '0.85rem', marginTop: '-15px' }}
                >
                  Spring 2025 Section 1
                </p>
                <Button variant="primary">Open Course</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col style={{ width: '270px' }}>
          <Card className="shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/psy101/Home"
            >
              <Card.Img
                variant="top"
                src="/images/psychology.jpg"
                style={{
                  width: '270px',
                  height: '150px',
                  display: 'block',
                }}
                alt="PSY101 Psychology"
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  <b>PSY101 Psychology</b>
                </Card.Title>
                <Card.Text className="wd-dashboard-course-title">
                  Understand the power of psychology.
                </Card.Text>
                <p
                  className="card-subtext text-muted"
                  style={{ fontSize: '0.85rem', marginTop: '-15px' }}
                >
                  Spring 2025 Section 1
                </p>
                <Button variant="primary">Open Course</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col style={{ width: '270px' }}>
          <Card className="shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/man101/Home"
            >
              <Card.Img
                variant="top"
                src="/images/mandarin.jpg"
                style={{
                  width: '270px',
                  height: '150px',
                  display: 'block',
                }}
                alt="MAN101 Mandarin"
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  <b>MAN101 Mandarin</b>
                </Card.Title>
                <Card.Text className="wd-dashboard-course-title">
                  Learn the historical language of Mandarin.
                </Card.Text>
                <p
                  className="card-subtext text-muted"
                  style={{ fontSize: '0.85rem', marginTop: '-15px' }}
                >
                  Spring 2025 Section 1
                </p>
                <Button variant="primary">Open Course</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col style={{ width: '270px' }}>
          <Card className="shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/pe101/Home"
            >
              <Card.Img
                variant="top"
                src="/images/pe.jpg"
                style={{
                  width: '270px',
                  height: '150px',
                  display: 'block',
                }}
                alt="PE101 Physical Education"
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  <b>PE101 Physical Education</b>
                </Card.Title>
                <Card.Text className="wd-dashboard-course-title">
                  Learn the exercises to get in shape.
                </Card.Text>
                <p
                  className="card-subtext text-muted"
                  style={{ fontSize: '0.85rem', marginTop: '-15px' }}
                >
                  Spring 2025 Section 1
                </p>
                <Button variant="primary">Open Course</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
