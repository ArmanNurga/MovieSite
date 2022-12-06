import React from "react";
import "./style_cat.css";
import "./loading.css";
import "./WacthingPage.css";
import spirited from "./img/Spirited.jpg";

function PageSpirited() {
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

    <img className="pagelogo"  src={spirited} alt=""/>
    <p >Name: Spirited</p>
    <p >Year: 2022</p>
    <p >A musical version of Charles Dickens's story of a miserly misanthrope who is taken on a magical journey..</p>
  
    <iframe width="900" height="506" src="https://www.youtube.com/embed/tnAJntI3NNs" title="Spirited — Official Trailer | Apple TV+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    <div id="pageloader" class="preloader">
        <div class="loader">
            <span>LOADING</span>
        </div>
      
      </div>

      </>
    );
  }
  
  export default PageSpirited;