import './CadastroUsuario.css';

import { Box } from '@material-ui/core';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';

export default function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    sobrenome: "",
    email: "",
    senha: ""
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    sobrenome: "",
    email: "",
    senha: ""
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      toast.success("Usuário cadastrado com sucesso!");
    } else {
      toast.warn("Dados inconsistentes. Verifique as informações de cadastro.");
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="img2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <Typography
            variant="h3"
            gutterBottom
            color="text-primary"
            component="h3"
            align="center"
            className="text-bold"
          >
            Cadastrar
          </Typography>
          <form className="form" onSubmit={onSubmit}>
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.sobrenome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="sobrenome"
              label="Sobrenome"
              variant="outlined"
              name="sobrenome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="email"
              label="E-mail"
              variant="outlined"
              name="email"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="Confirmar senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} className="text-center">
              <Link to="/login">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btn-cancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="text-decorator-none"
              >
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
