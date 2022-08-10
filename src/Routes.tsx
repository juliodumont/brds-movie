import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Router, Switch } from "react-router-dom";
import history from "./util/history";
import MoviesDetails from "./pages/MoviesDetails";
import MoviesCatalog from "./pages/MoviesCatalog";
import PrivateRoute from "./components/PrivateRoute";

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/movies">
          <Route exact path="/movies">
            <MoviesCatalog />
          </Route>
          <Route path="/movies/:movieId">
            <MoviesDetails />
          </Route>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;

/* Envolver
<Route exact path="/movies">
<MoviesCatalog/>
</Route>
<Route path="/movies/:movieId">
<MoviesDetails/>
</Route>
com um private route


*/
