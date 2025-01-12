import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/bio101/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/biology.jpg" style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              display: 'block'
            }} />
            <div>
              <h3 style={{ margin: 0 }}> BIO101 Biology</h3>
              <p className="wd-dashboard-course-title" >
                Learn the inner workings of Biology.  </p>
              <button> Open Course </button>
            </div>
          </Link>
        </div>

        <br></br>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/mth101/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/math.jpg" style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              display: 'block'
            }} />
            <div>
              <h3 style={{ margin: 0 }}> MTH101 Math</h3>
              <p className="wd-dashboard-course-title">
                Understand the great world of math.  </p>
              <button> Open Course </button>
            </div>
          </Link>
        </div>

        <br></br>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/che101/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/chemistry.jpg" style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              display: 'block'
            }} />
            <div>
              <h3 style={{ margin: 0 }}> CHE101 Chemistry</h3>
              <p className="wd-dashboard-course-title">
                Discover the unique chemical compounds.  </p>
              <button> Open Course </button>
            </div>
          </Link>
        </div>

        <br></br>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/phy101/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/physics.jpg" style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              display: 'block'
            }} />
            <div>
              <h3 style={{ margin: 0 }}> PHY101 Physics </h3>
              <p className="wd-dashboard-course-title">
                Indulge in the gravity of knowledge.  </p>
              <button> Open Course </button>
            </div>
          </Link>
        </div>

        <br></br>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/spa101/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/spanish.jpg" style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              display: 'block'
            }} />
            <div>
              <h3 style={{ margin: 0 }}> SPA101 Spanish </h3>
              <p className="wd-dashboard-course-title">
                Learn the fun language of spanish.  </p>
              <button> Open Course </button>
            </div>
          </Link>
        </div>

        <br></br>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/psy101/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/psychology.jpg" style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              display: 'block'
            }} />
            <div>
              <h3 style={{ margin: 0 }}> PSY101 Psychology </h3>
              <p className="wd-dashboard-course-title">
                Understand the power of psychology.  </p>
              <button> Open Course </button>
            </div>
          </Link>
        </div>

        <br></br>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/man101/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/mandarin.jpg" style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              display: 'block'
            }} />
            <div>
              <h3 style={{ margin: 0 }}> MAN101 Mandarin </h3>
              <p className="wd-dashboard-course-title">
                Learn the historical language of mandarin.  </p>
              <button> Open Course </button>
            </div>
          </Link>
        </div>

        <br></br>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/pe101/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/pe.jpg" style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              display: 'block'
            }} />
            <div>
              <h3 style={{ margin: 0 }}> PE101 Physical Education </h3>
              <p className="wd-dashboard-course-title">
                Learn the exercises to get in shape.  </p>
              <button> Open Course </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
