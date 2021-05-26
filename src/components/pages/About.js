import React from "react";

function About() {
  return (
    <div className="container">
      <h1>About Brian Bellanger</h1>
      <div>
        <section className="d-flex justify-content-start">
          <img src="./img/resume.jpg" height={750} width={750} className="img-fluid" />
          <div>
            <div className="m-2 p-3">
              <h3>Education</h3>
              <p>
                <strong>Texas AM University - College Station</strong><br />
                        Master in Business Administration<br />
                        Specialization in Information Technology
                    </p>
              <p>
                <strong>The University of Texas at Austin</strong><br />
                        Bachelor of Arts<br />
                        Human Biology, Premedical
                    </p>
              <p>
                <strong>University of Houston</strong><br />
                        Project Management Fundamentals
                    </p>
              <p>
                <strong>Currently attending:<br />
                        The University of Texas at Austin</strong><br />
                        Full Stack Coding Boot Camp
                    </p>
            </div>
            <div className="m-2 p-3">
              <h3>Experience</h3>
              <p>
                2001-2020
                Greystar
                IT Manager
                    </p>
              <p>
                2000-2001
                State of Texas
                Internal Technology Consultant
                    </p>
              <p>
                1996-1998
                PPD Pharmaco
                Project Manager
                    </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
