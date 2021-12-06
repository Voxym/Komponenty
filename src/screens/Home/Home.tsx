import React from 'react'
import { useMovies } from '../../core/context/MoviesContext';
import MovieTile from '../../commons/components/MovieTile/MovieTile';

import styles from './Home.styles'

export default () => {
  // @ts-ignore
  const {movies} = useMovies()

  return (
        <div style={styles.container}>
          {movies.map((o: any) => <MovieTile key={o.uid} {...o}></MovieTile>)}
      </div>
  );
}


