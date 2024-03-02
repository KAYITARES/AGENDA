import React from "react";
import NavBar from "../components/navbar";
import "../sass/main.scss";
import HomePage from "../components/homepage";
import Speakers from "../components/speakers";


function Welcome(){
    return (
        <>
            <NavBar/>
            <HomePage/>
            <Speakers/>
        </>
    )
}
export default Welcome