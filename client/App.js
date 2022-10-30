import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import SinglePlayer from './components/SinglePlayer';
import PlayerForm from './components/PlayerForm'

const App = () => {
  return (
    <div className='row container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/leaderboard/:playerId' element={<SinglePlayer/>}/>
        <Route path='/create-player' element={<PlayerForm/>}/>
      </Routes>
    </div>
  );
};

export default App;