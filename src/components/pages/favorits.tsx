import React, { useEffect, useState } from 'react';
import Spinner from '../spinner';
import MovieDBService from '../../services'


const Favorits = () => {
  interface response {
    readonly page: number,
    readonly results: [],
    readonly total_pages: number,
    readonly total_results: number
  }
  type dataType = response | undefined;

  const movieDBService = new MovieDBService();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('update state');
    movieDBService.getPopular()
      .then((data: dataType) => {
        setData(data!.results);
      })
  }, []);
  console.log('data set to ' +  data)

  return (
    <div>List of favorited titles</div>
  );
}
export default Favorits;


