import axios from "axios";
import { useEffect, useState } from "react";
import SingleDayTransactions from "../../Components/SingleDayTransactions";


const TransactionHistory = () => {

    const [transactionData, setTransactionData] = useState([]);
    const [sortByMonth, setSortByMonth] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const sellerId = {
                sellerId: 1
            }
            try {
                axios.post(`http://13.200.100.28:5000/api/fetchTransactionsBySellerID`, sellerId)
                    .then((res) => {
                        // console.log(res?.data?.transactions);
                        setTransactionData(res?.data?.transactions);
                    })
            } catch (error) {
                console.log(error);
            }
        }
        getData();

    }, [])
    // console.log(transactionData);

    return (
        <div className="my-container">
            <h2 className="text-xl font-semibold py-6">Transaction History</h2>
            {/* filters */}
            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>



            <div className="mt-8">
                {/* single day transactions */}
                <div>
                    {
                        transactionData?.map((singleDayTransactionsData, index) => <SingleDayTransactions
                            key={index}
                            singleDayTransactionsData={singleDayTransactionsData}
                        ></SingleDayTransactions>)
                    }
                </div>

            </div>

        </div>
    );
};

export default TransactionHistory;