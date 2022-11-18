import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Avia from './components/Avia/Avia';
import Info from './components/Info/Info';


function App() {
    
  return (
    <div className='max-w-6xl container mx-auto mt-20'>
        <Routes>
            <Route path='/avia' element={<Avia/>}/>
            <Route path='/avia/info' element={<Info/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
