import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { CSVLink } from 'react-csv';
import './Style.css';

const Pesquisa = () => {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/pessoa');
        setResultados(response.data);
      } catch (error) {
        console.error('Erro ao buscar cadastros:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <header></header>
      <h2 className="cabecalho">Usuários Cadastrados
      <br></br><br></br><CSVLink data={resultados} filename="pessoas.csv" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary"> Exportar para CSV </Button>
        </CSVLink>
      </h2>

      <div className="formulario">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Nome</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>CPF</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Telefone</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>CEP</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Cidade</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Estado</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Número</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Complemento</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Bairro</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultados.map((item, index) => (
              <TableRow key={index}>
                <TableCell style={{ fontWeight: 'bold' }}>{item.id}</TableCell>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.cpf}</TableCell>
                <TableCell>{item.telefone}</TableCell>
                <TableCell>{item.cep}</TableCell>
                <TableCell>{item.cidade}</TableCell>
                <TableCell>{item.estado}</TableCell>
                <TableCell>{item.numero}</TableCell>
                <TableCell>{item.complemento}</TableCell>
                <TableCell>{item.bairro}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
};

export default Pesquisa;
