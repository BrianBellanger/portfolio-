import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>Projects by Brian Bellanger</h1>
      <div>
        <section className="d-flex justify-content-start">
          <img src="./img/projects.jpg" height={400} width={400} className="img-fluid" />
          <div>
            <div className="m-2 p-3">
              <h3>Freelancer</h3>
              <img src="./img/projects.jpg" height={200} width={200} className="img-fluid" />
              <p>Check out here:<a href="https://freelancr-excellence.herokuapp.com/" target="_blank" rel="noreferrer" >FreelancR</a></p>
               <p>GitHub: <a href="https://github.com/ydefrawi/FreelancR" target="_blank" rel="noreferrer" >GitHub Repo</a></p>
            </div>
<br />
            <a href="https://freelancr-excellence.herokuapp.com/" target="_blank" rel="noreferrer" >FreelancR</a><br />
                GitHub: <a href="https://github.com/ydefrawi/FreelancR" target="_blank" rel="noreferrer" >GitHub Repo</a><br /><br />

            <a href="https://mattjb97.github.io/Tangible-Tunes/" target="_blank" rel="noreferrer" >Tangible-Tunes</a><br />
                GitHub: <a href="https://github.com/mattjb97/Tangible-Tunes" target="_blank" rel="noreferrer" >GitHub Repo</a><br /><br />

            <a href="https://budget-bellanger.herokuapp.com/" target="_blank" rel="noreferrer" >Budget Tracker (PWA)</a><br />
                GitHub: <a href="https://github.com/BrianBellanger/budget-tracker" target="_blank" rel="noreferrer" >GitHub Repo</a><br /><br />

            <a href="https://brianbellanger.github.io/HW3-PWGenerator/" target="_blank" rel="noreferrer" >Password Generator</a><br />
                GitHub: <a href="https://github.com/BrianBellanger/HW3-PWGenerator/" target="_blank" rel="noreferrer" >GitHub Repo</a><br /><br />

            <a href="https://workout-tracker-bellanger.herokuapp.com/" target="_blank" rel="noreferrer" >Workout Tracker</a><br />
                GitHub: <a href="https://github.com/BrianBellanger/workout-tracker" target="_blank" rel="noreferrer" >GitHub Repo</a><br /><br />

            <a href="https://brianbellanger.github.io/HW5-TimeTracker/" target="_blank" rel="noreferrer" >Workout Tracker</a><br />
                GitHub: <a href="https://github.com/BrianBellanger/HW5-TimeTracker.git" target="_blank" rel="noreferrer" >GitHub Repo</a>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Projects;
