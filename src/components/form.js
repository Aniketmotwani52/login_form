import React, { useState } from "react";
import Input from "./input";



function Form(props)
{
    //Here we are using destructor as useState gives us an array of two objects one is variable name and anoher is a function 

    const [colorr,setColorr]=useState("white");
    
    const [title, setTitle]=useState("");

    const [fname,setFName]=useState("");
    const [lName,setLName]=useState("");

    function changeToBlack()
    {
        setColorr("black");
        // document.getElementById("buttons").style.backgroundColor="black";
    }

    function changeToWhite()
    {
        setColorr("white");

        // document.getElementById("buttons").style.backgroundColor="white";
    }

    const myStyle={
        backgroundColor : colorr
    };
    
    function gotClicked(event)
    {
        setTitle(fname+" "+lName);
        event.preventDefault();
        //this prenevts the default behaviour of submit button 
    }
    function handleFChange(event)
    {
        setFName(event.target.value);
    }

    function handleLChange(event)
    {
        setLName(event.target.value);
    }

    return(
        <div>
            <form className="form">


            <Input type="text" placeholder="Username"></Input>
            <Input type="password" placeholder="Password"></Input>
            {!(props.isRegister) && <Input type="password" placeholder="Confirm Password"></Input>}
            <button type="submit">{props.isRegister ? "Login" : "Register"}</button> 
            
            
         </form>

         <br></br>

         <form>

            <h1> Hello {title}</h1>
            <br></br>

            <input type="text" placeholder="Your Name" onChange={handleFChange} value={fname}></input>
            <input type="text" placeholder="Your Name" onChange={handleLChange} value={lName}></input>
            
            <button  style={myStyle} onMouseOver={changeToBlack} onMouseOut={changeToWhite} onClick={gotClicked}> Enter </button>

         </form>  
        </div>
    )

}


export default Form;


