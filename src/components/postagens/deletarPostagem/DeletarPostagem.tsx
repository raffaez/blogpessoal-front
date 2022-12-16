import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { Box } from "@mui/material";
import Postagem from "../../../models/Postagem";
import { buscaId, deleteId } from "../../../services/Service";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function DeletarPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage("token");
  const [postagem, setPostagem] = useState<Postagem>();

  useEffect(() => {
    if (token == "") {
      toast.warn("Você precisa estar logado para acessar essa página");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/postagens");
    deleteId(`/postagens/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Postagem deletada com sucesso!");
  }

  function nao() {
    navigate(-1);
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary">{postagem?.titulo}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                  onClick={sim}
                >
                  Sim
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  onClick={nao}
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;
