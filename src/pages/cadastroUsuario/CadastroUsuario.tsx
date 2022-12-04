import "./CadastroUsuario.css";

import { Box } from "@material-ui/core";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CadastroUsuario() {
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
          <form className="form">
            <TextField
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
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
            <TextField
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
