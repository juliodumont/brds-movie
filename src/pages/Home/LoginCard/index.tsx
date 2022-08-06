import { BaseCard } from "../../../components/BaseCard";
import { Button } from "../../../components/Button";
import "./styles.css";

function LoginCard() {
  return (
    <BaseCard className="login-card">
      <div className="login-title-container">
        <h2>Login</h2>
      </div>
      <div className="login-form-container">
        <form className="login-form">
          <fieldset className="login-info">
            <label htmlFor="email">
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label htmlFor="password">
              <input name="password" type="password" placeholder="Senha" />
            </label>
            <Button
                className="login-button"
                text="Fazer login"
            />
          </fieldset>
        </form>
      </div>
    </BaseCard>
  );
}

export default LoginCard;
