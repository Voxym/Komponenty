import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
  } from 'react';

  import { getFirestore , collection, getDocs, setDoc, doc, deleteDoc} from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBqvJnBaaBRGeMoeQyn1PhiIE9pq2ihCE",
  authDomain: "pb-aiook.firebaseapp.com",
  databaseURL: "https://pb-aiook-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pb-aiook",
  storageBucket: "pb-aiook.appspot.com",
  messagingSenderId: "248719415794",
  appId: "1:248719415794:web:d1487af3bc0034d581f36b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

  interface Movie {
      name: string,
      type: string,
      duration: number,
  }
  
  interface ContextProps {
    movies: Movie[];
    setMovie: (
      name: string,
      type: string,
      duration: number,
    ) => void;
    deleteMovie: (
      name: string
    ) => void,
    
  }
  
  const InformationContext = createContext<ContextProps>({
    movies: [],
    setMovie: () => {},
    deleteMovie: () => {}
  });
  
  export const useInormation = () => useContext(InformationContext);
  
  interface InboxContextProps {
    children: ReactNode;
  }
  
  export default ({children} : InboxContextProps) => {
    const [movies,setMovies] = useState();

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
    },[movies])

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
      [movies],
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
      [movies],
    );

   
    


  
    return (
      <InformationContext.Provider
        value={{
          // @ts-ignore
            movies,
            setMovie,
            deleteMovie,
        }}>
        {children}
      </InformationContext.Provider>
    );
  };
  