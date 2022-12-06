
import React from "react";
import "./style_film.css";
import "./style_cat.css";
import "./loading.css";
import "./script"
import wednesday from "./img/Wednesday.jpg";
import warrior from "./img/Warrior_Nun.jpg";
import dragon from "./img/house_of_dragon.jpg";
import spirited from "./img/Spirited.jpg";

function MainPage() {
    
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

    <div class="modalstyle">
        <div class="modalwindow">
            <img id="filmLogo" src= {wednesday} alt=""/>
            <p id="filmName"></p>
            <p id="filmDate"></p>
            <p id="filmDescription"></p>
            
        </div>
    </div>

     

    <div id="list1" class="hover-image-scale">

        <a href="/Pag_warrior"><img id="warrior" src={warrior} alt=""/></a>
        <a href="/Page_wednesday"><img id="wednesday" src={wednesday} alt=""/></a>
        <a href="/Page_dragon"><img id="dragon" src={dragon} alt=""/></a>
        <a href="/Page_spirited"><img id="spirited" src={spirited} alt=""/></a>
        <a href="/Pag_warrior"><img id="warrior" src={warrior} alt=""/></a>
        <a href="/Page_wednesday"><img id="wednesday" src={wednesday} alt=""/></a>
        <a href="/Page_dragon"><img id="dragon" src={dragon} alt=""/></a>
        <a href="/Page_spirited"><img id="spirited" src={spirited} alt=""/></a>
        <a href="/Pag_warrior"><img id="warrior" src={warrior} alt=""/></a>
        <a href="/Page_wednesday"><img id="wednesday" src={wednesday} alt=""/></a>
        
    </div>

    <div id="list2" class="hover-image-scale">
        <a href="/Page_spirited"><img id="spirited" src={spirited} alt=""/></a>
        <a href="/Page_dragon"><img id="dragon" src={dragon} alt=""/></a>
        <a href="/Page_wednesday"><img id="wednesday" src={wednesday} alt=""/></a>
        <a href="/Pag_warrior"><img id="warrior" src={warrior} alt=""/></a>
        <a href="/Page_spirited"><img id="spirited" src={spirited} alt=""/></a>
        <a href="/Page_dragon"><img id="dragon" src={dragon} alt=""/></a>
        <a href="/Page_wednesday"><img id="wednesday" src={wednesday} alt=""/></a>
        <a href="/Pag_warrior"><img id="warrior" src={warrior} alt=""/></a>
        <a href="/Page_spirited"><img id="spirited" src={spirited} alt=""/></a>
        <a href="/Page_dragon"><img id="dragon" src={dragon} alt=""/></a>


    </div>

    <div id="list3" class="hover-image-scale">
        <a href="/Page_dragon"><img id="dragon" src={dragon} alt=""/></a>
        <a href="/Page_wednesday"><img id="wednesday" src={wednesday} alt=""/></a>
        <a href="/Pag_warrior"><img id="warrior" src={warrior} alt=""/></a>
        <a href="/Page_spirited"><img id="spirited" src={spirited} alt=""/></a>
        <a href="/Page_dragon"><img id="dragon" src={dragon} alt=""/></a>
        <a href="/Page_wednesday"><img id="wednesday" src={wednesday} alt=""/></a>
        <a href="/Pag_warrior"><img id="warrior" src={warrior} alt=""/></a>
        <a href="/Page_spirited"><img id="spirited" src={spirited} alt=""/></a>
        <a href="/Page_dragon"><img id="dragon" src={dragon} alt=""/></a>
        <a href="/Page_wednesday"><img id="wednesday" src={wednesday} alt=""/></a>
    </div>
    

      <div id="pageloader" class="preloader">
        <div class="loader">
            <span>LOADING</span>
        </div>
      
      </div>
     </>
  );
}

export default MainPage;