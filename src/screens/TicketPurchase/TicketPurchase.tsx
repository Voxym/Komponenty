import './styles.css';
import React from 'react'
import Select from 'react-select';
import { useState } from 'react';
import { Formik, useFormik } from 'formik';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const options2 = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const formik = useFormik({
  initialValues:{},
  onSubmit:value => {
    console.log(value)
  }
})

export default () => {
  
  return (
    <div className='Screen'>
     <h1>Purchase Ticket</h1>
      <form onSubmit={formik.handleSubmit}>
          <h3>Select movie from the list</h3>
          <Select options={options}/>
          
          <h3>Choose where do you want to sit</h3>
          <Select options={options2}/>
          <button type="submit">Buy ticket</button>
      </form>
      </div>
  );
}

