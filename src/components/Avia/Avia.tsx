import {useState} from 'react';


import './avia.css';


const Avia = () => {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    console.log(from)

  


    return (
        <div className='max-w-screen-lg'>
            <form className='form relative' action="" >
                <div className="rounded-t-2xl bg-[#5C87DB] p-7 grid grid-cols-4 gap-2 ">
                    <div className="">
                        <label htmlFor="from" className="mb-0.1 block text-xs font-medium text-[#FFFFFF]" >
                            Откуда
                        </label>
                        <input
                        type="text"
                        name="from"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        id="from"
                        placeholder="Город вылета"
                        className="w-52 rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
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
                        onChange={() => setTo(to)}
                        placeholder="Город прилёта"
                        className="w-52 rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
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
                    <button className='p-3 bg-[#5C87DB] rounded-xl text-[#FFFFFF] w-48' type='submit'>Найти билеты</button>
                </div>
            </form>
        </div>
    );
};

export default Avia;