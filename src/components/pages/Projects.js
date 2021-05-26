import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>Projects by Brian Bellanger</h1>
        <div>
          <section className="d-flex justify-content-start">
            <img src="./img/projects.jpg" height={750} width={750} className="img-fluid" />
              <div>
                <div className="m-2 p-3">
                      <a href="https://freelancr-excellence.herokuapp.com/" target="_blank" rel="noreferrer"><h3>Freelancer</h3>
                      <img src="./img/FreelancR.PNG" height={200} width={200} className="img-fluid" /></a>
                      <a href="https://github.com/ydefrawi/FreelancR" target="_blank" rel="noreferrer" >GitHub</a>
                </div>
                <div className="m-2 p-3">
                      <a href="https://mattjb97.github.io/Tangible-Tunes/" target="_blank" rel="noreferrer"><h3>Tangible-Tunes</h3>
                      <img src="./img/TangibleTunes.PNG" height={200} width={200} className="img-fluid" /></a>
                      <a href="https://github.com/mattjb97/Tangible-Tunes" target="_blank" rel="noreferrer" >GitHub</a>
                </div>
                <div className="m-2 p-3">
                      <a href="https://budget-bellanger.herokuapp.com/" target="_blank" rel="noreferrer"><h3>Budget Tracker</h3>
                      <img src="./img/BudgetTracker.PNG" height={200} width={200} className="img-fluid" /></a>
                      <a href="https://github.com/BrianBellanger/budget-tracker" target="_blank" rel="noreferrer" >GitHub</a>
                </div>
                <div className="m-2 p-3">
                      <a href="https://brianbellanger.github.io/HW3-PWGenerator/" target="_blank" rel="noreferrer"><h3>Password Generator</h3>
                      <img src="./img/PasswordGenerator.PNG" height={200} width={200} className="img-fluid" /></a>
                      <a href="https://github.com/BrianBellanger/HW3-PWGenerator/" target="_blank" rel="noreferrer" >GitHub</a>
                </div>
                <div className="m-2 p-3">
                      <a href="https://workout-tracker-bellanger.herokuapp.com/" target="_blank" rel="noreferrer"><h3>Workout Tracker</h3>
                      <img src="./img/FitnessTracker.PNG" height={200} width={200} className="img-fluid" /></a>
                      <a href="https://github.com/BrianBellanger/workout-tracker" target="_blank" rel="noreferrer" >GitHub</a>
                </div>
                <div className="m-2 p-3">
                      <a href="https://brianbellanger.github.io/HW5-TimeTracker/" target="_blank" rel="noreferrer"><h3>Time Tracker</h3>
                      <img src="./img/FitnessTracker.PNG" height={200} width={200} className="img-fluid" /></a>
                      <a href="https://github.com/BrianBellanger/HW5-TimeTracker.git" target="_blank" rel="noreferrer" >GitHub</a>
                </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Projects;
