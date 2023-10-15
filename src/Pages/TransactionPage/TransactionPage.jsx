import { Link, useNavigate, useParams } from "react-router-dom";
import useGetCustomerByPhone from "../../hooks/useGetCustomerByPhone";
import MdButton from "../../Components/Buttons/MdButton";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContextProvider } from "../../Providers/ShopDataProvider";



const TransactionPage = () => {
    const { phoneNumber } = useParams();
    const [customerData, customerDataLoading,] = useGetCustomerByPhone(phoneNumber);
    const { handleSuccessFulTransactions } = useContext(ShopContextProvider);
    // user input
    const [saleAmount, setSaleAmount] = useState(0) //9654

    const [redeemAmount, setRedeemAmount] = useState(0);
    const [rewardAmount, setRewardAmount] = useState(0);

    const [orderValue, setOrderValue] = useState(0);

    const [cashToCollect, setCashToCollect] = useState(0);

    const navigate = useNavigate();

    const { city, name, phonenumber, reward_balance, reward_percentage, sale_balance } = customerData || {};


    useEffect(() => {

        const getData = async () => {

            try {
                axios.post(`http://13.200.100.28:5000/api/showTransactionDetails`, {
                    "sellerId": 1,
                    "customerId": 1,
                    "orderValue": parseFloat(saleAmount)
                })
                    .then((res) => {
                        console.log(res.data);
                        const { cash_to_collect, order_value, redeem_amount, reward_amount } = res?.data || {}
                        setCashToCollect(cash_to_collect)
                        setOrderValue(order_value)
                        setRedeemAmount(redeem_amount)
                        setRewardAmount(reward_amount)
                    })
            } catch (error) {
                console.log(error);
            }
        }
        getData();

    }, [saleAmount])


    // loading
    if (customerDataLoading) {
        return <h3 className="text-4xl font-bold text-center">{customerData.error}</h3>
    }

    // error
    if (customerData?.error) {
        return <div className=" font-bold flex items-center gap-8 px-8">
            <Link to='/home' className="text-yellow-500 cursor-pointer"> Go back</Link >
            <p className="text-4xl">{customerData?.error}</p>
        </div>
    }


    const handleNextBtn = () => {
        try {
            axios.post(`http://13.200.100.28:5000/api/processTransaction`, {
                "sellerId": 1,
                "customerId": 1,
                "orderValue": orderValue
            })
                .then((res) => {
                    console.log(res?.data);
                    handleSuccessFulTransactions(res?.data)
                    navigate('/transaction_history')
                })
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="my-container py-5">


            <h3 className="text-2xl font-bold text-center ">Punch Order</h3>

            <div className="my-3 h-[1px] bg-black" />

            <h3 className="text-4xl font-bold text-center pt-4">{name || `Madhav Goswami`}</h3>
            <h3 className="text-2xl text-[#979797] font-bold text-center ">Contact: {phonenumber || `99999999`}</h3>

            {/* tabs */}
            <div className="flex justify-between w-10/12 mx-auto py-5">
                <div className='bg-[#ecd2a0] rounded-[10px] w-[120px] h-[120px] flex flex-col justify-center items-center '>
                    <h3 className='text-2xl font-bold text-[#CC8700]'>{reward_balance}</h3>
                    <p className='text-center text-[16px] mt-1'>MRP Points</p>
                </div>

                <div className='bg-[#ecd2a0] rounded-[10px] w-[120px] h-[120px] flex flex-col justify-center items-center '>
                    <h3 className='text-2xl font-bold text-[#CC8700]'>{sale_balance}</h3>
                    <p className='text-center text-[16px] mt-1'>Total Sales</p>
                </div>

                <div className='bg-[#ecd2a0] rounded-[10px] w-[120px] h-[120px] flex flex-col justify-center items-center '>
                    <h3 className='text-3xl font-bold text-[#CC8700]'>{reward_percentage}%</h3>
                    <p className='text-center text-[16px] mt-1'>Reward</p>
                </div>

            </div>

            {/*  <h3 className="text-2xl font-bold text-center pt-12 text-[#CC8700]">{reward_balance || `370`}
                <span className="text-black">Loyalty points</span>
            </h3> */}

            <div className="w-full flex justify-center mt-10">
                <input className="w-[250px] px-3 py-3 border shadow-[3.027px_3.0276px_3.027px_0_rgba(0,0,0,0.25)]  placeholder-lg text-2xl" type="number" placeholder="Enter Sale Amount" name="" id=""
                    onChange={(e) => setSaleAmount(e.target.value)}
                />
            </div>

            <div className="mt-8 w-[450px] mx-auto">
                <h1 className="font-bold text-3xl text-start pb-3">Summary</h1>
                <div className="flex justify-between text-[#585858] text-xl py-2">
                    <p className="">Total Value</p>
                    <p className="font-semibold">&#8377;{saleAmount || 0}</p>
                </div>

                <hr />
                <div className="flex justify-between text-[#585858] text-xl py-2">
                    <p className="">Points Redeemed</p>
                    <p className="font-semibold">-&#8377;{redeemAmount}</p>
                </div>
                <hr />

                <div className="flex justify-between text-black text-xl py-2">
                    <p className="font-bold">Cash To Collect</p>
                    <p className="font-semibold text-[#2B9706]">&#8377;{cashToCollect}</p>
                </div>

                <div className="my-8 w-full flex justify-center">
                    <small ><span className="text-[#CC8700">₹{rewardAmount}</span> Rewards will given for this purchase</small>
                </div>

                <div className="w-full flex justify-center" onClick={handleNextBtn}>
                    <MdButton

                        arrow={true}
                    >
                        <p>Collect {cashToCollect}</p>
                    </MdButton>
                </div>

                <div className="mt-10 mb-3 h-[1px] bg-black" />
                <h3 className="text-2xl font-bold text-center text-[#CC8700]">Call support</h3>


            </div>

        </div>
    );
};

export default TransactionPage;