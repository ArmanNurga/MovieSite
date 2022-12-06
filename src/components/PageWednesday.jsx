import React from "react";
import "./style_cat.css";
import "./loading.css";
import "./WacthingPage.css";
import wednesday from "./img/Wednesday.jpg";

function PageWednesday() {
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

    <img className="pagelogo"  src={wednesday} alt=""/>
    <p >Name: Wednesday</p>
    <p >Year: 2022</p>
    <p >Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart and solve the mystery that embroiled her parents.</p>
  
    <iframe width="900" height="506" src="https://www.youtube.com/embed/NakTu_VZxJ0" title="Wednesday Addams | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    <div id="pageloader" class="preloader">
        <div class="loader">
            <span>LOADING</span>
        </div>
      
      </div>

      </>
    );
  }
  
  export default PageWednesday;