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
            setScreen(data.movieName + data.roomNumber + data.hour,data.movieName,data.roomNumber,data.date,data.hour, data.soldTickets, data.occupiedSeats)
          }}
        />
        <MyTableScreen />
      </div>
    </>
  );
}
