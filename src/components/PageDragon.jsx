import React from "react";
import "./style_cat.css";
import "./loading.css";
import "./WacthingPage.css";
import dragon from "./img/house_of_dragon.jpg";

function PageDragon() {
    return (
      <>
         <div id="marco">
        <div id="cielo"></div>
            <div id="luna"></div>
            <div id="gato"></div>
            <div id="muro"></div>
            <div id="edificios">
        </div>
    </div>

    <img className="pagelogo" src={dragon} alt=""/>
    <p >Name: House of dragon</p>
    <p >Year: 2022</p>
    <p >An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.</p>
  
    <iframe width="900" height="506" src="https://www.youtube.com/embed/DotnJ7tTA34" title="House of the Dragon | Official Trailer | HBO Max" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    <div id="pageloader" class="preloader">
        <div class="loader">
            <span>LOADING</span>
        </div>
      
      </div>

      </>
    );
  }
  
  export default PageDragon;