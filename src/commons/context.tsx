import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore"
import Firebase from '../core/services/Firebase';





interface Movie {
  name: string,
  type: string,
  duration: number,
}

interface Screen {
  screenName?: string,
  movieName: string,
  roomNumber: number,
  date: string,
  hour: string,
  soldTickets: number,
  occupiedSeats: number,
}

interface Ticket {
  holderName: string,
  movieName: string,
  date: string,
  seatNumber: number,

}


interface ContextProps {
  movies: Movie[];
  screens: Screen[];
  tickets: Ticket[];
  setMovie: (
    name: string,
    coverUrl: string,
    description: string,
    type: string,
    duration: string,
  ) => void;
  deleteMovie: (
    name: string
  ) => void,
  setScreen: (

    screenName: string,
    movieName: string,
    roomNumber: number,
    date: string,
    hour: string,
    soldTickets: number,
    occupiedSeats: number
  ) => void,
  deleteScreen: (
    screenName: string
  ) => void,
  setTicket: (
    holderName: string,
    movieName: string,
    date: string,
    seatNumber: number,
  ) => void,
}

const InformationContext = createContext<ContextProps>({
  movies: [],
  screens: [],
  tickets: [],
  setMovie: () => { },
  deleteMovie: () => { },
  setScreen: () => { },
  deleteScreen: () => { },
  setTicket: () => { },
});

export const useInformation = () => useContext(InformationContext);

interface InformationContextProps {
  children: ReactNode;
}

export default ({ children }: InformationContextProps) => {
  const [movies, setMovies] = useState();
  const [screens, setScreens] = useState();
  const [tickets, setTickets] = useState();

  useEffect(() => {
    const getMovies = async () => {
      try {
        // @ts-ignore
        const resp = [];
        (await getDocs(collection(Firebase.db, 'Movies'))).forEach(o => resp.push(o.data()));
        // @ts-ignore
        setMovies(resp);
      }
      catch (e) {
        console.log(e)
      }
    }
    getMovies();
  }, [])

  useEffect(() => {
    const getScreens = async () => {
      try {
        // @ts-ignore
        const resp = [];
        (await getDocs(collection(Firebase.db, 'Screens'))).forEach(o => resp.push(o.data()));
        // @ts-ignore
        setScreens(resp);
      }
      catch (e) {
        console.log(e)
      }
    }
    getScreens();
  }, [])

  useEffect(() => {
    const getTickets = async () => {
      try {
        // @ts-ignore
        const resp = [];
        (await getDocs(collection(Firebase.db, 'Tickets'))).forEach(o => resp.push(o.data()));
        // @ts-ignore
        setTickets(resp);
      }
      catch (e) {
        console.log(e)
      }
    }
    getTickets();
  }, [])

  const setScreen = useCallback(
    async (
    
      screenName: string,
      movieName: string,
      roomNumber: number,
      date: string,
      hour: string,
      soldTickets: number,
      occupiedSeats: number) => {
      try {

        await setDoc(doc(Firebase.db, "Screens", screenName = movieName + roomNumber), {
          
          movieName: movieName,
          roomNumber: roomNumber,
          date: date,
          hour: hour,
          soldTickets: soldTickets,
          occupiedSeats: occupiedSeats,
        });

      } catch (e) {
        console.log(e)
      }
      // @ts-ignore
      const resp = [];
      (await getDocs(collection(Firebase.db, 'Screens'))).forEach(o => resp.push(o.data()));
      // @ts-ignore
      setScreens(resp);
    },
    [screens],
  );

  const setTicket = useCallback(
    async (
      holderName: string,
      movieName: string,
      date: string,
      seatNumber: number,
    ) => {
      try {

        await setDoc(doc(Firebase.db, "Tickets", holderName), {
          holderName: holderName,
          movieName: movieName,
          date: date,
          seatNumber: seatNumber,
        });

      } catch (e) {
        console.log(e)
      }
    },
    [],
  );


  const setMovie = useCallback(
    async (name: string,
      coverUrl: string,
      description: string,
      type: string,
      duration: string) => {
      try {

        await setDoc(doc(Firebase.db, "Movies", name), {
          name: name,
          coverUrl: coverUrl,
          description: description,
          type: type,
          duration: duration,
        });

      } catch (e) {
        console.log(e)
      }
      // @ts-ignore
      const resp = [];
      (await getDocs(collection(Firebase.db, 'Movies'))).forEach(o => resp.push(o.data()));
      // @ts-ignore
      setMovies(resp);
    },
    [],
  );

  const deleteMovie = useCallback(
    async (name: string) => {
      try {
        await deleteDoc(doc(Firebase.db, "Movies", name));
      }

      catch (e) {
        console.log(e)
      }
      // @ts-ignore
      const resp = [];
      (await getDocs(collection(Firebase.db, 'Movies'))).forEach(o => resp.push(o.data()));
      // @ts-ignore
      setMovies(resp);
    },
    [],
  );

  const deleteScreen = useCallback(
    async (screenName: string) => {
      try {
        await deleteDoc(doc(Firebase.db, "Screens", screenName));
      }

      catch (e) {
        console.log(e)
      }
      // @ts-ignore
      const resp = [];
      (await getDocs(collection(Firebase.db, 'Screens'))).forEach(o => resp.push(o.data()));
      // @ts-ignore
      setScreens(resp);
    },
    [],
  );







  return (
    <InformationContext.Provider
      value={{
        // @ts-ignore
        movies,
        // @ts-ignore
        screens,
        // @ts-ignore
        tickets,
        setMovie,
        deleteMovie,
        setScreen,
        deleteScreen,
        setTicket,
      }}>
      {children}
    </InformationContext.Provider>
  );
};
