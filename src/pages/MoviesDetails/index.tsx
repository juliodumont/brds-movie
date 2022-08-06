import { BaseCard } from "../../components/BaseCard";
import MovieReview from "../../components/MovieReview";
import { ReviewForm } from "../../components/ReviewForm";
import "./styles.css";

function MoviesDetails() {
  return (
    <main className="movie-details-container">
        <div className="details-title-container">
          <h2>Tela detalhes do filme id: 1 </h2>
        </div>
        <ReviewForm/>
        <BaseCard className="reviews-container">
            <MovieReview author="Julio" review="Filme é bom"/>
        </BaseCard>
    </main>
  );
}

export default MoviesDetails;
