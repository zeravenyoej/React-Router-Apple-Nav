import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import {NavWrapper} from './components/NavWrapper';
import { Mac, IPad, IPhone } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Route path='/' render={(props)=><NavWrapper/>}/>
      <Route path='/mac' render={(props)=><Mac/>}/>
      <Route path='/ipad' render={(props)=><IPad/>}/>
      <Route path='/iphone' render={(props)=><IPhone/>}/>
    </div>
  );
}

export default App;
