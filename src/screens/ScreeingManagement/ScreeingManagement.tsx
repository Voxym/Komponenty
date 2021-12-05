import './styles.css';
import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage
} from 'formik';
import * as Yup from 'yup';

interface MyFormValues {
  uid?: string,
  movie: Object;
  room: Object;
  date: Date;
  // startTime: number | null;
  soldTickets: number | null;
  occupiedSeats: number | null;

}



export default () => {
  return (
    <div className='Screen'>
    </div>
  );
}
