import React from 'react';

import './App.css';

import Avia from './components/Avia/Avia';
import Info from './components/Info/Info';


function App() {
    
  return (
    <div className='max-w-6xl container mx-auto mt-20'>
        <Avia/>

        <Info/>
    </div>
    
  );
}

export default App;
