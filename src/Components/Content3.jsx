import React from "react";
import image from './../images/image.png'
import image2 from './../images/image-2.png'
import image3 from './../images/image-3.png'

class Content3 extends React.Component{
    render(){
        return(
          <>
            <h3>dicono di noi</h3>
            <div>
              <div id ="div33">
                 <img width="80px"src={image} alt="logo"/> 
              </div>
            </div>
              <div id="div4">
                     <img height="80px"width="100px"src={image2} alt="logo"/> 
              </div>
              <div id="div5">
                    <img height="80px"width="100px"src={image3} alt="logo"/> 
              </div>
          
            <div id="div6">s autem quibusdam et aut
              officiis debitis aut
              rerum necessitatibus saepe 
              eveniet ut et 
            </div>

            <div id="div7">s autem quibusdam et aut
              officiis debitis aut
              rerum necessitatibus saepe 
              eveniet ut et 
            </div>
              
            <div id="div8">s autem quibusdam et aut
              officiis debitis aut
              rerum necessitatibus saepe 
              eveniet ut et 
            </div>
          
           
         </>
        )
    }
}
export default Content3;