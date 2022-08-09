import { useContext, useEffect } from "react";
import { AuthContext, checkUserAuth, getTokenInformation } from "../../util/authentication";
import { Button } from "../Button";
import "./styles.css";

export function Navbar() {
  const {authContextData, setAuthContextData} = useContext(AuthContext)

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
  }, [authContextData]);

  return (
    <header>
      <nav className="main-nav">
        <div className="nav-logo">
          <h1>MovieFlix</h1>
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
              />
            </div>
          )}
      </nav>
    </header>
  );
}


