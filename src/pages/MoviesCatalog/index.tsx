import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { MovieInformation } from "../../types/movie";
import { Page } from "../../types/vendor/page";
import { requestBackend } from "../../util/requests";
import "./styles.css";

function MoviesCatalog() {
  const [movieInformation, setMovieInformation] = useState<Page<MovieInformation>>();

  useEffect(()=>{
    const params: AxiosRequestConfig ={
      url: '/movies/1',
      withCredentials: true,
    }

    requestBackend(params).then((response)=>console.log(response.data))

  },[])
  return (
    <main className="movie-catalog-container">
        <div className="catalog-title-container">
          <h2>Tela listagem de filmes</h2>
        </div>
        <div className="catalog-container">
          <MovieCard size={"sm"} movie={{
          id: 0,
          title: "",
          subTitle: "",
          year: 0,
          imgUrl: "",
          synopsis: undefined,
          genre: undefined
        }}/>
          <Link to="/movies/1">Acessar /movies/1</Link> 
          <Link to="/movies/2">Acessar /movies/2</Link> 
        </div>
    </main>
  );
}

export default MoviesCatalog;
