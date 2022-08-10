import { useContext, useEffect } from "react";
import {
  AuthContext,
  checkUserAuth,
  getTokenInformation,
  removeAuthInfo,
} from "../../util/authentication";
import { Button } from "../Button";
import history from "../../util/history";
import "./styles.css";
import { Link } from "react-router-dom";

export function Navbar() {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (checkUserAuth()) {
      setAuthContextData({
        authenticated: true,
        tokenInfo: getTokenInformation(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleOnLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthInfo();
    setAuthContextData({
      authenticated: false,
    });
    history.replace("/");
  };

  return (
    <header>
      <nav className="main-nav">
        <div className="nav-logo">
          <h1>
            <Link to="/movies">MovieFlix</Link>
          </h1>
        </div>
        {authContextData.authenticated && (
          <div className="logout-button-container">
            <Button
              text="sair"
              radius="10px"
              border="1px solid #000000"
              width="100px"
              height="30px"
              className="logout-button"
              onClick={handleOnLogoutClick}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
