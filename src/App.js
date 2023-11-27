import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homescreen from './Component/Homescreen';
import PokemandetailScreen from './Component/PokemandetailScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homescreen/>}/>
        <Route path='/:id' element={<PokemandetailScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App