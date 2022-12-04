import "./Login.css";

import { Box } from "@material-ui/core";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
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
          <form className="form">
            <TextField
              id="usuario"
              label="Usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} className="text-center">
              <Link to="/home" className="text-decorator-none">
                <Button type="submit" variant="contained" color="primary">
                  Logar
                </Button>
              </Link>
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
