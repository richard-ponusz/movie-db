import { Movie } from "../interfaces/types";
import MockMovies from "../mock-data/movie/Movies.mock";
import styles from "./movieList.module.css";
import MovieView from "./MovieView";

const MovieList = () => {
  const renderMovies = (): JSX.Element[] => {
    return MockMovies.map((movie: Movie) => {
      return <MovieView movieItem={movie} />
    })
  }

  return (
    <div className={styles.container}>
      {renderMovies()}
    </div>
  )
}

export default MovieList;
