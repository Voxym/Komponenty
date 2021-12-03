import './App.css';
import Home from './screens/Home/Home'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import MovieManagement from './screens/MovieManagement/MovieManagement';
import ScreeingManagement from './screens/ScreeingManagement/ScreeingManagement';
import TicketPurchase from './screens/TicketPurchase/TicketPurchase';
import { getFirestore , collection, getDocs} from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect ,useState} from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBqvJnBaaBRGeMoeQyn1PhiIE9pq2ihCE",
  authDomain: "pb-aiook.firebaseapp.com",
  databaseURL: "https://pb-aiook-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pb-aiook",
  storageBucket: "pb-aiook.appspot.com",
  messagingSenderId: "248719415794",
  appId: "1:248719415794:web:d1487af3bc0034d581f36b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

function App() {
const [movies,setMovies] = useState([]);
  useEffect(()=> {
    const getMovies = async () => {
      const resp = [];
      (await getDocs(collection(db, 'Movies'))).forEach(o=>resp.push(o.data()));
      setMovies(resp);
    }
    getMovies();
  },[])
console.log(movies)
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
      </Button></div>
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
