import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Style.css';

const Inicio = () => {
  return (
    <div>
      <header></header>
      <h2 className="cabecalho">Início</h2>

      <div className="inicio">
        <Link to="/cadastro">
          <Button variant="contained" color="primary">Cadastrar Nova Pessoa</Button>
        </Link>
        <Link to="/pesquisar">
          <Button variant="contained" color="primary">Usuários Cadastrados</Button>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
