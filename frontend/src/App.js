import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { NavLink, Routes } from "react-router-dom";
import Main from './Main';
import SignUpPage from './components/login/SignUpPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/SignUpPage" element={<SignUpPage/>}/>
        </Routes>

    </Router>
  );
}

export default App;