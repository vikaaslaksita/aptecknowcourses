import React from "react";
import "./style.css";
import logo from "./Appteknowlogo.png";

function Apteknow() {
  return (
    <div>
      <div id="main-container">
        <div id="header">
          <nav id="navbar">
            <ul>
              <a href="index01.js"><img src={logo} alt="logo" /></a>
            </ul>
            <div class="dropdown">
              <button>Courses</button>
              <div class="dropdown-options">
                <a href="#">IT Courses</a>
                <a href="#">Non-IT Courses</a>
                <a href="#">Complementary</a>
              </div>
            </div>
 
            <div class="dropdown">
              <button>Internships</button>
              <div class="dropdown-options">
                <a href="#">HCL</a>
              </div>
            </div>
            <div class="dropdown">
              <button>Companies</button>
              <div class="dropdown-options">
                <a href="#">Hire From Us</a>
                <a href="#">HTD Model</a>
              </div>
            </div>
            <div class="dropdown">
              <button>Colleges</button>
              <div class="dropdown-options">
                <a href="#">Technical Training</a>
                <a href="#">Softs kills Training</a>
                <a href="#">On Campus Drives</a>
              </div>
            </div>
            <div class="dropdown">
              <button>Branches</button>
              <div class="dropdown-options">
                <a href="#">BTM Layout</a>
                <a href="#">Mysore</a>
                <a href="#">Nelamangala</a>
              </div>
            </div>
            <div class="dropdown">
              <button>Placements</button>
              <div class="dropdown-options">
                <a href="#">Ongoing Interviews</a>
                <a href="#">Recent Placements</a>
              </div>
            </div>
            <ul className="btn">
              <button className="navbarbtn">
                <a href="welcomeback.js">Sign In</a>&nbsp;<span>|</span>&nbsp;
                <a href="sighup.js">Sign Up</a>
              </button>
            </ul>
          </nav>
        </div>
        <div id="container">
          <h2>Not Getting Job?</h2>
          <p>
            Join us to get Interviews with <br />
            Internship and training till <br />
            you get the job
          </p>
          <button className="enquirebtn">
            <a href="enquirenow.js" target="_blank">
              ENQUIRE NOW{" "}
            </a>
          </button>
        </div>
        <div className="con">
             <a href="https://wa.me/9131934880" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  );
}
export default Apteknow;
