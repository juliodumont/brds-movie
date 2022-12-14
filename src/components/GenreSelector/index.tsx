import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { MovieGenre } from "../../types/movie";
import { requestBackend } from "../../util/requests";
import "./styles.css";

export type FormGenre = {
  genre: MovieGenre | null;
};

type Props = {
  onGenreSelect: (data: FormGenre) => void;
};

function GenreSelector({ onGenreSelect }: Props) {
  const { handleSubmit, setValue, getValues, control } = useForm<FormGenre>();

  const [selectedGenres, setSelectedGenres] = useState<MovieGenre[]>([]);

  useEffect(() => {
    requestBackend({ url: "/genres", withCredentials: true }).then(
      (response) => {
        setSelectedGenres(response.data);
      }
    );
  }, []);

  const handleChangeGenre = (value: MovieGenre) => {
    setValue("genre", value);

    const genreData: FormGenre = {
      genre: getValues("genre"),
    };
    onGenreSelect(genreData);
  };

  return (
    <div className="genre-selector-container">
      <Controller
        name="genre"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={selectedGenres}
            isClearable
            placeholder="Gênero"
            classNamePrefix="genre-selector"
            onChange={(value) => handleChangeGenre(value as MovieGenre)}
            getOptionLabel={(genre: MovieGenre) => String(genre.name)}
            getOptionValue={(genre: MovieGenre) => String(genre.id)}
          />
        )}
      />
    </div>
  );
}
export default GenreSelector;
