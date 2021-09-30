import { useEffect, useState } from 'react';
import tmdb from '../service/axiosConfig';
import { AxiosError, AxiosResponse } from 'axios';

/**
 * Axios call for TMDB (The Movie Database) website
 * @param {Object} props: containing information about sending request
 * @param {string} props.url: the requested url part after the given baseUrl in axiosConfig.js
 * @param {methood} props.method: REST method (GET, POST, DELETE etc)
 * @returns on success: the requested tmdb data, on error the error and whether the response has arrived yet
 * 
 */
const useTmdb = ({ url, method }: ApiHooksProps) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<Error | AxiosError>();
  const [isRequestOn, setIsRequestOn] = useState(true);

  const fetchData = (): void => {
    tmdb[method](url)
      .then((res: AxiosResponse): void => {
        setResponse(res)
      })
      .catch((err: Error | AxiosError): void => {
        setError(err)
      })
      .finally(() => {
        setIsRequestOn(false)
      })
  }

  useEffect(() => {
    fetchData();
  }, [method, url])

  return { response, error, isRequestOn }
}

type ApiHooksProps = {
  url: string,
  method: 'post' | 'delete' | 'put' | 'patch' | 'get',
}

export default useTmdb;
