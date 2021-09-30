import { Movie } from "../interfaces/types";
import styles from "./movieList.module.css";
import MovieView from "./MovieView";

const MovieList = ({ movies }: MovieListProps) => {
  const renderMovies = (): JSX.Element[] => {
    return movies.map((movie: Movie) => {
      return <MovieView key={movie.id} movieItem={movie} />
    })
  }

  return (
    <div className={styles.container}>
      {movies ? renderMovies() : null}
    </div>
  )
}

type MovieListProps = {
  movies: Movie[],
}

export default MovieList;
