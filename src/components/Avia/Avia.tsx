import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router';
import { TicketContext } from '../../context/index';


import './avia.css';


const Avia = () => {

    const {from, to, startDate, endDate, setFrom, setTo, setStartDate, setEndDate} = useContext(TicketContext);

    const [errorFrom, setErrorFrom] = useState('');
    const [errorTo, setErrorTo]= useState('');

    const [activeBut, setActiveBut] = useState(true);
    const btnDisableClass = 'p-3 bg-[#B7BAC1] rounded-xl text-[#FFFFFF] w-48';
    const btnActiveClass = 'p-3 bg-[#5C87DB] rounded-xl text-[#FFFFFF] w-48  hover:bg-[#3E67B7]';

    const navigate = useNavigate();
    

    useEffect(() => {
        if ((from && to && startDate) === '') {
            setActiveBut(true)
        } else {
            setActiveBut(false)
        }
    }, [from, to, startDate])


    const onChangeCity = (e: React.FormEvent<HTMLInputElement>, type:string) => {

        if (e.currentTarget.value.length > 15 && type === 'from') {
            setErrorFrom('слишком много симоволов');
        } else if (e.currentTarget.value.length < 20 && type === 'from') {
            setErrorFrom('')
            setFrom(e.currentTarget.value)
        } else if (e.currentTarget.value.length > 15 && type === 'to') {
            setErrorTo('слишком много симоволов');
        } else if (e.currentTarget.value.length < 20 && type === 'to') {
            setErrorTo('')
            setTo(e.currentTarget.value)
        }  
    };

    const onSubmit = () => {
        navigate('info');
    };  

  
    return (
        <div className='max-w-screen-lg'>
            <form className='form relative' action="" onSubmit={onSubmit}>
                <div className="rounded-t-2xl bg-[#5C87DB] p-7 grid grid-cols-4 gap-2 ">
                    <div className="">
                        <label htmlFor="from" className="mb-0.1 block text-xs font-medium text-[#FFFFFF]" >
                            Откуда
                        </label>
                        <input
                        type="text"
                        name="from"
                        value={from}
                        onChange={(e) => onChangeCity(e, 'from')}
                        id="from"
                        placeholder="Город вылета"
                        className="w-52 rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        <label className='text-[#ffffff]' htmlFor="from">{errorFrom}</label>
                    </div>

                    <div className="line"></div>

                    <div className="">
                        <label htmlFor="to" className="mb-0.1 block text-xs font-medium text-[#FFFFFF]" >
                            Куда
                        </label>
                        <input
                        type="text"
                        name="to"
                        id="to"
                        value={to}
                        onChange={(e) => onChangeCity(e, 'to')}
                        placeholder="Город прилёта"
                        className="w-52 rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        <label className='text-[#ffffff]' htmlFor="from">{errorTo}</label>
                    </div>

                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label
                            htmlFor="date"
                            className="mb-0.1 block text-xs font-medium text-[#FFFFFF]">
                                Туда
                            </label>
                            <input
                            type="date"
                            name="date"
                            id="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-52 rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>

                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <label
                            htmlFor="date"
                            className="mb-0.1 block text-xs font-medium text-[#FFFFFF]">
                                Обратно
                            </label>
                            <input
                            type="date"
                            name="date"
                            id="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-52 rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    </div>
                </div>

                <div className='rounded-b-2xl shadow-xl p-10 flex justify-end'>
                    <button className={activeBut ? btnDisableClass : btnActiveClass} type='submit' disabled={activeBut}>Найти билеты</button>
                </div>
            </form>
        </div>
    );
};

export default Avia;