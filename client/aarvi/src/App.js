import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import About from './components/About'

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
