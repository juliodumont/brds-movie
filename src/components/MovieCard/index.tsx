import { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieInformation } from "../../types/movie";
import { requestBackend } from "../../util/requests";
import DetailsMovieLoader from "./DetailsMovieLoader";
import "./styles.css";

type MovieCardProps = {
  size: string;
  showDescription?: boolean;
  movie?: MovieInformation;
};

type UrlParams = {
  movieId: string;
};

const MovieCard = ({ size, showDescription, movie }: MovieCardProps) => {
  const [movieInformation, setMovieInformation] = useState<MovieInformation>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { movieId } = useParams<UrlParams>();
  useEffect(() => {
    if (!movie) {
      const params: AxiosRequestConfig = {
        method: "GET",
        url: `/movies/${movieId}`,
        withCredentials: true,
      };

      requestBackend(params).then((response) => {
        setMovieInformation(response.data);
        setIsLoading(false)
      });
    }
  }, []);

  return (
    <div className={`movie-card-container ${size == "sm" ? "sm" : "lg"}`}>
      {size == "lg" && isLoading ? (
        <DetailsMovieLoader />
      ) : (
        <React.Fragment>
          <div className="movie-card-image-container">
            <img
              className="movie-card-image"
              src={`${movie ? movie.imgUrl : movieInformation?.imgUrl}`}
              alt={`Movie cover: ${
                movie ? movie.title : movieInformation?.title
              }`}
            />
          </div>
          <div className="movie-card-info-container">
            <div className="movie-card-information">
              <h2 className="movie-title">
                {movie ? movie.title : movieInformation?.title}
              </h2>
              <p className="movie-year">
                {movie ? movie.year : movieInformation?.year}
              </p>
              <p
                className={`movie-subtitle ${
                  !movie?.subTitle && !movieInformation?.subTitle
                    ? "justify-card"
                    : ""
                }`}
              >
                {movie ? movie.subTitle : movieInformation?.subTitle}
              </p>
            </div>
            {showDescription && (
              <div className="movie-card-description">
                {movie ? movie.synopsis : movieInformation?.synopsis}
              </div>
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default MovieCard;
