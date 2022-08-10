import { AxiosRequestConfig } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { BaseCard } from "../../components/BaseCard";
import { Button } from "../../components/Button";
import { requestBackend } from "../../util/requests";
import "./styles.css";

type ReviewForm = {
  review: string;
};

type Props = {
  reviewId: string;
  onNewReview: () => void;
};

export function ReviewForm(props: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewForm>();

  const onSubmit: SubmitHandler<ReviewForm> = (data: ReviewForm) => {
    const params : AxiosRequestConfig = {
      url: `/reviews`,
      withCredentials: true,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'text': data.review,
        'movieId': props.reviewId
      }
    };
    requestBackend(params).then((response) => {
      props.onNewReview();
      reset();
    })    
  };

  return (
    <BaseCard className="review-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.review && (
          <div className="username-error">{errors.review.message}</div>
        )}
        <input
          {...register("review", {
            required: "A avaliação não pode estar em branco!",
          })}
          type="text"
          placeholder="Deixe sua avaliação aqui"
        />
        <div className="review-button-container">
          <Button className="review-button" text="Salvar avaliação" />
        </div>
      </form>
    </BaseCard>
  );
}
