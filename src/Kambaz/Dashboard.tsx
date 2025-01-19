import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5">

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
          <div className="card shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/bio101/Home"
            >
              <img
                src="/images/biology.jpg"
                className="card-img-top"
                style={{
                  width: '270px',
                  height: '150px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                alt="BIO101 Biology"
              />
              <div className="card-body">
                <h6
                  style={{ margin: 0 }}
                  className="wd-dashboard-course-title card-title"
                >
                  <b>BIO101 Biology</b>
                </h6>
                <p className="wd-dashboard-course-title card-text">
                  Learn the inner workings of Biology.
                </p>
                <p className="card-subtext text-muted" style={{ fontSize: "0.85rem", marginTop: "-15px" }}>
                  Spring 2025 Section 1
                </p>
                <button className="btn btn-primary"> Open Course </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
          <div className="card shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/mth101/Home"
            >
              <img
                src="/images/math.jpg"
                className="card-img-top"
                style={{
                  width: '270px',
                  height: '150px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                alt="MTH101 Math"
              />
              <div className="card-body">
                <h6
                  style={{ margin: 0 }}
                  className="wd-dashboard-course-title card-title"
                >
                  <b>MTH101 Math</b>
                </h6>
                <p className="wd-dashboard-course-title card-text">
                  Understand the great world of math.
                </p>
                <p className="card-subtext text-muted" style={{ fontSize: "0.85rem", marginTop: "-15px" }}>
                  Spring 2025 Section 1
                </p>
                <button className="btn btn-primary"> Open Course </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
          <div className="card shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/che101/Home"
            >
              <img
                src="/images/chemistry.jpg"
                className="card-img-top"
                style={{
                  width: '270px',
                  height: '150px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                alt="CHE101 Chemistry"
              />
              <div className="card-body">
                <h6
                  style={{ margin: 0 }}
                  className="wd-dashboard-course-title card-title"
                >
                  <b>CHE101 Chemistry</b>
                </h6>
                <p className="wd-dashboard-course-title card-text">
                  Discover the unique chemical compounds.
                </p>
                <p className="card-subtext text-muted" style={{ fontSize: "0.85rem", marginTop: "-15px" }}>
                  Spring 2025 Section 1
                </p>
                <button className="btn btn-primary"> Open Course </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
          <div className="card shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/phy101/Home"
            >
              <img
                src="/images/physics.jpg"
                className="card-img-top"
                style={{
                  width: '270px',
                  height: '150px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                alt="PHY101 Physics"
              />
              <div className="card-body">
                <h6
                  style={{ margin: 0 }}
                  className="wd-dashboard-course-title card-title"
                >
                  <b>PHY101 Physics</b>
                </h6>
                <p className="wd-dashboard-course-title card-text">
                  Indulge in the gravity of knowledge.
                </p>
                <p className="card-subtext text-muted" style={{ fontSize: "0.85rem", marginTop: "-15px" }}>
                  Spring 2025 Section 1
                </p>
                <button className="btn btn-primary"> Open Course </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
          <div className="card shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/spa101/Home"
            >
              <img
                src="/images/spanish.jpg"
                className="card-img-top"
                style={{
                  width: '270px',
                  height: '150px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                alt="SPA101 Spanish"
              />
              <div className="card-body">
                <h6
                  style={{ margin: 0 }}
                  className="wd-dashboard-course-title card-title"
                >
                  <b>SPA101 Spanish</b>
                </h6>
                <p className="wd-dashboard-course-title card-text">
                  Learn the fun language of Spanish.
                </p>
                <p className="card-subtext text-muted" style={{ fontSize: "0.85rem", marginTop: "-15px" }}>
                  Spring 2025 Section 1
                </p>
                <button className="btn btn-primary"> Open Course </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
          <div className="card shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/psy101/Home"
            >
              <img
                src="/images/psychology.jpg"
                className="card-img-top"
                style={{
                  width: '270px',
                  height: '150px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                alt="PSY101 Psychology"
              />
              <div className="card-body">
                <h6
                  style={{ margin: 0 }}
                  className="wd-dashboard-course-title card-title"
                >
                  <b>PSY101 Psychology</b>
                </h6>
                <p className="wd-dashboard-course-title card-text">
                  Understand the power of psychology.
                </p>
                <p className="card-subtext text-muted" style={{ fontSize: "0.85rem", marginTop: "-15px" }}>
                  Spring 2025 Section 1
                </p>
                <button className="btn btn-primary"> Open Course </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
          <div className="card shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/man101/Home"
            >
              <img
                src="/images/mandarin.jpg"
                className="card-img-top"
                style={{
                  width: '270px',
                  height: '150px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                alt="MAN101 Mandarin"
              />
              <div className="card-body">
                <h6
                  style={{ margin: 0 }}
                  className="wd-dashboard-course-title card-title"
                >
                  <b>MAN101 Mandarin</b>
                </h6>
                <p className="wd-dashboard-course-title card-text">
                  Learn the historical language of Mandarin.
                </p>
                <p className="card-subtext text-muted" style={{ fontSize: "0.85rem", marginTop: "-15px" }}>
                  Spring 2025 Section 1
                </p>
                <button className="btn btn-primary"> Open Course </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
          <div className="card shadow rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kambaz/Courses/pe101/Home"
            >
              <img
                src="/images/pe.jpg"
                className="card-img-top"
                style={{
                  width: '270px',
                  height: '150px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                alt="PE101 Physical Education"
              />
              <div className="card-body">
                <h6
                  style={{ margin: 0 }}
                  className="wd-dashboard-course-title card-title"
                >
                  <b>PE101 Physical Education</b>
                </h6>
                <p className="wd-dashboard-course-title card-text">
                  Learn the exercises to get in shape.
                </p>
                <p className="card-subtext text-muted" style={{ fontSize: "0.85rem", marginTop: "-15px" }}>
                  Spring 2025 Section 1
                </p>
                <button className="btn btn-primary"> Open Course </button>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
