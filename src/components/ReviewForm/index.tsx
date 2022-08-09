import { SubmitHandler, useForm } from "react-hook-form";
import { BaseCard } from "../../components/BaseCard";
import { Button } from "../../components/Button";
import "./styles.css";

type ReviewForm = {
  review: string;
};

export function ReviewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewForm>();

  const onSubmit: SubmitHandler<ReviewForm> = (data: ReviewForm) => {
    console.log(data);
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
