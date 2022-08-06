import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Router, Switch } from "react-router-dom";
import history from './util/history';
import MoviesDetails from "./pages/MoviesDetails";
import MoviesCatalog from "./pages/MoviesCatalog";

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/movies">
          <MoviesCatalog/>
        </Route>
        <Route path="/movies/1">
          <MoviesDetails/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
