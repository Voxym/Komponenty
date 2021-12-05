import './App.css';
import Home from './screens/Home/Home'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import MovieManagement from './screens/MovieManagement/MovieManagement';
import ScreeingManagement from './screens/ScreeingManagement/ScreeingManagement';
import TicketPurchase from './screens/TicketPurchase/TicketPurchase';
import { useInormation } from './commons/context';


function App() {

  const {screens, tickets,movies,setScreen,setTicket,setMovie} = useInormation();
  

  return (
    <Router>
    <Paper elevation={4}
    className="MainScreen">
      <h1 className='Title'
      >CINEMA CITY</h1>
      <div className='TopBar'>
        <div className="Button">
      <Button 
      component={Link}
      to={'/'}
      variant='contained'>
        Home
      </Button></div><div className="Button">
      <Button 
      component={Link}
      to={'/TicketPurchase'}
      variant='contained'>
       Purchase Tickets
      </Button></div><div className="Button">
      <Button 
      component={Link}
      to={'/ScreeingManagement'}
      variant='contained'>
        Manage Screens
      </Button></div><div className="Button">
      <Button 
      variant='contained'
      component={Link}
      to={'/MovieManagement'}
      >
      Edit Movies
      </Button>
      <Button
      onClick={() => setScreen('piraci',120,'123123123123',0,0)}>
        firebase check
      </Button>
      </div>
      </div>
      <div><hr/></div>
    
    <Route exact path='/' component={Home} />
    <Route exact path='/TicketPurchase' component={TicketPurchase} />
    <Route exact path='/ScreeingManagement' component={ScreeingManagement} />
    <Route exact path='/MovieManagement' component={MovieManagement} />
    <div><hr/></div>
    <footer>
      designed by : 
      Jakub Malinowski,
      Jakub Mońko,
      Maciej Sobolewski
    </footer>
    </Paper>
  </Router>
  
  );
}

export default App;
