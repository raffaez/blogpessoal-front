import "./Login.css";

import { Box } from "@material-ui/core";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";

import UserLogin from "../../models/UserLogin";

export default function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    email: "",
    senha: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/auth/login`, userLogin, setToken);

      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert(`E-mail ou senha incorreta.`);
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            color="text-primary"
            component="h3"
            align="center"
            className="text-bold"
          >
            Entrar
          </Typography>
          <form className="form" onSubmit={onSubmit}>
            <TextField
              value={userLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="email"
              label="E-mail"
              variant="outlined"
              name="email"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} className="text-center">
              <Button type="submit" variant="contained" color="primary">
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastroUsuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="text-bold"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

      <Grid xs={6} className="img"></Grid>
    </Grid>
  );
}
