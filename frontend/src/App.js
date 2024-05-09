import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from './elementos/Cadastro';
import Pesquisa from './elementos/Pesquisa';
import Inicio from './elementos/Inicio';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/pesquisar" element={<Pesquisa />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default App;
