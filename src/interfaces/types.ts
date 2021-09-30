/**
 * Interface for a single Movie data
 */
export interface Movie {
  /** Unique UUID for movie */
  id: number,
  /** Title of the Movie */
  title: string,
  /** Release of the movie, format: YYYY/MM/DD*/
  release_date: string,
  /** path to movie poster. File Type: jpg or png. Mocked data is a link. */
  poster_path: string,
  /** Path to backdrop image from the movie */
  backdrop_path: string,
  /** Short summary/description of a movie  */
  overview: string,
  /** Calculated average for movie ratings. float number from 0.0 to 5.0 */
  vote_average: number,
  /** number of people who voted rating for movie */
  vote_count: number
}

/**
 * response.data 
 */
export interface Tmdb {
  /** Current page of the found titles */
  page: number,
  /** Array containing Movie type objects */
  results: Movie[],
  /** Total number of pages with wanted data */
  total_pages: number,
}
