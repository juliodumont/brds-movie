import qs from "qs";
import axios, { AxiosRequestConfig } from "axios";
import history from "./history";
import { getAuthInfo } from "./authentication";

export const BASE_URL = "https://movieflix-devsuperior.herokuapp.com";
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

export const requestBackend = (config: AxiosRequestConfig) => {
  //Se tentar fazer requisição sem indicar que é uma requisição que requer autorização vai ocorrer problema mesmo
  //com todos os outros parâmetros corretos.
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthInfo().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
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
