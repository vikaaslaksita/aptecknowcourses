import React from "react";
import "./sighup.css";
import image from './signup04.png';
function Sighup(){
    return(
        <div id="main-page-sighup">
            <div className="sighup">
                <h1>Sigh Up</h1>
                <div className="sighup-form">
                <i class="fa-light fa-user"></i>
                     <input type="text" id="username" placeholder="Username" /><br />
                     <input type="email" id="email" placeholder="Email" /><br />
                     <input type="password" id="password" placeholder="Password" /><br />
                     <input type="text" id="pg-degree" placeholder="PG Degree" /><input type="text" id="pg-degree%" placeholder="PG Degree %" /><br />
                     <input type="text" id="graduation-degree" placeholder="Graduation Degree" /><input type="text" id="graduation-degree%" placeholder="Graduation Degree %" /><br />
                     <input type="text" id="PUC-Diploma" placeholder="PUC / Diploma %" /><input type="text" id="10th%" placeholder="10th %" /><br />
                     <input type="button" value="Sigh Up" id="btn" /><br />
                     <a href="#">Already Have an Account? Sigh In</a>
                </div>
            </div>
            <div id="image">
               <div>
                <img src={image} alt="image" />
               </div>
            </div>
        </div>
    );
}
export default Sighup;