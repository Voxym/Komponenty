import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@mui/material/Button'
import { useInformation } from '../../commons/context'

export function MyTableScreen() {
    const { screens, setScreen, deleteScreen } = useInformation();
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Room Number</TableCell>
                        <TableCell>Movie Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Hour</TableCell>
                        <TableCell>Sold Tickets</TableCell>
                        <TableCell>Occupied Seats</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { screens ? screens.map(o => (
                    <TableRow key={o.screenName}>
                        <TableCell>{o.roomNumber}</TableCell>
                        <TableCell>{o.movieName}</TableCell>
                        <TableCell>{o.date}</TableCell>
                        <TableCell>{o.hour}</TableCell>
                        <TableCell>{o.soldTickets}</TableCell>
                        <TableCell>{o.occupiedSeats}</TableCell>
                        <Button variant='contained'>Edit</Button>
                        <Button 
                        onClick={() => deleteScreen(o.movieName + o.roomNumber)}
                        variant='contained'>Delete</Button>
                    </TableRow>
                    )) : null }
                </TableBody>
            </Table>
        </Paper>
    );
}