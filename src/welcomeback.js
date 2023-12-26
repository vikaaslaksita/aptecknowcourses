import React from 'react';
import './welcome.css';
import image from './welcome03.png'

    
function WelcomeBack(){
    const Login = () => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let checkbox = document.getElementById("checkbox").Checked;
        if(username === "admin" && password === "<PASSWORD>"){
            window.location.href = "/index01.js";
            }
            else{
                alert("Invalid Username or Password");
                }
    }
    return(
        <div id="loginform">
            <div className='left-bar'>
                <h1>Welcome Back</h1>
                <div>
                    <i class="fa-regular fa-circle-user"></i>
                    <input type="text" id='username' placeholder='Username'/><br/>
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" id="password" placeholder='Password'/><br/>   
                    <input type="checkbox" id='checkbox'/><span>&nbsp;Remember Password</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">Forgot Password?</a><br />
                    <input type="button"  id="login" value="Login" onClick={Login}/><br />
                    <span><a href="#">Don't have an account? Sign Up</a></span>
                </div>
            </div>
            <div className='right-bar'>
                <div className="img-bar">
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
    );
}
export default WelcomeBack;