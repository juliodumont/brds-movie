import { Redirect, Route } from "react-router-dom";
import { checkUserAuth } from "../../util/authentication";

type RouteProps = {
  children: React.ReactNode;
  path: string;
};

const PrivateRoute = ({ children, path}: RouteProps) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        !checkUserAuth() ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default PrivateRoute;
