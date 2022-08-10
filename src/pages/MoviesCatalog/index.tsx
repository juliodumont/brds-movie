import { Link } from "react-router-dom";
import "./styles.css";

function MoviesCatalog() {
  return (
    <main className="movie-catalog-container">
        <div className="catalog-title-container">
          <h2>Tela listagem de filmes</h2>
        </div>
        <div className="catalog-container">
          <Link to="/movies/1">Acessar /movies/1</Link> 
          <Link to="/movies/2">Acessar /movies/2</Link> 
        </div>
    </main>
  );
}

export default MoviesCatalog;
