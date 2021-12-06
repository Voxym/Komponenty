import './App.css';
import Home from './screens/Home/Home'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import MovieManagement from './screens/MovieManagement/MovieManagement';
import ScreeingManagement from './screens/ScreeingManagement/ScreeingManagement';
import TicketPurchase from './screens/TicketPurchase/TicketPurchase';
import MoviesProvider from './core/context/MoviesContext';
import MovieDetails from './screens/MovieDetails/MovieDetails';


function App() {
  return (
    <MoviesProvider>
       <Router>
    <Paper elevation={4}
    className="paper">
      <h1 className='Title'
      >CINEMA CITY</h1>
      <div className='TopBar'>
      <Button 
      className="Button"
      component={Link}
      to={'/'}
      variant='contained'>
        Home
      </Button>

      <Button 
            className="Button"

      component={Link}
      to={'/ScreeingManagement'}
      variant='contained'>
        Manage Screens
      </Button>

      <Button 
            className="Button"

      variant='contained'
      component={Link}
      to={'/MovieManagement'}
      >
      Edit Movies
      </Button>
      
      </div>
      <div><hr/></div>
    <Route exact path='/' component={Home} />
    <Route exact path='/movies/:uid' component={MovieDetails} />
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
  
    </MoviesProvider>
   
  
  );
}

export default App;
