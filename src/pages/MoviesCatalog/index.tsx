import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GenreSelector, { FormGenre } from "../../components/GenreSelector";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { MovieInformation } from "../../types/movie";
import { Page } from "../../types/vendor/page";
import { requestBackend } from "../../util/requests";
import CatalogMovieLoader from "./CatalogMovieLoader";
import "./styles.css";

type PageData = {
  activePage: number;
  filterData: FormGenre;
};

function MoviesCatalog() {
  const [movieInformation, setMovieInformation] =
    useState<Page<MovieInformation>>();

  const [pageData, setPageData] = useState<PageData>({
    activePage: 0,
    filterData: { genre: null },
  });

  const handlePageChange = (pageNumber: number) => {
    setPageData({
      ...pageData,
      activePage: pageNumber,
    });
  };

  const handleGenreSelect = (movieGenre: FormGenre) => {
    setPageData({
      activePage: 0,
      filterData: movieGenre,
    });
  };

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: "/movies",
      withCredentials: true,
      params: {
        page: pageData.activePage,
        size: 8,
        genreId: pageData.filterData.genre?.id,
      },
    };
    requestBackend(params).then((response) => {
      setMovieInformation(response.data);
    });
  }, [pageData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <main className="movie-catalog-container">
      <div>
        <GenreSelector onGenreSelect={handleGenreSelect} />
      </div>
      <div className="catalog-container">
        {!movieInformation?.content ? (
          <CatalogMovieLoader />
        ) : (
          movieInformation?.content.map((movie) => (
            <div className="catalog-movie-container" key={movie.id}>
              <Link to={`/movies/${movie.id}`} className={"movie-details-link"}>
                <MovieCard size={"sm"} movie={movie} showDescription={false} />
              </Link>
            </div>
          ))
        )}
      </div>
      <div>
        <Pagination
          pageCount={movieInformation ? movieInformation.totalPages : 0}
          range={3}
          forcePage={movieInformation?.number}
          onChange={handlePageChange}
        />
      </div>
    </main>
  );
}

export default MoviesCatalog;
