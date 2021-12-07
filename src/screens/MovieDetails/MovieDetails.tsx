import React, {useState} from 'react';
import { useLocation } from 'react-router';
import { useMovies } from '../../core/context/MoviesContext';
import {Button}from '@material-ui/core'

import styles from './MovieDetails.styles';
import ReservationModal from '../../commons/components/ReservationModal/ReservationModal';
import ReservationProvider from '../../core/context/ReservationContext';

export default () => {
    const {pathname} = useLocation();
    const [reservationDetails, setReservationDetails] = useState(null)
    // @ts-ignore
    const {movies} = useMovies()
    const movie = movies.find((o: any) => o.uid === pathname.replace('/movies/', '')) || {}

    return <><div style={styles.container}>
      <div style={styles.coverContainer}>
        <img style={styles.cover} src={movie.coverUrl}></img>
      </div>
      <div>
        <p style={styles.title}>{movie.name}</p>
        <p style={styles.description}>{movie.description}</p>
        <p style={styles.description}>Gatunek: {movie.type}</p>
        <p>Czas seansu: {movie.duration}</p>
        <p>Dostępne godziny</p>
        <p>{movie.seances?.map((o: any) => <Button variant="outlined" style={{ marginRight: 10, width: 100}} onClick={() => setReservationDetails(o) }>{o.hour}</Button>)}</p>
      </div>
    </div>
    {reservationDetails && <ReservationProvider reservationDetails={reservationDetails}>
      <ReservationModal onClose={() => setReservationDetails(null)}/>
    </ReservationProvider>}
</>
}