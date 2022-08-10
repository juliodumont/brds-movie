import { BaseCard } from "../../../components/BaseCard";
import { Button } from "../../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { requestLogin } from "../../../util/requests";
import "./styles.css";
import {
  AuthContext,
  getTokenInformation,
  setAuthInfo,
} from "../../../util/authentication";
import { useHistory, useLocation } from "react-router-dom";
import { useContext, useState } from "react";

type LoginForm = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

function LoginCard() {
  /*Esse hook retorna o objeto location mais atual, esse objeto é uma entrada na pilha do histórico do browser (history) e 
  armazena as entradas a medida que o usuário vai navegando*/
  const location = useLocation<LocationState>();
  /*Esse hook dá acesso a uma instância do histórico de navegação (stack do history)*/
  const history = useHistory();
  const { setAuthContextData } = useContext(AuthContext);
  const { from } = location.state || { from: { pathname: "/movies" } };
  const [authError, setAuthError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data: LoginForm) => {
    requestLogin(data)
      .then((response) => {
        setAuthInfo(response.data);
        setAuthError(false);
        setAuthContextData({
          authenticated: true,
          tokenInfo: getTokenInformation(),
        });
        history.replace(from);
      })
      .catch(() => {
        setAuthError(true);
      });
  };

  return (
    <BaseCard className="login-card">
      <div className="login-title-container">
        <h2>Login</h2>
      </div>
      <div className="login-form-container">
        {authError ? (
          <div className="error-field">
            <p className="error-message">Email ou senha inválidos</p>
          </div>
        ) : (
          errors && (
            <div className="error-field">
              {errors.username
                ? errors.username.message
                : errors.password?.message}
            </div>
          )
        )}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="login-info">
            <label htmlFor="username">
              <input
                {...register("username", {
                  required: "O email não pode estar em branco!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "O email inserido é inválido!",
                  },
                })}
                type="email"
                placeholder="Email"
                className={`${errors.username ? 'error-active':''}`}
              />
            </label>
            <label htmlFor="password">
              <input
                {...register("password", {
                  required: "A senha não pode estar em branco",
                })}
                type="password"
                placeholder="Senha"
                className={`${errors.password ? 'error-active':''}`}
              />
            </label>
            <Button className="login-button" text="Fazer login" />
          </fieldset>
        </form>
      </div>
    </BaseCard>
  );
}

export default LoginCard;
