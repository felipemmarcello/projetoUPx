import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import React from 'react';

import Home from './element/home';
import Assinatura from './element/assinatura';
import Irrigacao from './element/irrigacao';
import Equipe from './element/equipe';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
            <h1 className= "logo">Irrigation</h1>

            <nav>
              <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/assinatura">Assinatura</Link> </li>
                <li> <Link to="/irrigacao">Irrigação</Link> </li>
                <li> <Link to="/equipe">Equipe</Link> </li>
              </ul>
            </nav>

            <Routes>
              <Route path= "/" exact element= {<Home/>}/>
              <Route path= "/assinatura" element= {<Assinatura/>}/>
              <Route path= "/irrigacao" element= {<Irrigacao/>}/>
              <Route path= "/equipe" element= {<Equipe/>}/>

            </Routes>

        </header>
      </BrowserRouter>
    </>
  );
}

export default App;