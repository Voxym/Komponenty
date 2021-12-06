import { collection, getDocs } from '@firebase/firestore';
import React, {useState, useEffect, createContext, useContext } from 'react';
import Firebase from '../services/Firebase';

const MoviesContext = createContext({});

// eslint-disable-next-line
export const  useMovies = () => useContext(MoviesContext)

interface MoviesContextProps {
    children: React.ReactNode
}


export default ({children}:MoviesContextProps) => {
const [movies, setMovies] = useState([])

useEffect(() => {
    const getMovies = async () => {
        try {
            // @ts-ignore
            const resp = [];
            (await getDocs(collection(Firebase.db, 'Movies'))).forEach(o => resp.push({uid: o.id, ...o.data()}));
            // @ts-ignore
            setMovies(resp);
          }
          catch (e) {
            console.log(e)
          }
    }

    getMovies();
}, [])

return <MoviesContext.Provider value={{movies}}>
    {children}
</MoviesContext.Provider>
}