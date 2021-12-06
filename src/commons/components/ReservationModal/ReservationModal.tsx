import Button from '@mui/material/Button';
import Modal  from '@mui/material/Modal';
import Paper  from '@mui/material/Modal';
import React, {useState, useCallback} from 'react';
import { useReservations } from '../../../core/context/ReservationContext';
import Seat from './Seat/Seat';

interface Props {
    onClose: () => void
}

export default ({onClose}: Props) => {
    // @ts-ignore
    const { room } = useReservations()
    // @ts-ignore
    const [selectedSeats, setSelectedSeats] = useState([])

    const handleSelectSeat = useCallback((row: number, uid: number, action: 'select' | 'remove') => {
        console.log(row, uid, action)
        if(action === 'select') {
            // @ts-ignore
            setSelectedSeats(curr => [...curr, {row, uid}])
        } else if(action === 'remove') {
            // @ts-ignore
           setSelectedSeats(curr =>  curr.filter((o: any) => !(o.row === row && o.uid === uid)))
        }
    }, [selectedSeats])

    return <Modal open={true} hideBackdrop={true} style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Paper  open={true} hideBackdrop={true} style={{ width: 300, height: 300, backgroundColor: 'white', padding: 10}} >
        <>
        <p>{room.name}</p>
            {Object.values(room?.rows || {}).map((o: any, i:number) =>             <div style={{display: 'flex', whiteSpace:'pre-wrap', width: '100%', justifyContent: 'center'}}>
                        {o.map((v: any) => 
                            <Seat number={v} onClick={(uid: number, action: any) => handleSelectSeat(i, uid, action)}/>
                        )}
            </div>)}
            <p>Wybrane miejsca {selectedSeats.length}</p>

            <Button variant="outlined" onClick={onClose}>Close</Button>
        </>
            </Paper>
        </Modal>;
} 

