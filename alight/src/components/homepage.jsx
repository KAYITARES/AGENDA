import React from "react";
import home from "../assets/logo.jpeg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Button from "@mui/material/Button";
import { Carousel } from "antd";
import Lottie from 'lottie-react';
import animation from '../assets/animations.json'
import world from '../assets/world.json'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import worls from '../assets/worlds.json'
// import alight from '../assets/alight.json'

const contentStyle = {
  margin: 0,
  height: "auto",
  color: "#000",
  lineHeight: "19px",
  textAlign: "center",
  background: "#FFFF",
  padding: "50px 10px 50px",
};

function HomePage() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const backgroundImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(253, 253, 253, 0.52), rgba(1, 1, 1, 0.73)), url("https://images.pexels.com/photos/1192662/pexels-photo-1192662.jpeg?auto=compress&cs=tinysrgb&w=600")`,
    // backgroundColor:'red',
    backgroundPosition: "50% 20%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "63vh",
    backgroundColor: "black",
  };
  return (
    <>
      <div className="home-container">
        <div className="home-page" style={backgroundImage}>
          <div className="home">
            <div className="translate">
              <h1>true</h1>
              <img src={home} alt="rotate" />
            </div>
            <div className="dates">
              <div className="date">
                <div className="vis">
                  <h1 className="falls">28-30 APRIL</h1>
                  <CalendarMonthOutlinedIcon className="add" />
                </div>
              </div>
              <hr />

              <div className="victory">
                <div className="vis">
                  <h1 className="falls">
                    VICTORY FALLS IN RWANDA GORILLA HILLS
                  </h1>
                  <AddLocationAltIcon className="add" />
                </div>
              </div>
              <Button variant="contained" disableElevation className="btn-home">
                REGISTRATION
              </Button>
            </div>
          </div>
        </div>
        <div className="features">
          <Carousel afterChange={onChange} autoplay>
            <div>
            <div style={contentStyle} className="content">
                <h1 className="heads">WORLD VISION RWANDA</h1>
                <div className="teso">
                  <Lottie animationData={world}/>
                  <p>
                    {" "}
                    is the one and only agency that works in all refugee camps
                    in Rwanda, serving mostly Congolese and Burundian refugees.
                    Alight exists to walk alongside those who – by sheer
                    circumstance – find themselves on the long and arduous
                    journey of displacement. Deeply co-creating with communities
                    and integrating human-centered design into our work for
                    almost 3 decades in Rwanda, Alight understands the
                    experiences of the displaced persons and seeks to deliver
                    services worthy of their humanity. While Alight Rwanda works
                    to ensure that refugees’ basic needs are met, we also
                    recognize that in order to help displaced people fully
                    regain a life of dignity and fulfillment, we must think and
                    act beyond the status quo. This includes seeking partnership
                    with the private sector. Our partnership with MeshPower has
                    enabled Alight to pilot technologically driven humanitarian
                    assistance such as the provision of solar streetlights,
                    charging kiosks and energy saving stoves. Our partnership
                    with VIAMO has enabled us to reach vulnerable displaced
                    persons such as pregnant and lactating mothers with using
                    Interactive Voice Response (IVR) systems. We also actively
                    collaborate with leading agencies like global
                    telecommunications company MTN, training agents who work
                    with Rwanda’s refugee communities on a daily basis. The
                    Rwandan people and government, with their dedication to
                    economic growth, stability, and building world class systems
                    and solutions, provide an ideal environment for innovation.
                    In Rwanda, we’ve collected more than 600,000 ratings of our
                    services and over 200,000 ideas for how to do better.{" "}
                  </p>
                </div>
                <h1>SESSION</h1>
                <div className="session">
                
                <div className="smart">

                <div className="smart-container">
               
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>smart devices</p>
               </div>
               
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>Broadband</p>
               </div>
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>setelites</p>
               </div>
               </div>
               
                </div>
                <div className="broad">
                <div className="smart-container">
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>smart devices</p>
               </div>
               
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>Broadband</p>
               </div>
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>setelites</p>
               </div>
               </div>
                </div>
                </div>
                <Button variant="contained" disableElevation className="btn-home">
                  EXPLORE CONNECT
                </Button>
              </div>
            </div>
            <div>
            <div style={contentStyle} className="content">
                <h1 className="heads">ALIGHT Rwanda</h1>
                <div className="teso">
                  <Lottie animationData={animation}/>
                  <p>
                    {" "}
                    is the one and only agency that works in all refugee camps
                    in Rwanda, serving mostly Congolese and Burundian refugees.
                    Alight exists to walk alongside those who – by sheer
                    circumstance – find themselves on the long and arduous
                    journey of displacement. Deeply co-creating with communities
                    and integrating human-centered design into our work for
                    almost 3 decades in Rwanda, Alight understands the
                    experiences of the displaced persons and seeks to deliver
                    services worthy of their humanity. While Alight Rwanda works
                    to ensure that refugees’ basic needs are met, we also
                    recognize that in order to help displaced people fully
                    regain a life of dignity and fulfillment, we must think and
                    act beyond the status quo. This includes seeking partnership
                    with the private sector. Our partnership with MeshPower has
                    enabled Alight to pilot technologically driven humanitarian
                    assistance such as the provision of solar streetlights,
                    charging kiosks and energy saving stoves. Our partnership
                    with VIAMO has enabled us to reach vulnerable displaced
                    persons such as pregnant and lactating mothers with using
                    Interactive Voice Response (IVR) systems. We also actively
                    collaborate with leading agencies like global
                    telecommunications company MTN, training agents who work
                    with Rwanda’s refugee communities on a daily basis. The
                    Rwandan people and government, with their dedication to
                    economic growth, stability, and building world class systems
                    and solutions, provide an ideal environment for innovation.
                    In Rwanda, we’ve collected more than 600,000 ratings of our
                    services and over 200,000 ideas for how to do better.{" "}
                  </p>
                </div>
                <div className="session">
                <div>
                <div className="smart-container">
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>smart devices</p>
               </div>
               
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>Broadband</p>
               </div>
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>setelites</p>
               </div>
               </div>
                </div>
                <div>
                <div className="smart-container">
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>smart devices</p>
               </div>
               
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>Broadband</p>
               </div>
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>setelites</p>
               </div>
               </div>
                </div>
                </div>
                <Button variant="contained" disableElevation className="btn-home">
                  EXPLORE CONNECT
                </Button>
              </div>
            </div>
            <div>
              <div style={contentStyle} className="content">
                <h1 className="heads">Viamo</h1>
                <div className="teso">
                  <Lottie animationData={world}/>
                  <p>
                    {" "}
                    is the one and only agency that works in all refugee camps
                    in Rwanda, serving mostly Congolese and Burundian refugees.
                    Alight exists to walk alongside those who – by sheer
                    circumstance – find themselves on the long and arduous
                    journey of displacement. Deeply co-creating with communities
                    and integrating human-centered design into our work for
                    almost 3 decades in Rwanda, Alight understands the
                    experiences of the displaced persons and seeks to deliver
                    services worthy of their humanity. While Alight Rwanda works
                    to ensure that refugees’ basic needs are met, we also
                    recognize that in order to help displaced people fully
                    regain a life of dignity and fulfillment, we must think and
                    act beyond the status quo. This includes seeking partnership
                    with the private sector. Our partnership with MeshPower has
                    enabled Alight to pilot technologically driven humanitarian
                    assistance such as the provision of solar streetlights,
                    charging kiosks and energy saving stoves. Our partnership
                    with VIAMO has enabled us to reach vulnerable displaced
                    persons such as pregnant and lactating mothers with using
                    Interactive Voice Response (IVR) systems. We also actively
                    collaborate with leading agencies like global
                    telecommunications company MTN, training agents who work
                    with Rwanda’s refugee communities on a daily basis. The
                    Rwandan people and government, with their dedication to
                    economic growth, stability, and building world class systems
                    and solutions, provide an ideal environment for innovation.
                    In Rwanda, we’ve collected more than 600,000 ratings of our
                    services and over 200,000 ideas for how to do better.{" "}
                  </p>
                </div>
                <div className="session">
                <div>
                <div className="smart-container">
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>smart devices</p>
               </div>
               
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>Broadband</p>
               </div>
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>setelites</p>
               </div>
               </div>
                </div>
                <hr/>
                <div>
               <div className="smart-container">
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>smart devices</p>
               </div>
               
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>Broadband</p>
               </div>
               <div className="cont">
               <ArrowForwardIosIcon className="icon"/>
               <p>setelites</p>
               </div>
               </div>
                </div>
                </div>
                <Button variant="contained" disableElevation className="btn-home">
                  EXPLORE CONNECT
                </Button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default HomePage;
