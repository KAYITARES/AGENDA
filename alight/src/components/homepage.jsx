import React from "react";
import home from "../assets/logo.jpeg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Button from '@mui/material/Button';
import { Carousel } from 'antd';


const contentStyle= {
    margin: 0,
    height: '40vh',
    color: '#000',
    lineHeight: '30px',
    textAlign: 'center',
    background: '#FFFF',
    padding:'30px'
    
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
              <Button variant="contained" disableElevation>
       REGISTRATION
    </Button>
            </div>
          </div>
        </div>
        <div className="features">
        <Carousel afterChange={onChange} autoplay>
        <div>
      <div style={contentStyle}>
      <h1>Background</h1>
      <div className="teso">

        <img src={home} alt="home"/>
        The consortium was formed
         to leverage the complementary expertise of each agency to f
         acilitate an environment for refugees and host community in Rwanda which is digitally and economically inclusive. The consortium engages a network of government, private sector and civil society stakeholders to 
        utilize digital technology and facilitate tangible progress towards socio-economic inclusion for refugees and host communities in Rwanda.</div>
        <Button variant="contained" disableElevation>
       EXPLORE CONNECT
    </Button>
        </div>
      </div>
      <div>
      <div style={contentStyle}>
      <h1>Membership</h1>
      <div className="teso">

        <img src="https://iac-now.com/wp-content/uploads/2023/05/icon-pro-bono-healthcare-innovation-consulting.png" alt="home"/>
        The consortium was formed
         to leverage the complementary expertise of each agency to f
         acilitate an environment for refugees and host community in Rwanda which is digitally and economically inclusive. The consortium engages a network of government, private sector and civil society stakeholders to 
        utilize digital technology and facilitate tangible progress towards socio-economic inclusion for refugees and host communities in Rwanda.</div>
        <Button variant="contained" disableElevation>
       EXPLORE CONNECT
    </Button>
        </div>
      </div>
      <div>
      <div style={contentStyle}>
      <h1>Definition of Roles</h1>
      <div className="teso">

        <img src="https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png" alt="home"/>
        The consortium was formed
         to leverage the complementary expertise of each agency to f
         acilitate an environment for refugees and host community in Rwanda which is digitally and economically inclusive. The consortium engages a network of government, private sector and civil society stakeholders to 
        utilize digital technology and facilitate tangible progress towards socio-economic inclusion for refugees and host communities in Rwanda.</div>
        <Button variant="contained" disableElevation>
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
