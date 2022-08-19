import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GenreSelector from "../../components/GenreSelector";
import MovieCard from "../../components/MovieCard";
import { MovieInformation } from "../../types/movie";
import { Page } from "../../types/vendor/page";
import { requestBackend } from "../../util/requests";
import "./styles.css";

function MoviesCatalog() {
  const [movieInformation, setMovieInformation] =
    useState<Page<MovieInformation>>();

  const movieTest: MovieInformation = {
    id: 6,
    title: "A Voz do Silêncio",
    subTitle: "Koe no Katachi",
    year: 2016,
    imgUrl:
      "https://image.tmdb.org/t/p/w533_and_h300_bestv2/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg",
  };

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: "/movies",
      withCredentials: true,
      params: {
        page: 0,
        size: 8,
      },
    };
    requestBackend(params).then((response) => {
      setMovieInformation(response.data);
    });
  }, []);

  return (
    <main className="movie-catalog-container">
      <div>
        <GenreSelector onGenreSelect={() => {}}/>
      </div>
      <div className="catalog-container">
        {movieInformation?.content.map((movie) => (
          <div className="catalog-movie-container" key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              className={"movie-details-link"}
            >
              <MovieCard size={"sm"} movie={movie} showDescription={false} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MoviesCatalog;
