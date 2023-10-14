import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import TransactionHistory from "../Pages/TransactionHistory/TransactionHistory";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children:[
            {
                path:'/transaction_history',
                element:<TransactionHistory/>
            }
        ]
    }
    
])



export default router;
