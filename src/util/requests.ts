import qs from "qs";
import axios from "axios";
import history from "./history";

/*
export const BASE_URL =
  process?.env.REACT_APP_BASE_URL ??
  "https://movieflix-devsuperior.herokuapp.com";
const CLIENT_ID = process?.env.REACT_APP_CLIENT_ID ?? "myclientid";
const CLIENT_SECRET = process?.env.REACT_APP_CLIENT_SECRETE ?? "myclientsecret";*/

export const BASE_URL =
  "https://movieflix-devsuperior.herokuapp.com";
const CLIENT_ID = "myclientid";
const CLIENT_SECRET = "myclientsecret";

type Login = {
  username: string;
  password: string;
};

export const requestLogin = (login: Login) => {
  /*
   *Define o tipo de conteudo necessário para a requisição -> x-www-form-urlencoded
   *Define a autorização - btoa faz o encode de 'client-id':'client-secret' -> ...HNjYXR...==
   */
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
  };
  /*Transforma o objeto para tipo definido -> x-www-form-urlencoded */
  const data = qs.stringify({
    ...login,
    grant_type: "password",
  });
  /*Chama POST para realizar login informando parâmetros básicos: verbo, URLs, dados e cabeçalhos*/
  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    data,
    headers,
  });
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      history.push("/movies");
    }
    return Promise.reject(error);
  }
);
