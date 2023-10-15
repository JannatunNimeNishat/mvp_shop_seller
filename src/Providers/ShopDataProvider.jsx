import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ShopContextProvider = createContext();

const ShopDataProvider = ({ children }) => {
    // all transactions data
    const [transactionData, setTransactionData] = useState([]);

    // modal  state
    const [filterModalState, setFilterModalState] = useState(false);

    //filter data
    const [filterDateState, setfilterDateState] = useState(false);

    //successful transactions state
    const [successfulTransactions, setSuccessfulTransactions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const sellerId = {
                sellerId: 1
            }
            try {
                axios.post(`http://13.200.100.28:5000/api/fetchTransactionsBySellerID`, sellerId)
                    .then((res) => {
                        setTransactionData(res?.data?.transactions);
                    })
            } catch (error) {
                console.log(error);
            }
        }
        getData();

    }, [successfulTransactions])

    // modal open close
    const handleModalState = () => {

        setFilterModalState(!filterModalState);
    }

    //filter deta handelar
    const handleFilterData = (data) => {
        console.log(data);
        setfilterDateState(data)
    }

    //handleSuccessFull
    const handleSuccessFulTransactions = (value) => {
        console.log(value);
        const previousSuccessFulTransactions = [...successfulTransactions];
        setSuccessfulTransactions([
            previousSuccessFulTransactions, value
        ])
    }
    const value = {
        user: 'ni7',
        transactionData,
        handleModalState,
        filterModalState,
        handleFilterData,
        filterDateState,
        successfulTransactions,
        handleSuccessFulTransactions

    }
    return (
        <ShopContextProvider.Provider value={value}>
            {children}
        </ShopContextProvider.Provider>
    );
};

export default ShopDataProvider;