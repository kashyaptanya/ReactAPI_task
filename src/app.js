import React, { useState, useEffect } from 'react'
import Homepage from './pages/Home/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourite from './pages/Home/favourite';

const App = () => {
  const [fav, setFav] =useState([])
  return (
    <>
      <Homepage fav={fav} setFav={setFav}/>
     {/* routers are not support/work */}
     {/* <BrowserRouter>
      <Routes>
        <Route exact path="/" component={<Homepage fav={fav} setFav={setFav}/>} />
        <Route excat path="/favourite" component={<Favourite/>} />
      </Routes>
    </BrowserRouter>  */}
    
    </>
  )
}
export default App