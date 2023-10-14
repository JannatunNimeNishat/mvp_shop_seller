import MdButton from "../../Components/Buttons/MdButton";


const Home = () => {
    return (
        <div className="my-container flex justify-center items-center h-screen w-screen">
            <div className=" w-[650px] h-[450px] border border-[#CC8700] px-5 flex flex-col items-center justify-center gap-5 rounded-[10px]">
                <h3 className="text-3xl font-semibold text-center ">Find Customer by giving Loyalty</h3>
                <div className=" w-[500px] h-[200px] border border-[#CC8700] px-5 flex flex-col items-center justify-center gap-4 rounded-[10px]">
                    <input className="border px-3 py-2 w-11/12" placeholder="Enter Phone Number" type="text" name="" id="" />
                    <MdButton 
                    arrow={true}
                    >
                        Get Customer
                    </MdButton>
                </div>
            </div>
        </div>
    );
};

export default Home;