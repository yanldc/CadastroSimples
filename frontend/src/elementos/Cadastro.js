import React, { useState } from 'react';
import { Grid, TextField, Button, Snackbar } from '@mui/material';
import axios from 'axios';
import InputMask from 'react-input-mask';
import './Style.css';

const FormularioCadastro = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [erro, setErro] = useState('');

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const PesquisarCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);
    } catch (error) {
      console.error('Erro ao pesquisar CEP:', error);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/pessoa', {
        nome,
        telefone,
        cpf,
        numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado
      });
      setMensagem('Usuário cadastrado com sucesso');
      setOpenSnackbar(true);
      setNome('');
      setTelefone('');
      setCpf('');
      setNumero('');
      setComplemento('');
      setCep('');
      setErro('');
    } catch (error) {
      console.error('Erro ao cadastrar pessoa:', error);
      setErro('Erro ao cadastrar pessoa ou CPF já cadastro, por favor confira os dados');
    }
  };

  return (
    <div>
      <header></header>
      <h2 className="cabecalho">Cadastro de Pessoa Física</h2>
      <form className="formulario" onSubmit={submit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputMask mask="(99) 99999-9999" value={telefone} onChange={(e) => setTelefone(e.target.value)}>
              {(inputProps) => <TextField label="Telefone" {...inputProps} fullWidth required />}
            </InputMask>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputMask mask="999.999.999-99" value={cpf} onChange={(e) => setCpf(e.target.value)}>
              {(inputProps) => <TextField label="CPF" {...inputProps} fullWidth required />}
            </InputMask>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputMask mask="99999-999" value={cep} onChange={(e) => setCep(e.target.value)}>
              {(inputProps) => <TextField label="CEP" {...inputProps} fullWidth required />}
            </InputMask>
          </Grid>
          <Grid item xs={12} textAlign={'center'}>
            <Button variant="contained" onClick={PesquisarCep}>Pesquisar CEP</Button>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Numero" value={numero} onChange={(e) => setNumero(e.target.value)} fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Bairro" value={bairro} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Município" value={cidade} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Estado" value={estado} fullWidth />
          </Grid>
          <Grid item xs={12} textAlign={'center'}>
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={mensagem}
        action={
          <Button color="inherit" size="small" onClick={handleCloseSnackbar}>
            Fechar
          </Button>
        }
      />
      <Snackbar
        open={!!erro}
        autoHideDuration={6000}
        onClose={() => setErro('')}
        message={erro}
        action={
          <Button color="inherit" size="small" onClick={() => setErro('')}>
            Fechar
          </Button>
        }
      />
    </div>
  );
};

export default FormularioCadastro;
