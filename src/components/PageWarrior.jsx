import React from "react";
import "./style_cat.css";
import "./loading.css";
import "./WacthingPage.css";
import warrior from "./img/Warrior_Nun.jpg";

function PageWarrior() {
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

    <img className="pagelogo" src={warrior} alt=""/>
    <p >Name: Warrior Nun</p>
    <p >Year: 2020</p>
    <p >After waking up in a morgue, an orphaned teen discovers she now possesses superpowers as the chosen Halo Bearer for a secret sect of demon-hunting nuns.</p>
  
    <iframe width="900" height="506" src="https://www.youtube.com/embed/qxeZN0rZP34" title="Warrior Nun | Season 1 Official Recap | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    <div id="pageloader" class="preloader">
        <div class="loader">
            <span>LOADING</span>
        </div>
      
      </div>

      </>
    );
  }
  
  export default PageWarrior;