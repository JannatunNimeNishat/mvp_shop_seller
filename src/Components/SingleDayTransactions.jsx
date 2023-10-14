import { parse, format } from 'date-fns';
import { useState } from 'react';

import up_icon from '../assets/transaction_history/up.png'
import down_icon from '../assets/transaction_history/down.png'


const SingleDayTransactions = ({ singleDayTransactionsData }) => {

    const [showDetails, setShowDetails] = useState(false);

    console.log(singleDayTransactionsData);
    // date formateing
    const { created_at, cash_collected, name, order_value, reward_balance_after,points_redeemed, reward_balance_before, } = singleDayTransactionsData || {};
    const parsedDate = parse(created_at, "EEE, dd MMM yyyy HH:mm:ss 'GMT'", new Date());

    const trans_date = format(parsedDate, "MMMM yyyy")
    return (
        <div className='px-3'>
           {/*  <div className='flex justify-between px-3'>
                <h3 className='text-2xl font-semibold'>{trans_date}</h3>
                <p className='text-2xl font-semibold'>&#8377;{cash_collected}</p>
            </div> */}
            {/*  */}
            <div className=' my-8  bg-[#faf3e5] rounded-xl px-6 py-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] '
            // onClick={() => setShowDetails(true)}
            >
                <div className=' flex justify-between items-center'>
                    <div className='flex gap-5 items-center'>
                        <img className='h-16 w-16 rounded-full' src="https://i.ibb.co/tCSXZRf/m2.jpg" alt="" />
                        <p className='text-xl'>{name || ` Pankaj Sharma`}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='text-xl font-semibold'>&#8377;{cash_collected}</p>
                        {/* down */}
                        <button
                         className={`${showDetails === true ? 'hidden':''}`}
                        >
                            <img className='h-6 w-6 cursor-pointer' src={down_icon} alt="" 
                            onClick={() => setShowDetails(!showDetails)}
                            />
                        </button>

                        {/* up */}
                        <button
                        className={`${showDetails === true ? '':'hidden'}`}
                        > 
                            <img className='h-5 w-5 cursor-pointer' src={up_icon} alt="" 
                            onClick={() => setShowDetails(!showDetails)}
                            />
                        </button>

                    </div>
                </div>

                {
                    showDetails && <div className='flex justify-between items-center pt-5 pb-2 '>

                        <div className='bg-[#ecd2a0] rounded-[10px] w-[120px] h-[120px] flex flex-col justify-center items-center '>
                            <h3 className='text-xl font-semibold'>&#8377;{order_value}</h3>
                            <p className='text-center text-[18px] mt-1'>Order <br /> Value</p>
                        </div>
                        <div className='bg-[#ecd2a0] rounded-[10px] w-[120px] h-[120px] flex flex-col justify-center items-center'>
                           
                            <h3 className='text-xl font-semibold'>&#8377;{points_redeemed}</h3>
                            <p className='text-center text-[18px] mt-1'>Loyalty <br /> Used</p>
                        </div>
                        <div className='bg-[#ecd2a0] rounded-[10px] w-[120px] h-[120px] flex flex-col justify-center items-center'>
                            <h3 className='text-xl font-semibold'>&#8377;{cash_collected}</h3>
                            <p className='text-center text-[18px] mt-1'>Cash <br /> Collected</p>
                        </div>
                        <div className='bg-[#ecd2a0] rounded-[10px] w-[120px] h-[120px] flex flex-col justify-center items-center'>
                            <h3 className='text-xl font-semibold'>&#8377;{points_redeemed}</h3>
                            <p className='text-center text-[18px] mt-1'>Loyalty <br /> Rewarded</p>
                        </div>


                    </div>
                }



            </div>

        </div>
    );
};

export default SingleDayTransactions;