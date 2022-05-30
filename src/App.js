import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import "./App.css"
import Home from './element/home';
import Assinatura from './element/assinatura';
import Padrao from './element/irrigacoes/padrao';
import Equipe from './element/equipe';
import Manual from './element/irrigacoes/manual';
import Custom from './element/irrigacoes/custom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-nav">
            <a class="navbar-brand logo">Irrigation</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">

              <ul class="navbar-nav">

                <li class="nav-item active">
                  <a class="nav-link"><Link to="/">Home</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link"><Link to="/assinatura">Assinatura</Link></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link"><Link to="/equipe">Equipe</Link></a>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/assinatura" element={<Assinatura />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/padrao" element={<Padrao />} />
            <Route path="/manual" element={<Manual />} />
          </Routes>

        </header>
      </BrowserRouter>
    </>
  );
}

export default App;