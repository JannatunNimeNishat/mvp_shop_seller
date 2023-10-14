import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ShopContextProvider = createContext();

const ShopDataProvider = ({ children }) => {

    const [transactionData, setTransactionData] = useState([]);

     // modal  state
     const [filterModalState, setFilterModalState] = useState(false);
     
     //filter data
     const [filterDateState, setfilterDateState] = useState(false);

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

    // modal open close
    const handleModalState = () => {

        setFilterModalState(!filterModalState);
    }

    //filter deta handelar
    const handleFilterData = (data) =>{
        console.log(data);
        setfilterDateState(data)
    }

    const value = {
        user: 'ni7',
        transactionData,
        handleModalState,
        filterModalState,
        handleFilterData,
        filterDateState
    }
    return (
        <ShopContextProvider.Provider value={value}>
            {children}
        </ShopContextProvider.Provider>
    );
};

export default ShopDataProvider;