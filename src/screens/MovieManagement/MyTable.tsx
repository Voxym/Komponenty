import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface Props {
    rows: Array<{
        name: string;
        type: string;
        duration: number ;
    }>;
}

export function MyTable({ rows }: Props) {
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
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.duration}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}