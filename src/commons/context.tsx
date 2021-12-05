import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
  } from 'react';

  import { getFirestore , collection, getDocs, setDoc, doc, deleteDoc} from "firebase/firestore"



// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl1u6RnXGg3OLuv-xs8xhE4HvhwbMXe0E",
  authDomain: "aiook-4ddd5.firebaseapp.com",
  projectId: "aiook-4ddd5",
  storageBucket: "aiook-4ddd5.appspot.com",
  messagingSenderId: "842425932207",
  appId: "1:842425932207:web:d21c2dd12cb3e5c93db75a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

  interface Movie {
      name: string,
      type: string,
      duration: number,
  }

  interface Screen {
    movieName: string,
    roomNumber: number,
    date: string,
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
    tickets : Ticket[];
    setMovie: (
      name: string,
      type: string,
      duration: number,
    ) => void;
    deleteMovie: (
      name: string
    ) => void,
    setScreen: (
      screenName: string,
      movieName: string,
      roomNumber: number,
      date: string,
      soldTickets: number,
      occupiedSeats: number
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
    setMovie: () => {},
    deleteMovie: () => {},
    setScreen: () => {},
    setTicket: () => {},
  });
  
  export const useInformation = () => useContext(InformationContext);
  
  interface InboxContextProps {
    children: ReactNode;
  }
  
  export default ({children} : InboxContextProps) => {
    const [movies,setMovies] = useState();
    const [screens,setScreens] = useState();
    const [tickets, setTickets] = useState();

    useEffect(()=> {
      const getMovies = async () => {
        try {
          // @ts-ignore
        const resp = [];
        (await getDocs(collection(db, 'Movies'))).forEach(o=>resp.push(o.data()));
        // @ts-ignore
        setMovies(resp);
        }
        catch (e) {
          console.log(e)
        }    
      }
      getMovies();
    },[])

    useEffect(()=> {
      const getScreens = async () => {
        try {
          // @ts-ignore
        const resp = [];
        (await getDocs(collection(db, 'Screens'))).forEach(o=>resp.push(o.data()));
        // @ts-ignore
        setScreens(resp);
        }
        catch (e) {
          console.log(e)
        }    
      }
      getScreens();
    },[])

    useEffect(()=> {
      const getTickets = async () => {
        try {
          // @ts-ignore
        const resp = [];
        (await getDocs(collection(db, 'Tickets'))).forEach(o=>resp.push(o.data()));
        // @ts-ignore
        setTickets(resp);
        }
        catch (e) {
          console.log(e)
        }    
      }
      getTickets();
    },[])

    const setScreen = useCallback(
      async ( 
        screenName: string,
        movieName: string,
        roomNumber: number,
        date: string,
        soldTickets: number,
        occupiedSeats: number) => {
        try {
         
          await setDoc(doc(db, "Screens", screenName), {
            movieName: movieName,
            roomNumber: roomNumber,
            date: date,
            soldTickets: soldTickets ,
            occupiedSeats: occupiedSeats ,
          });
         
        } catch (e) {
         console.log(e)
        }    
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
         
          await setDoc(doc(db, "Tickets",holderName), {
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
        type: string,
        duration: number) => {
        try {
         
          await setDoc(doc(db, "Movies", name), {
            name: name,
           type: type,
           duration: duration,
          });
         
        } catch (e) {
         console.log(e)
        }    
      },
      [],
    );

    const deleteMovie = useCallback(
      async (name: string) => {
        try {
          await deleteDoc(doc(db, "Movies", name));
          }
         
         catch (e) {
         console.log(e)
        }    
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
            setTicket,
        }}>
        {children}
      </InformationContext.Provider>
    );
  };
  