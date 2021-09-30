import { Movie } from '../interfaces/types';
import styles from './movieView.module.css';

const MovieView = ({ movieItem }: MovieViewProps) => (
  <div className={styles.container}>
    <img key={movieItem.id} src={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`} className={styles.movie__poster} alt={movieItem.title} />
    <span className={styles.movie__title}>
      {movieItem.title ? movieItem.title : "undefined?"}
    </span>
  </div>
)

type MovieViewProps = {
  movieItem: Movie,
};

export default MovieView;
