import React from 'react';
import image from './enquire02.png';
import "./enquire.css";

function EnquireNow(){

        function Validation(){
            var name = document.getElementById('name').value;
            var mobileno = document.getElementById('mobileno').value;
            var hdegree = document.getElementById('highestdegree').value;
            var course = document.getElementById('course').value;
        
            if(name.length==0){
                document.getElementById("name1").innerText="*Please fill this field*";
            }
            else{
                document.getElementById("name1").innerText="";
            }
            if(mobileno.length==0){
                document.getElementById("mobile").innerText="*Please fill this field*";
            }
            else{
                document.getElementById("mobile").innerText="";
            }
            if(hdegree.length==0){
                document.getElementById("hdegree").innerText="*Please fill this field*";
            }
            else{
                document.getElementById("hdegree").innerText="";
                }
                if(course.length==0){
                    document.getElementById("courses").innerText="*Please fill this field*";
                }
                else{
                    document.getElementById("courses").innerText="";
                    alert("Thankyou for fill the Enquire form we will contact you soon.")
                    }
        }
    return(
       <div id="main-container">
        <dir id="right-bar">
              <img src={image} alt="image" />
        </dir>
        <div id='enquire-container'>
            <div >
                <h1>We dont SPAM your details</h1>
            </div>
            <div className='form'>
                 <form action="submit">
                     <label htmlFor="text">Name</label><br />
                      <input type="text" id='name' required />
                      <span id='name1' color='red'></span><br />
                      <label htmlFor="number">Mobile Number</label><br />
                      <input type="number" id='mobileno' required />
                      <span id='mobile' color='red'></span><br />
                      <label htmlFor="text">Highest Degree</label><br />
                      <input type="text" id='highestdegree' required />
                      <span id='hdegree' color='red'></span><br />
                      <label htmlFor="text">Course Interested</label><br />
                      <input type="text" id='course' required />
                      <span id='courses' color='red'></span><br /><br />
                      <button type='submit' id='submit-btn' onClick={Validation}>Submit</button>  
                 </form>
            </div>
        </div>
       </div>
    );
}
export default EnquireNow;

