import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@mui/material/Button'
import { useInformation } from '../../commons/context'
import { useState } from "react";
import { Form, Formik, Field } from "formik";
import { MyField } from "./MyField";

interface Values {
    name: string;
    coverUrl: string;
    description: string;
    type: string;
    duration: string;
  }
  


export function MyTableMovie() {
    const { movies, setMovie, deleteMovie } = useInformation();
    const [edit,setEdit] = useState(false);
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        
                        <TableCell style={{alignSelf:'flex-end'}}>{ edit ? <Button variant='contained' onClick={() => setEdit(false)}>Cancel</Button> 
                          :  <Button variant='contained' onClick={() => setEdit(true)}>Edit</Button>
                        }</TableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                { edit ? 
                
              
                <div >  { movies ? movies.map(o => (
                    <div style={{height:50}}>
                        <Formik
                initialValues={{ movieName: o.name,coverUrl: o.coverUrl,description: o.description, type: o.type, duration: o.duration }}
                onSubmit={(values, { resetForm }) => {
                  setMovie(values.movieName,values.coverUrl,values.description,values.type,values.duration);
                  resetForm();
                  setEdit(false);
                }} ><Form><div style={{display:'flex' ,flexDirection:'row',justifyContent:'space-between',margin:20}}>
                     <div style={{margin:10}}>{o.name}</div>
                     <div style={{margin:10}}><Field name="type" type="string" placeholder ={o.type} component={MyField}/></div>
                     <div style={{margin:10}}> <Field name="duration" type="string" placeholder ={o.duration} component={MyField}/></div>
                     <div style={{margin:10}}> <Field name="coverUrl" type="string" placeholder ='url' component={MyField}/></div>
                     <div style={{margin:10}}>  <Field name="description" type="string" placeholder ='description' component={MyField}/></div>
                        
                        <Button  variant='contained' type="submit">Save</Button>
                        </div>
                      </Form></Formik> </div>
                    
                    )) : null } </div> 
                : <div >  { movies ? movies.map(o => (
                    <TableRow  key={o.name}>
                        <TableCell style={{width:700}}>{o.name}</TableCell>
                        <TableCell style={{width:700}}>{o.type}</TableCell>
                        <TableCell style={{width:700}}>{o.duration}</TableCell>
                        <Button style={{margin: 20}} variant='contained' onClick={() => deleteMovie(o.name)}>Delete</Button>
                    </TableRow>
                    )) : null } </div>}
                </TableBody>
            </Table>
        </Paper>
    );
}