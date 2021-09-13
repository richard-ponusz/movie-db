/**
 * Interface for a single Movie data
 */
export interface Movie {
  /** Unique UUID for movie */
  id: string,
  /** Title of the Movie */
  title: string,
  /** Release of the movie, format: YYYY/MM/DD*/
  releaseDate: string,
  /** path to movie poster. File Type: jpg or png. Mocked data is a link. */
  poster: string,
}