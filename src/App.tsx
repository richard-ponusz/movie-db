import { useEffect, useState } from 'react';

import { AxiosError, AxiosResponse } from 'axios';

import { Movie, Tmdb } from './interfaces/types';
import useTmdb from './customHooks/apiHooks';
import HeaderBar from './components/header/HeaderBar';
import MainSearch from './components/MainSearch';
import MovieList from './components/MovieList';

function App() {
  const { response, error, isRequestOn }: responseType = useTmdb({
    method: 'get',
    url: '/discover/movie?sort_by=popularity.desc',
  });
  const [movies, setMovies] = useState<Movie[] | null>(null);

  /**
   * Renders the main body of the page. Depending on the TMDB api outcome it
   * can be: 
   * - request sent, no response yet --> renders: Loading tag
   * - Error in response --> renders: error message
   * - successfull request --> renders: the MovieList component
   * @returns HTMLElement | React.ComponentType
   */
  const renderMainPageBody = () => {
    return isRequestOn ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        {error ? (
          <p>{error.message}</p>
        )
          : movies !== null ? <MovieList movies={movies} /> : 'no Movies to show'}
      </div>
    )
  }

  useEffect(() => {
    if (response !== undefined) {
      const { page, results, total_pages }: Tmdb = response.data;
      const data = { page, results, total_pages };
      setMovies(data.results);
    }
  }, [movies, response]);

  return (
    <div>
      <HeaderBar />
      <MainSearch />
      {renderMainPageBody()}
    </div>
  );
}

type responseType = {
  response: AxiosResponse<any> | undefined,
  error: Error | AxiosError<any> | undefined,
  isRequestOn: boolean
}

export default App;
