import { createBrowserRouter } from "react-router-dom";

import TransactionHistory from "../Pages/TransactionHistory/TransactionHistory";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>,
        children:[
            {
                path:'/transaction_history',
                element:<TransactionHistory/>
            },
            {
                path:'/home',
                element:<Home/>
            }
        ]
    }
    
])



export default router;
