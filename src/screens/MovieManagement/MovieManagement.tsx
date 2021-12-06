import './styles.css';
import {useInformation} from '../../commons/context'
import { MyTableMovie } from './MyTableMovie';
import { MyFormMovie } from './MyFormMovie';


export default () => {

  const {movies,setMovie} = useInformation();



  return (
    <>
      <div style={{ textAlign: "center" }}>
        <MyFormMovie
          onSubmit={data => {
            setMovie(data.name,data.type,data.duration)
          }}
        />
        <MyTableMovie />
      </div>
    </>
  );
};

