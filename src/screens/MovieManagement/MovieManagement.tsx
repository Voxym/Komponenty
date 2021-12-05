import './styles.css';
import { v4 as uuidv4 } from 'uuid';
import * as React from 'react';

import { MyTable } from './MyTable';
import { MyForm } from './MyForm';
import { string } from 'yup';

export default () => {
  const [movies, setMovies] = React.useState([
    { title: 'tytul 1', type: 'gatunek 1', duration: 1200 },
    { title: 'tytul 2', type: 'gatunek 2', duration: 124 }
  ]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <MyForm
          onSubmit={data => {
            setMovies(currentRows => [
              {
                ...data
              },
              ...currentRows
            ]);
          }}
        />
        <MyTable rows={movies} />
      </div>
    </>
  );
};

