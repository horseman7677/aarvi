import './App.css';
import { Router, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Router>
        <Route exact path='/' element={<Home />} />
      </Router>

    </>
  );
}

export default App;
