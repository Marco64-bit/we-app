
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MoviesDetalis from './components/Moviedetails';
import Notfound from './components/Notfound component';
import TvDetalis from './components/Tvshowdetalis';


import { useEffect, useState } from 'react';
import Movies from './components/movies';
import Tvshow from './components/Tvshow';
import People from './components/People';
import ActorDetails from './components/ActorDetails';
function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='movies' element={<Movies/>}/>
    <Route path='tvshow' element={<Tvshow/>}/>
    <Route path='pepole' element={<People/>}/>
    <Route path='detalis' element={<MoviesDetalis/>}/>
    <Route path='tvdetalis' element={<TvDetalis/>}/>
    <Route path='actordetalis' element={<ActorDetails/>}/>
   
    <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>
</>
);
}
export default App;