import { Button, Grid, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
          <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
              <Grid alignItems="center" item xs={6}>
                  <Box paddingX={20} >
                      <Typography variant="h3" gutterBottom component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                      <Typography variant="h5" gutterBottom component="h5" align="center" className="titulo">expresse aqui os seus pensamentos e opiniões!</Typography>
                  </Box>
                  <Box display="flex" justifyContent="center">
                      <Box marginRight={1}>
                      </Box>
                      <Link to="/posts" className="text-decorator-none">
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                      </Link>
                      
                  </Box>
              </Grid>
              <Grid item xs={6} >
                  <img src="https://i.imgur.com/H88yIo2.png" alt="" className="img-home" />
              </Grid>
              <Grid xs={12} className="postagens">
              </Grid>
          </Grid>
      </>
  );
}

export default Home;