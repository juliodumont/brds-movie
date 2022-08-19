import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GenreSelector from "../../components/GenreSelector";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { MovieInformation } from "../../types/movie";
import { Page } from "../../types/vendor/page";
import { requestBackend } from "../../util/requests";
import "./styles.css";

function MoviesCatalog() {
  const [movieInformation, setMovieInformation] =
    useState<Page<MovieInformation>>();

  const getMovies = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      url: "/movies",
      withCredentials: true,
      params: {
        page: pageNumber,
        size: 8,
      },
    };
    requestBackend(params).then((response) => {
      setMovieInformation(response.data);
    });
  }

  const handleGenreSelect = () =>{
    
  }

  useEffect(() => {
    getMovies(0)
  }, []);

  return (
    <main className="movie-catalog-container">
      <div>
        <GenreSelector onGenreSelect={handleGenreSelect} />
      </div>
      <div className="catalog-container">
        {movieInformation?.content.map((movie) => (
          <div className="catalog-movie-container" key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={"movie-details-link"}>
              <MovieCard size={"sm"} movie={movie} showDescription={false} />
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          pageCount={movieInformation ? movieInformation.totalPages : 0}
          range={3}
          onChange={getMovies}
        />
      </div>
    </main>
  );
}

export default MoviesCatalog;
