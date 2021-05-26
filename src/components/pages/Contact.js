import React from "react";

function Contact() {
  return (
    <div className="container">
      <h1>Contact Brian Bellanger</h1>
      <div>
        <section className="d-flex justify-content-start">
          <img src="./img/contact.jpg" height={750} width={750} className="img-fluid" />
          <div>
            <div className="m-2 p-3">
              <h3>Location</h3>
              <p>
                <strong>Houston, Texas</strong>
              </p>
            </div>
            <div className="m-2 p-3">
              <h3>Voice/Text</h3>
              <p>
              214-886-1227
              </p>
            </div>
            <div className="m-2 p-3">
              <h3>Email</h3>
              <p>
              <a href="mailto:brianjbellanger@gmail.com">BrianBellanger@gmail.com</a>
              </p>
            </div>
            <div className="m-2 p-3">
              <h3>LinkedIn</h3>
              <p>
              <a href="https://www.linkedin.com/in/brian-bellanger" target="_blank" rel="noreferrer" >www.LinkedIn.com/in/Brian-Bellanger</a>
              </p>
            </div>
            <div className="m-2 p-3">
              <h3>GitHub</h3>
              <p>
              <a href="https://github.com/BrianBellanger/" target="_blank" rel="noreferrer" >GitHub.com/BrianBellanger</a>
              </p>
            </div>
            <div className="m-2 p-3">
              <h3>Resume</h3>
              <p>
              <a href="./BrianBellangerResume.pdf" target="_blank" rel="noreferrer" >Brian Bellanger Resume</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
