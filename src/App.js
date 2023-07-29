import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Create from "./Pages/Create";


function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home />}>
      </Route>
      <Route path='/signup' element={<Signup />}>
       </Route>
       <Route path='/login' element={<Login/>}>
       </Route>
       <Route path='/create' element={<Create/>}>
       </Route>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
