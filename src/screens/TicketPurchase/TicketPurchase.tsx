import './styles.css';
import React from 'react'
import Select from 'react-select';
import { useState } from 'react';
import { Formik, useFormik } from 'formik';
import Button from '@mui/material/Button'
import { margin } from '@mui/system';
import { useInformation } from '../../commons/context';

const options2 = [
  { value: 'movie', label:  },
  { value: 'room', label:  },
  { value: 'date', label: },
]


interface Option {
  
      movieName: string;
      roomNumber: number;
      date: string;
 

  
}


function TicketPurchase(){
  const formik = useFormik({
    initialValues:{},
    onSubmit:value => {
      console.log(value)
    }
  })

 const {screens} = useInformation();
  const [selectedOption,setSelectedOption]=useState(null)
 const options:Option[] = []
  options.map(o => {
    o.movieName 
  })
  return (
    <div className='Screen'>
     <h1>Purchase Ticket</h1>
      <form onSubmit={formik.handleSubmit}>
          <h3>Select movie from the list</h3>
          
          <Select options={options2} onChange={setSelectedOption(selectedOption)} value={selectedOption}/>
          
          <h3>Choose where do you want to sit</h3>
          <Select options={options2}/>
          <p></p>
          <Button variant="contained" margin-top="10px">Submit</Button>
      </form>
      </div>
  );
}

export default TicketPurchase