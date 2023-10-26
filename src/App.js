import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Servise from './pages/Servise';
import Aboutus from './pages/Aboutus'
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/servise'} element={<Servise/>}/>
        <Route path={'/aboutas'} element={<Aboutus/>}/>
        <Route path={'*'} element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
