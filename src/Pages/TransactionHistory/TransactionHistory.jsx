
import { useContext, useEffect } from "react";
import SingleDayTransactions from "../../Components/SingleDayTransactions";
import { ShopContextProvider } from "../../Providers/ShopDataProvider";
import TransactionFilters from "../../Components/TransactionFilters";
import { CgOptions } from "react-icons/cg";

const TransactionHistory = () => {
    const { transactionData, handleModalState, filterModalState,successfulTransactions } = useContext(ShopContextProvider)
    console.log('successfulTransactions',successfulTransactions);
   
    return (
        <div className="my-container">
            <h2 className="text-xl font-semibold py-6">Transaction History</h2>
            <h2 className="text-xl font-semibold py-6">Total Transactions {transactionData.length} </h2>
            {/* filters */}

            {/* modal open button */}
            <div className='  flex items-center justify-center w-[110px] h-[50px] border rounded-[10px] gap-1 cursor-pointer'
                onClick={handleModalState}
            >
                <h3 className="font-semibold text-[20px]">Filters</h3>
                <CgOptions className="w-[28px] h-[28px]" />
            </div>

            {
                filterModalState && <TransactionFilters />
            }



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