import { collection, doc, getDoc, getDocs } from '@firebase/firestore';
import React, {useState, useEffect, createContext, useContext } from 'react';
import Firebase from '../services/Firebase';

const ReservationContext = createContext({});

// eslint-disable-next-line
export const  useReservations = () => useContext(ReservationContext)

interface ReservationContextProps {
    reservationDetails: any;
    children?: React.ReactNode
}


export default ({reservationDetails, children}: ReservationContextProps) => {
const [room, setRoom] = useState({})

useEffect(() => {
    const getRoomDetails = async () => {
        try {
            // @ts-ignore
            setRoom(await (await getDoc(doc(Firebase.db, "rooms", reservationDetails.roomUid))).data());
          }
          catch (e) {
            console.log(e)
          }
    }

    getRoomDetails();
}, [])

return <ReservationContext.Provider value={{room}}>
    {children}
</ReservationContext.Provider>
}