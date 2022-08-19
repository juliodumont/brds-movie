export type MovieGenre = {
  id: number;
  name: string | null;
}

export type MovieInformation = {
  id: number;
  title: string;
  subTitle?: string;
  year: number;
  imgUrl: string;
  synopsis?: string;
  genre?: MovieGenre;
}
