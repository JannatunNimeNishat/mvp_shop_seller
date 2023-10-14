import { Link, useParams } from "react-router-dom";
import useGetCustomerByPhone from "../../hooks/useGetCustomerByPhone";
import MdButton from "../../Components/Buttons/MdButton";


const TransactionPage = () => {
    const { phoneNumber } = useParams();
    const [customerData, customerDataLoading,] = useGetCustomerByPhone(phoneNumber);
    console.log(customerData);

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

    const { city, name, phonenumber, reward_balance, reward_percentage, sale_balance } = customerData || {};


    const handleNextBtn = () => {
        /*  if (clientPhoneNumber) {
             const url = `/transaction_page/${clientPhoneNumber}`
             navigate(url)
         } */

    }

    return (
        <div className="my-container py-5">


            <h3 className="text-2xl font-bold text-center ">Punch Order</h3>

            <div className="my-3 h-[1px] bg-black" />

            <h3 className="text-4xl font-bold text-center pt-5">{name || `Madhav Goswami`}</h3>
            <h3 className="text-2xl text-[#979797] font-bold text-center ">Contact: {phonenumber || `99999999`}</h3>

            <h3 className="text-2xl font-bold text-center pt-12 text-[#CC8700]">{reward_balance || `370`}
                <span className="text-black">Loyalty points</span>
            </h3>

            <div className="w-full flex justify-center mt-10">
                <input className="w-[250px] px-3 py-3 border shadow-[3.027px_3.0276px_3.027px_0_rgba(0,0,0,0.25)]  placeholder-lg text-2xl" type="text" placeholder="Enter Sale Amount" name="" id="" />
            </div>

            <div className="mt-8 w-[450px] mx-auto">
                <h1 className="font-bold text-3xl text-start pb-3">Summary</h1>
                <div className="flex justify-between text-[#585858] text-xl py-2">
                    <p className="">Total Value</p>
                    <p className="font-semibold">&#8377;530</p>
                </div>

                <hr />
                <div className="flex justify-between text-[#585858] text-xl py-2">
                    <p className="">Points Redeemed</p>
                    <p className="font-semibold">&#8377;53</p>
                </div>
                <hr />

                <div className="flex justify-between text-black text-xl py-2">
                    <p className="font-bold">Cash To Collect</p>
                    <p className="font-semibold text-[#2B9706]">&#8377;477</p>
                </div>

                <div className="my-8 w-full flex justify-center">
                    <small ><span className="text-[#CC8700">₹47</span> Rewards will given for this purchase</small>
                </div>

                <div className="w-full flex justify-center" onClick={handleNextBtn}>
                    <MdButton

                        arrow={true}
                    >
                        Next
                    </MdButton>
                </div>

                <div className="mt-10 mb-3 h-[1px] bg-black" />
                <h3 className="text-2xl font-bold text-center text-[#CC8700]">Call support</h3>


            </div>

        </div>
    );
};

export default TransactionPage;