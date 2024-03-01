import React from "react";
import NavBar from "../components/navbar";
import "../sass/main.scss";
import HomePage from "../components/homepage";


function Welcome(){
    return (
        <>
            <NavBar/>
            <HomePage/>
        </>
    )
}
export default Welcome