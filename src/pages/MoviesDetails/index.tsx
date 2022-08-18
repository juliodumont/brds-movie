import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseCard } from "../../components/BaseCard";
import MovieCard from "../../components/MovieCard";
import MovieReview from "../../components/MovieReview";
import { ReviewForm } from "../../components/ReviewForm";
import { activeWithRole } from "../../util/authentication";
import {
  requestBackend,
} from "../../util/requests";
import "./styles.css";

type MovieReview = {
  id: number;
  text: string;
  movieId: number;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

type UrlParams = {
  movieId: string;
};





function MoviesDetails() {
  const { movieId } = useParams<UrlParams>();
  const [reviews, setReviews] = useState<MovieReview[]>();
  const [newReview, setNewReview] = useState<boolean>(false);

  useEffect(() => {
    const params : AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setReviews(response.data.reverse());
    })    
    if(newReview){
      setNewReview(false)
    }
  }, [movieId, newReview]);

  function onNewReview(){
    setNewReview(true);
  }

  return (
    <main className="movie-details-container">
      <div className="details-title-container">
        <h2>Tela detalhes do filme id: {movieId} </h2>
      </div>
      <MovieCard size={"lg"} showDescription={true}/>
      {activeWithRole("ROLE_MEMBER") && <ReviewForm reviewId={movieId} onNewReview={onNewReview}/>}
      <BaseCard className="reviews-container">
      {reviews &&
        reviews.map((review) => {
          return (
            <MovieReview key={review.id} author={review.user.name} review={review.text}/>
          );
        })}
      </BaseCard>
    </main>
  );
}

export default MoviesDetails;
