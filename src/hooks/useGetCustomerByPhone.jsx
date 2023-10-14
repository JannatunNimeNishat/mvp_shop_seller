import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetCustomerByPhone = (phoneNumber) => {


    const { data: customerData = [], isLoading: customerDataLoading, refetch } = useQuery({
        queryKey: ['customerData'],
        queryFn: async () => {
            const res = await axios.post(`http://13.200.100.28:5000/api/getCustomerbyPhoneNumber`, {"phoneNumber":phoneNumber,
            "sellerId" : "1"})
            // return res.data
           /*  if(!res?.data?.error){
                throw new Error('data not found')
            } */
            return res?.data
            
        }
    })
    return [customerData, customerDataLoading, refetch]
};


export default useGetCustomerByPhone;