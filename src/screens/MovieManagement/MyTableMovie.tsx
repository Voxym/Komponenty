import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@mui/material/Button'
import { useInformation } from '../../commons/context'

export function MyTableMovie() {
    const { movies, setMovie, deleteMovie } = useInformation();
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Duration (min)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { movies ? movies.map(o => (
                    <TableRow key={o.name}>
                        <TableCell>{o.name}</TableCell>
                        <TableCell>{o.type}</TableCell>
                        <TableCell>{o.duration}</TableCell>
                        
                        <Button variant='contained' onClick={() => deleteMovie(o.name)}>Delete</Button>
                    </TableRow>
                    )) : null }
                </TableBody>
            </Table>
        </Paper>
    );
}