
import { useContext } from "react";
import SingleDayTransactions from "../../Components/SingleDayTransactions";
import { ShopContextProvider } from "../../Providers/ShopDataProvider";
import TransactionFilters from "../../Components/TransactionFilters";
import { CgOptions } from "react-icons/cg";

const TransactionHistory = () => {
    const { transactionData,handleModalState,filterModalState } = useContext(ShopContextProvider)
    // console.log(transactionData);

    return (
        <div className="my-container">
            <h2 className="text-xl font-semibold py-6">Transaction History</h2>
            {/* filters */}
            {/* <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div> */}

            {/* modal open button */}
            <div className='  flex items-center justify-center w-[110px] h-[50px] border rounded-[10px] gap-1 cursor-pointer'
                onClick={handleModalState}
            >
                <h3 className="font-semibold text-[20px]">Filters</h3>
                <CgOptions className="w-[28px] h-[28px]"/>
            </div>
            
            {
                filterModalState &&  <TransactionFilters />
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