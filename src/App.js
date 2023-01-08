import React, { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import Form from "./components/form";

var isRegistered = false;
//true-login page
//false- register page

const present_time = new Date().toLocaleTimeString();


function App(){

  const [time, setTime]=useState(present_time);
  // console.log(time);

  function change()
  {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);  
  }
  
  setInterval(change,1000);
  return(
    <div className="container">

    {/* { isRegistered && <Login></Login>}
    {  !(isRegistered) && <Register></Register>} */}

    <Form isRegister={isRegistered}></Form>
    
    <div>
        <h1> {time} </h1>
        <br></br>
        <button  className="time" onClick={change} > Get Time</button>

    </div>

    </div>
  )
}

export default App;

