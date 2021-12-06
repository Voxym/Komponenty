import { useInformation } from '../../commons/context';
import { MyFormScreen } from './MyFormScreen';
import { MyTableScreen } from './MyTableScreen';
import './styles.css';


export default () => {
  const {screens,setScreen} = useInformation();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <MyFormScreen
          onSubmit={data => {
            setScreen(data.movieName+data.date,data.movieName,data.roomNumber,data.date, data.soldTickets, data.occupiedSeats)
          }}
        />
        <MyTableScreen />
      </div>
    </>
  );
}
