import { useContext, useState } from "react";
import { ShopContextProvider } from "../Providers/ShopDataProvider";
// import { DateRangePicker } from "react-date-range";

import { addDays, format } from 'date-fns';

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const TransactionFilters = () => {

    const { handleModalState,handleFilterData } = useContext(ShopContextProvider);
    const [activeTab, setActiveTab] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    // date
    const [dateState, setDateState] = useState([
        {
            startDate: new Date(),
            // startDate: 0,
            endDate: addDays(new Date(), 0),
            // endDate: 0,
            key: 'selection'
        }
    ])

    const handleFilterInput = () => {
        handleModalState()
    
        const finalFilterData = {
            startDate:dateState[0]?.startDate || '',
            endDate:dateState[0]?.endDate || '',
            phoneNumber:phoneNumber || ''
        }
        console.log('final filter date',finalFilterData);
        handleFilterData(finalFilterData)
    }

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50 ">
                {/* <!-- Modal backdrop --> */}
                <div className="fixed inset-0 bg-black opacity-50"></div>

                {/* <!-- Modal container --> */}
                <div className="bg-white rounded-lg w-[1000px] max-h-4/5 overflow-hidden z-10">

                    {/* <!-- Modal header --> */}
                    <div className="  px-6 py-3 flex items-center
                            border border-solid border-slate-200
                            ">
                        {/* modal close btn */}
                        <button
                            className="p-1 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={handleModalState}
                        >
                            <span className=" text-black  h-8 w-8 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>

                        <h3 className="text-xl font-semibold  w-full text-center">
                            Filters
                        </h3>

                    </div>


                    {/* <!-- Modal body --> */}

                    <div className="px-8 py-6 max-h-96 lg:h-[1100px]    overflow-auto">
                        {/* 1st filter */}
                        <h3 className="text-2xl font-bold">Filter by Phone number</h3>
                        <div className="py-4">
                            <input className="border rounded-[10px] py-2 px-2 w-[250px]" placeholder="Enter Phone Number" type="text" name="" id=""
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <hr />
                        {/* 2nd filter */}
                        <div className="py-4">
                            <h3 className="text-2xl font-bold">Filter by Date</h3>

                            <div className={`bg-white  rounded-[48px] py-5  flex gap-10 cursor-pointer `}
                            >
                                <button className='  font-semibold bg-[#F09F00] px-2 py-1 rounded-lg text-white hover:bg-[#f6d955]'
                                    onClick={() => setActiveTab(!activeTab)}
                                >Select your dates</button>
                                <div className="">
                                    <p className='text-[#717171]'>Start date: {format(dateState[0]?.startDate, 'MMM d')}</p>
                                    <p className=' text-[#717171]'>End date: {format(dateState[0]?.endDate, 'MMM d')}</p>
                                </div>

                            </div>
                            <div className={`${activeTab === true ? 'w-[800px]   rounded-[48px] shadow-2xl mt-5 relative' : 'hidden'}`}>
                                <button onClick={() => setActiveTab(!activeTab)} className='absolute -right-6  -top-4 w-[30px] h-[30px] border-2 hover:bg-[#ff385c] hover:text-white hover:border-none   text-black bg-transparent  rounded-full flex items-center justify-center'>X</button>
                                <DateRangePicker
                                    className="w-11/12"
                                    onChange={item => setDateState([item.selection])}
                                    showSelectionPreview={true}
                                    // moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={dateState}
                                    direction="horizontal"
                                    preventSnapRefocus="disabled"
                                    minDate={new Date()}
                                // preventSnapRefocus="backward"
                                // disabledDates=

                                />
                            </div>
                        </div>


                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className=" border border-solid border-slate-200 px-6 py-4 flex items-center justify-between">
                        <p className="underline font-bold"
                        ></p>
                        <button className="w-[172px] h-[50px] rounded-xl font-bold text-white bg-black"
                        onClick={handleFilterInput}
                        >
                            <p
                           
                            >Show  places</p>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionFilters;