import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://blogpessoal-cqx5.onrender.com'
});

export const cadastroUsuario = async(url: string, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data);
}

export const login = async(url: string, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data.token);
}

export const busca = async(url: string, header: any, setDado: any) => {
  const resposta = await api.get(url, header);
  setDado(resposta.data.token);
}