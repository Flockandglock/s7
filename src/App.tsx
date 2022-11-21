import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { TicketContext } from './context';

import './App.css';

import Avia from './components/Avia/Avia';
import Info from './components/Info/Info';


function App() {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    
    return (
    <TicketContext.Provider value={{from, to, startDate, endDate, setFrom, setTo, setStartDate, setEndDate}}>
            <div className='max-w-6xl container mx-auto mt-20'>
                <Routes>
                    <Route path='/avia' element={<Avia/>}/>
                    <Route path='/avia/info' element={<Info/>}/>
                </Routes>
            </div>
    </TicketContext.Provider>
    );
}

export default App;
