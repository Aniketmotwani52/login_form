import React from "react";
import Input from "./input";

function register(){
    return(
        <div>
         <form className="form">
            <Input type="text" placeholder="Username"></Input>
            <Input type="password" placeholder="Password"></Input>
            <Input type="password" placeholder="Confirm Password"></Input>
            <button type="submit">Register</button>
         </form>   
        </div>
    )
}

export default register;