import React from "react";
import { Routes, Route, /*Link*/ } from "react-router-dom";
import MainPage from "./components/mainPage";
import PageWednesday from "./components/PageWednesday";
import PageWarrior from "./components/PageWarrior";
import PageDragon from "./components/PageDragon";
import PageSpirited from "./components/PageSpirited";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/Page_wednesday' element={<PageWednesday/>} />
        <Route path='/Pag_warrior' element={<PageWarrior/>} />
        <Route path='/Page_dragon' element={<PageDragon/>} />
        <Route path='/Page_spirited' element={<PageSpirited/>} />
        
      </Routes>
    </div>
  );
}

export default App;
