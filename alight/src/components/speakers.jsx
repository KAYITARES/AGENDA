import React from "react";
// import { Carousel } from "antd";

import { Image } from "antd";
import records from '../assets/speakers/speaker.json'



function Speakers(){


return (
    <>
        <article>
      

        
        <div className="heads">
        <h1>OUR SPEAKERS</h1>
        <h3>Stay tuned for more Speakers to come</h3>
        </div>
       

     
            <div className="articles">

            {records ? (records.map((blogx) => (
              <div className="container" key={records._id}>
              <div className="image" data-aos="zoom-in">
              <Image width = {'100%'} height={'100%'} src= {blogx.newsImage}/>
              <div className="name">
                    <h3>{blogx.name}</h3>
                </div>
              </div>
           
              <div className="text">
              <p className='short'>{blogx.title}</p>
              <p className='short'>{blogx.description}</p>
              </div>
                    <div className="decription">

                    </div>
                    </div>
                
          ))): (
            <p>Loading...</p>
          )}
        
           {/* <div className="container">
           <div className="image">
                    <img src="https://www.paulkagame.com/wp-content/uploads/2021/04/PaulKagame_Web.jpeg" alt="pk"/>
                    <div className="name">
                    <h3>H.E POUL KAGAME</h3>
                </div>
                    </div>
                   
                <div className="text">
                    <h2>H.E POUL KAGAME</h2>
                    <p>President Republic Of Rwanda chairman of FPR</p>
                    </div>
           </div> */}
                
                </div>
               
                
                
        
            
            
        </article>
    </>
)
}

export default Speakers