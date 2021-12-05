import './styles.css';

import * as React from 'react';
import {useInformation} from '../../commons/context'

import { MyTable } from './MyTable';
import { MyForm } from './MyForm';


export default () => {

  const {movies,setMovie,tickets} = useInformation();



  return (
    <>
      <div style={{ textAlign: "center" }}>
        <MyForm
          onSubmit={data => {
            setMovie(data.title,data.type,data.duration)
          }}
        />
        <MyTable rows={movies} />
      </div>
    </>
  );
};

