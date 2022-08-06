import "./styles.css";
import ReviewStar from "../../assets/images/review-star.svg";
type ReviewProps = {
  author: string;
  review: string;
};

function MovieReview(props: ReviewProps) {
  return (
    <div className="movie-review">
      <div className="review-author-container">
        <span className="review-image">
            <img src={ReviewStar} alt="Review image" />
        </span>
        <h3>
          {props.author}
        </h3>
      </div>
      <div className="review-container">
        <p>{props.review}</p>
      </div>
    </div>
  );
}

export default MovieReview;
