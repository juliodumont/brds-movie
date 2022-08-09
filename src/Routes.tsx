import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Router, Switch } from "react-router-dom";
import history from "./util/history";
import MoviesDetails from "./pages/MoviesDetails";
import MoviesCatalog from "./pages/MoviesCatalog";

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <MoviesCatalog />
        </Route>
        <Route path="/movies/:movieId">
          <MoviesDetails />
        </Route>
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
