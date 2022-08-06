import { BaseCard } from "../../components/BaseCard";
import { Button } from "../../components/Button";
import "./styles.css";

export function ReviewForm() {
  return (
    <BaseCard className="review-form-container">
      <form action="">
        <input
          type="text"
          name="review"
          placeholder="Deixe sua avaliação aqui"
        />
      </form>
      <Button className="review-button" text="Salvar avaliação" />
    </BaseCard>
  );
}
