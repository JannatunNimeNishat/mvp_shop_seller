import { FaArrowRight } from "react-icons/fa";

const MdButton = ({arrow,children}) => {
    return (
        <button className="text-2xl font-bold text-white bg-[#CC8700] px-6 py-2 rounded-lg flex justify-between items-center hover:scale-105 ease-in-out duration-150">
            {children}
           {
            arrow &&
             <FaArrowRight className=" ml-2 mt-1  h-5 w-5 "/>
           }
        </button>
    );
};

export default MdButton;