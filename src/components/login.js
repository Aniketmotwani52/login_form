import React from "react";
import Input from "./input";

function login(){
    return(
        <div>
         <form className="form">
            <Input type="text" placeholder="Username"></Input>
            <Input type="password" placeholder="Password"></Input>
            <button type="submit">Login</button>
         </form>   
        </div>
    )
}

export default login;